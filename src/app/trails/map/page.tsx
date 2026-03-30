"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Map as MapboxMap } from "mapbox-gl";
import {
  MapPin,
  Mountain,
  Clock,
  ArrowRight,
  Layers,
  Maximize,
  Mountain as TerrainIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { trails } from "@/data/trails";
import type { Trail } from "@/types";

// TODO: Replace with your real Mapbox access token
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWxwaW5lZWJpa2V0b3VycyIsImEiOiJjbHh4eHh4eHgwMDAwMDJxcXFxcXFxcXEifQ.placeholder";

const difficultyColor: Record<Trail["difficulty"], string> = {
  easy: "#22c55e",
  moderate: "#3b82f6",
  challenging: "#1a1a1a",
};

const difficultyLabel: Record<Trail["difficulty"], string> = {
  easy: "Easy",
  moderate: "Moderate",
  challenging: "Challenging",
};

const difficultyBadge: Record<Trail["difficulty"], string> = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

const difficultyDot: Record<Trail["difficulty"], string> = {
  easy: "bg-green-500",
  moderate: "bg-blue-500",
  challenging: "bg-gray-900",
};

/** Compute bounding box for all trail coordinates */
function getAllBounds(): [[number, number], [number, number]] {
  let minLng = Infinity,
    minLat = Infinity,
    maxLng = -Infinity,
    maxLat = -Infinity;

  for (const trail of trails) {
    for (const [lng, lat] of trail.routeCoordinates) {
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }
  }

  return [
    [minLng, minLat],
    [maxLng, maxLat],
  ];
}

// ---------------------------------------------------------------------------
// Map Component (client-only, loaded dynamically)
// ---------------------------------------------------------------------------

interface TrailMapProps {
  activeTrail: string | null;
  onTrailClick: (slug: string) => void;
}

function TrailMap({ activeTrail, onTrailClick }: TrailMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [terrainEnabled, setTerrainEnabled] = useState(true);
  const [mapboxgl, setMapboxgl] = useState<typeof import("mapbox-gl") | null>(
    null
  );

  // Dynamically import mapbox-gl to avoid SSR issues
  useEffect(() => {
    import("mapbox-gl").then((mod) => {
      // Also load the CSS
      import("mapbox-gl/dist/mapbox-gl.css");
      setMapboxgl(mod);
    });
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapboxgl || !containerRef.current || mapRef.current) return;

    mapboxgl.default.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.default.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-115.46, 51.12],
      zoom: 10.5,
      pitch: 45,
      bearing: -10,
      antialias: true,
    });

    mapRef.current = map;

    // Controls
    map.addControl(
      new mapboxgl.default.NavigationControl({ visualizePitch: true }),
      "top-right"
    );

    map.on("load", () => {
      // 3D terrain
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

      // Sky layer for atmosphere
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 0.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });

      // Add trail routes
      trails.forEach((trail) => {
        const sourceId = `trail-${trail.slug}`;
        const lineId = `trail-line-${trail.slug}`;
        const lineHighlightId = `trail-line-highlight-${trail.slug}`;

        // GeoJSON source
        map.addSource(sourceId, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {
              name: trail.name,
              slug: trail.slug,
              difficulty: trail.difficulty,
              distance: trail.distance,
              elevation: trail.elevationGain,
              duration: trail.duration,
            },
            geometry: {
              type: "LineString",
              coordinates: trail.routeCoordinates,
            },
          },
        });

        // Highlight layer (wider, behind)
        map.addLayer({
          id: lineHighlightId,
          type: "line",
          source: sourceId,
          layout: { "line-join": "round", "line-cap": "round" },
          paint: {
            "line-color": difficultyColor[trail.difficulty],
            "line-width": 10,
            "line-opacity": 0,
          },
        });

        // Main route line
        map.addLayer({
          id: lineId,
          type: "line",
          source: sourceId,
          layout: { "line-join": "round", "line-cap": "round" },
          paint: {
            "line-color": difficultyColor[trail.difficulty],
            "line-width": 4,
            "line-opacity": 0.85,
          },
        });

        // Click handler on the trail line
        map.on("click", lineId, (e) => {
          onTrailClick(trail.slug);
        });
        map.on("click", lineHighlightId, (e) => {
          onTrailClick(trail.slug);
        });

        // Cursor pointer on hover
        map.on("mouseenter", lineId, () => {
          map.getCanvas().style.cursor = "pointer";
          map.setPaintProperty(lineId, "line-width", 6);
        });
        map.on("mouseleave", lineId, () => {
          map.getCanvas().style.cursor = "";
          map.setPaintProperty(lineId, "line-width", 4);
        });
      });

      setMapLoaded(true);
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [mapboxgl, onTrailClick]);

  // Handle active trail highlight + popup
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded || !mapboxgl) return;

    // Remove any existing popup
    const existingPopups = document.querySelectorAll(".mapboxgl-popup");
    existingPopups.forEach((el) => el.remove());

    trails.forEach((trail) => {
      const lineId = `trail-line-${trail.slug}`;
      const highlightId = `trail-line-highlight-${trail.slug}`;
      const isActive = trail.slug === activeTrail;

      // Toggle highlight glow
      if (map.getLayer(highlightId)) {
        map.setPaintProperty(highlightId, "line-opacity", isActive ? 0.3 : 0);
      }

      // Dim non-active trails when one is selected
      if (map.getLayer(lineId)) {
        map.setPaintProperty(
          lineId,
          "line-opacity",
          activeTrail === null ? 0.85 : isActive ? 1 : 0.3
        );
        map.setPaintProperty(lineId, "line-width", isActive ? 6 : 4);
      }
    });

    // Fly to active trail and show popup
    if (activeTrail) {
      const trail = trails.find((t) => t.slug === activeTrail);
      if (trail) {
        map.flyTo({
          center: trail.mapCenter as [number, number],
          zoom: 12.5,
          pitch: 50,
          duration: 1500,
          essential: true,
        });

        // Show popup at trail center
        const popup = new mapboxgl.default.Popup({
          closeOnClick: false,
          closeButton: true,
          maxWidth: "280px",
          className: "trail-popup",
        })
          .setLngLat(trail.mapCenter as [number, number])
          .setHTML(
            `<div style="font-family: var(--font-body), system-ui, sans-serif;">
              <h3 style="font-family: var(--font-heading), system-ui, sans-serif; font-weight: 700; font-size: 16px; margin: 0 0 6px; color: #3B4856;">
                ${trail.name}
              </h3>
              <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; margin-bottom: 8px;
                background: ${trail.difficulty === "easy" ? "#dcfce7" : trail.difficulty === "moderate" ? "#dbeafe" : "#1a1a1a"};
                color: ${trail.difficulty === "easy" ? "#166534" : trail.difficulty === "moderate" ? "#1e40af" : "#ffffff"};">
                ${difficultyLabel[trail.difficulty]}
              </span>
              <div style="display: flex; gap: 12px; font-size: 13px; color: #6b7280; margin-bottom: 8px;">
                <span>${trail.distance}</span>
                <span>${trail.elevationGain}</span>
              </div>
              <div style="font-size: 13px; color: #6b7280; margin-bottom: 10px;">
                ${trail.duration}
              </div>
              <a href="/trails/${trail.slug}"
                 style="display: inline-flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 600; color: #1A5C5C; text-decoration: none;">
                View Trail Details &rarr;
              </a>
            </div>`
          )
          .addTo(map);

        popup.on("close", () => {
          // Reset all trails to default opacity when popup closed
          trails.forEach((t) => {
            const lid = `trail-line-${t.slug}`;
            const hid = `trail-line-highlight-${t.slug}`;
            if (map.getLayer(lid)) {
              map.setPaintProperty(lid, "line-opacity", 0.85);
              map.setPaintProperty(lid, "line-width", 4);
            }
            if (map.getLayer(hid)) {
              map.setPaintProperty(hid, "line-opacity", 0);
            }
          });
        });
      }
    }
  }, [activeTrail, mapLoaded, mapboxgl]);

  // Toggle terrain
  const toggleTerrain = useCallback(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    if (terrainEnabled) {
      map.setTerrain(null);
      map.easeTo({ pitch: 0, duration: 500 });
    } else {
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      map.easeTo({ pitch: 45, duration: 500 });
    }
    setTerrainEnabled(!terrainEnabled);
  }, [terrainEnabled, mapLoaded]);

  // Fit all trails
  const fitAllTrails = useCallback(() => {
    const map = mapRef.current;
    if (!map || !mapboxgl) return;

    const bounds = getAllBounds();
    map.fitBounds(bounds, {
      padding: { top: 60, bottom: 60, left: 60, right: 60 },
      duration: 1200,
    });
  }, [mapboxgl]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />

      {/* Custom map controls */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
        <button
          onClick={toggleTerrain}
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium shadow-md transition-colors",
            terrainEnabled
              ? "bg-primary text-white"
              : "bg-white text-slate hover:bg-cream"
          )}
          title={terrainEnabled ? "Disable 3D terrain" : "Enable 3D terrain"}
        >
          <TerrainIcon className="h-4 w-4" />
          <span className="hidden sm:inline">3D Terrain</span>
        </button>

        <button
          onClick={fitAllTrails}
          className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate shadow-md hover:bg-cream transition-colors"
          title="Fit all trails"
        >
          <Maximize className="h-4 w-4" />
          <span className="hidden sm:inline">Fit All</span>
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Trail Sidebar Card
// ---------------------------------------------------------------------------

interface TrailSidebarCardProps {
  trail: Trail;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

function TrailSidebarCard({
  trail,
  isActive,
  onClick,
  index,
}: TrailSidebarCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      onClick={onClick}
      className={cn(
        "w-full text-left rounded-xl border p-4 transition-all duration-200",
        isActive
          ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/20"
          : "border-cream-dark bg-white hover:shadow-md hover:border-primary/20"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={cn(
                "w-2.5 h-2.5 rounded-full shrink-0",
                difficultyDot[trail.difficulty]
              )}
            />
            <h4
              className={cn(
                "font-semibold text-sm truncate transition-colors",
                isActive ? "text-primary" : "text-slate"
              )}
            >
              {trail.name}
            </h4>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-foreground/50 mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {trail.distance}
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="h-3 w-3" />
              {trail.elevationGain}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {trail.duration}
            </span>
          </div>
        </div>
        <ArrowRight
          className={cn(
            "h-4 w-4 shrink-0 mt-1 transition-all",
            isActive
              ? "text-primary"
              : "text-primary/40"
          )}
        />
      </div>

      {/* Expanded info when active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 pt-3 border-t border-cream-dark">
              <p className="text-xs text-foreground/60 line-clamp-2 mb-3">
                {trail.description}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                    difficultyBadge[trail.difficulty]
                  )}
                >
                  {difficultyLabel[trail.difficulty]}
                </span>
                <Link
                  href={`/trails/${trail.slug}`}
                  className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// Mobile Bottom Sheet
// ---------------------------------------------------------------------------

interface BottomSheetProps {
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

function BottomSheet({ children, isExpanded, onToggle }: BottomSheetProps) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden"
      initial={false}
      animate={{
        y: isExpanded ? 0 : "calc(100% - 64px)",
      }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      {/* Handle bar */}
      <button
        onClick={onToggle}
        className="w-full bg-white rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center justify-center"
      >
        <div className="w-10 h-1 rounded-full bg-gray-300 mb-1" />
      </button>
      <div className="flex items-center justify-between px-4 pb-2 bg-white">
        <h3 className="font-[var(--font-heading)] text-sm font-semibold text-slate">
          {trails.length} Trails
        </h3>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-foreground/40" />
        ) : (
          <ChevronUp className="h-4 w-4 text-foreground/40" />
        )}
      </div>

      {/* Content */}
      <div className="bg-white max-h-[60vh] overflow-y-auto px-4 pb-8 space-y-3">
        {children}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function TrailMapPage() {
  const [activeTrail, setActiveTrail] = useState<string | null>(null);
  const [sheetExpanded, setSheetExpanded] = useState(false);

  const handleTrailClick = useCallback((slug: string) => {
    setActiveTrail((prev) => (prev === slug ? null : slug));
    // On mobile, collapse sheet when a trail is selected so user sees the map
    setSheetExpanded(false);
  }, []);

  const trailCards = trails.map((trail, i) => (
    <TrailSidebarCard
      key={trail.slug}
      trail={trail}
      isActive={activeTrail === trail.slug}
      onClick={() => handleTrailClick(trail.slug)}
      index={i}
    />
  ));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Interactive Trail Map
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-xl mx-auto text-white/80"
          >
            Explore all our e-bike trails in the Canmore-Banff corridor.
            Colour-coded by difficulty with 3D terrain.
          </motion.p>
        </div>
      </section>

      {/* Map + Sidebar Layout */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row h-[calc(100vh-180px)] min-h-[500px]">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex lg:flex-col w-[360px] shrink-0 bg-cream/50 border-r border-cream-dark overflow-hidden">
            <div className="p-4 border-b border-cream-dark bg-white">
              {/* Legend */}
              <h3 className="font-semibold text-slate text-sm flex items-center gap-2 mb-3">
                <Layers className="h-4 w-4 text-primary" />
                Trail Difficulty
              </h3>
              <div className="flex gap-4">
                {(["easy", "moderate", "challenging"] as const).map((d) => (
                  <div key={d} className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        "w-3 h-3 rounded-full shrink-0",
                        difficultyDot[d]
                      )}
                    />
                    <span className="text-xs text-foreground/70">
                      {difficultyLabel[d]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {trailCards}
            </div>
          </aside>

          {/* Map */}
          <div className="flex-1 relative">
            <TrailMap
              activeTrail={activeTrail}
              onTrailClick={handleTrailClick}
            />
          </div>
        </div>

        {/* Mobile Bottom Sheet */}
        <BottomSheet
          isExpanded={sheetExpanded}
          onToggle={() => setSheetExpanded(!sheetExpanded)}
        >
          {/* Mobile legend */}
          <div className="flex gap-4 pb-2 border-b border-cream-dark mb-2">
            {(["easy", "moderate", "challenging"] as const).map((d) => (
              <div key={d} className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "w-2.5 h-2.5 rounded-full shrink-0",
                    difficultyDot[d]
                  )}
                />
                <span className="text-[11px] text-foreground/70">
                  {difficultyLabel[d]}
                </span>
              </div>
            ))}
          </div>
          {trailCards}
        </BottomSheet>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-slate">
            Ready to Hit the Trails?
          </h2>
          <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
            Join a guided tour with local experts or rent an e-bike and explore
            at your own pace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tours"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-8 py-3",
                "bg-primary text-white font-semibold",
                "hover:bg-primary-dark transition-colors",
                "min-h-[46px]"
              )}
            >
              Browse Guided Tours
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/trails"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-8 py-3",
                "border-2 border-primary text-primary font-semibold",
                "hover:bg-primary hover:text-white transition-colors",
                "min-h-[46px]"
              )}
            >
              View All Trails
            </Link>
          </div>
        </div>
      </section>

      {/* Global popup styles */}
      <style jsx global>{`
        .mapboxgl-popup-content {
          border-radius: 12px !important;
          padding: 16px !important;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
          border: 1px solid #e5e7eb !important;
        }
        .mapboxgl-popup-close-button {
          font-size: 18px !important;
          padding: 4px 8px !important;
          color: #6b7280 !important;
        }
        .mapboxgl-popup-close-button:hover {
          color: #1A5C5C !important;
          background: transparent !important;
        }
        .mapboxgl-popup-tip {
          border-top-color: #ffffff !important;
        }
        .mapboxgl-ctrl-group {
          border-radius: 10px !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </>
  );
}
