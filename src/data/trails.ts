import { Trail } from "@/types";

export const trails: Trail[] = [
  // =============================================
  // LAKE LOUISE AREA ROUTES (2027)
  // =============================================
  {
    slug: "lake-louise-grand-loop",
    name: "Lake Louise Grand Loop",
    distance: "~34 km round trip",
    elevationGain: "~240 m total",
    difficulty: "moderate",
    duration: "5-6 hours riding",
    surface: "Paved roads throughout",
    batteryUsage: "50-65%",
    description:
      "The full Lake Louise experience in one epic loop. Starting from the Lake Louise Ski Resort base area, ride 7 km down Lake Louise Drive to the famous lake, then continue 14 km up the car-free Moraine Lake Road to one of the most photographed places on Earth. The return is mostly downhill — a thrilling, fast descent through mountain scenery. The e-bike motor handles the 527m elevation gain to Moraine Lake, so you arrive fresh enough to hike the Rockpile Trail and enjoy a lakeside picnic. This is the route that makes private vehicle owners jealous — Moraine Lake Road is closed to cars, but open to bikes.",
    heroImage: "/images/stock/moraine-lake-panorama.jpg",
    gallery: [],
    season: "June — October",
    highlights: [
      "Car-free Moraine Lake Road — bikes only, no private vehicles",
      "Lake Louise lakeshore with Victoria Glacier and Fairmont Chateau",
      "Moraine Lake and the Valley of the Ten Peaks",
      "Rockpile Trail — the Twenty Dollar View (0.8 km, 15-20 min)",
      "Subalpine forest and mountain meadows along Lake Louise Drive",
      "Exhilarating 14 km downhill return from Moraine Lake",
    ],
    wildlife: [
      "Black bears forage along Moraine Lake Road in berry season — ride with awareness",
      "Pikas and marmots on the rock piles around Moraine Lake",
      "Golden eagles and Clark's nutcrackers in the subalpine zone",
      "Elk in the Lake Louise village area, especially early morning and evening",
    ],
    mapCenter: [-116.18, 51.39],
    routeCoordinates: [
      [-116.1622, 51.4419], // Ski Resort base
      [-116.1700, 51.4350], // Lake Louise Drive mid
      [-116.1800, 51.4280], // Approaching Lake Louise
      [-116.2169, 51.4177], // Lake Louise / Chateau
      [-116.1950, 51.4050], // Moraine Lake Road start
      [-116.1880, 51.3800], // Moraine Lake Road mid
      [-116.1850, 51.3550], // Approaching Moraine Lake
      [-116.1822, 51.3271], // Moraine Lake
    ],
  },
  {
    slug: "lake-louise-drive",
    name: "Lake Louise Drive",
    distance: "~15 km round trip",
    elevationGain: "~150 m",
    difficulty: "easy",
    duration: "1-1.5 hours riding",
    surface: "Paved road",
    batteryUsage: "15-20%",
    description:
      "The gentlest route in our Lake Louise collection — a scenic 7 km ride from the Ski Resort base area down to the famous lake and back. Lake Louise Drive winds through dense subalpine forest with mountain peaks appearing through the trees. The ride to the lake is mostly downhill, and the e-bike makes the return uphill feel effortless. At the lake, you'll find the iconic turquoise water, Victoria Glacier, and the Fairmont Chateau Lake Louise. Perfect for families, first-time e-bike riders, and anyone who wants a relaxed morning or afternoon in the mountains.",
    heroImage: "/images/stock/lake-louise-chateau.jpg",
    gallery: [],
    season: "June — October",
    highlights: [
      "Lake Louise — one of the most famous lakes in the world",
      "Victoria Glacier towering above turquoise water",
      "Fairmont Chateau Lake Louise — a historic landmark",
      "Lakeshore walking trail — flat, easy, stunning",
      "Subalpine forest ride through spruce and fir",
    ],
    wildlife: [
      "Elk commonly seen near the Lake Louise village area",
      "Squirrels, chipmunks, and whiskey jacks along the road",
      "Bald eagles occasionally spotted over the Bow Valley",
    ],
    mapCenter: [-116.19, 51.43],
    routeCoordinates: [
      [-116.1622, 51.4419], // Ski Resort base
      [-116.1700, 51.4350], // Lake Louise Drive mid
      [-116.1800, 51.4280], // Approaching village
      [-116.2000, 51.4220], // Near lake
      [-116.2169, 51.4177], // Lake Louise / Chateau
    ],
  },
  {
    slug: "moraine-lake-road",
    name: "Moraine Lake Road",
    distance: "~28 km round trip (from Lake Louise junction)",
    elevationGain: "153 m",
    difficulty: "moderate",
    duration: "2-3 hours riding",
    surface: "Paved road — closed to private vehicles",
    batteryUsage: "35-45%",
    description:
      "Moraine Lake Road is 12.5 km of paved mountain road that climbs 153 metres from the Lake Louise junction to Moraine Lake — and it's closed to private vehicles. This makes it one of the most unique cycling experiences in the Canadian Rockies: a smooth, car-free mountain road winding through subalpine forest to one of the most beautiful lakes on Earth. On an e-bike, the steady climb is manageable and enjoyable. The descent is pure joy — 14 km of smooth, winding downhill through mountain scenery. At the top, the Rockpile Trail (0.8 km return, 15 min) delivers the famous Twenty Dollar View.",
    heroImage: "/images/stock/moraine-lake-road.jpg",
    gallery: [],
    season: "June 1 — October 12 (road opening dates vary annually)",
    highlights: [
      "Closed to private vehicles — peaceful, car-free riding",
      "153m climb made easy by e-bike pedal assist",
      "Moraine Lake — turquoise water ringed by ten peaks",
      "Rockpile Trail viewpoint — the iconic Twenty Dollar View",
      "14 km smooth downhill return — the best descent in the Rockies",
      "Subalpine forest with mountain streams and wildflowers",
    ],
    wildlife: [
      "Black bears are frequently spotted along this road — stay alert and carry bear spray",
      "Pikas live in the rock fields near Moraine Lake — listen for their sharp 'EEEP' calls",
      "Hoary marmots sun themselves on boulders in the subalpine zone",
      "Clark's nutcrackers and gray jays are common along the treeline",
    ],
    mapCenter: [-116.185, 51.37],
    routeCoordinates: [
      [-116.1950, 51.4050], // Junction with Lake Louise Drive
      [-116.1920, 51.3950], // Early road
      [-116.1900, 51.3850], // Mid road
      [-116.1880, 51.3750], // Switchbacks
      [-116.1860, 51.3600], // Upper road
      [-116.1840, 51.3450], // Nearing lake
      [-116.1822, 51.3271], // Moraine Lake
    ],
  },

  // =============================================
  // ALBERTA PARKS ROUTES (2026)
  // =============================================
  {
    slug: "rocky-nordegg-rail-trail",
    name: "Rocky to Nordegg Rail Trail",
    distance: "109 km total (25 km featured section)",
    elevationGain: "Minimal — rail grade",
    difficulty: "easy",
    duration: "2-4 hours (featured section)",
    surface: "Compacted gravel on former railway bed",
    batteryUsage: "20-35%",
    description:
      "The Rocky to Nordegg Rail Trail is a 109 km multi-use trail built on the abandoned 1914 Canadian Northern Western Railway corridor. It's one of the most unique cycling experiences in Alberta — and it explicitly permits e-bikes. The trail follows a gentle railway grade through the foothills, making it effortless on an e-bike. The star attraction is the Taunton Trestle Bridge — a 220-metre historic railway bridge with panoramic views across the foothills to the Rocky Mountain front ranges. Starting from Chambers Creek Provincial Recreation Area, the featured section runs approximately 12 km to the bridge and back, through boreal forest, creek valleys, and open meadows. The full trail stretches from Rocky Mountain House to Nordegg, with ambitious riders covering up to 90 km in a day on an e-bike.",
    heroImage: "/images/stock/rail-trail-trestle.jpg",
    gallery: [],
    season: "May — October",
    highlights: [
      "Taunton Trestle Bridge — 220m historic railway bridge, panoramic mountain views",
      "Gentle railway grade — built for trains, effortless on e-bikes",
      "1914 Canadian Northern Western Railway heritage corridor",
      "Boreal forest, creek valleys, and open meadows",
      "Rocky Mountain front ranges visible on the western horizon",
      "E-bikes explicitly permitted on the entire trail",
      "Rest stops, picnic sites, and remote campsites along the route",
    ],
    wildlife: [
      "White-tailed and mule deer are abundant in the foothills forest",
      "Elk herds graze in the meadows along the corridor",
      "Bald eagles nest along the North Saskatchewan River valley",
      "Black bears forage in berry patches — carry bear spray",
      "Coyotes, foxes, and snowshoe hares are regularly spotted",
    ],
    mapCenter: [-115.55, 52.45],
    routeCoordinates: [
      [-115.3099, 52.4510], // Chambers Creek PRA
      [-115.4000, 52.4530], // Trail westward
      [-115.5000, 52.4540], // Approaching Saunders
      [-115.7250, 52.4570], // Saunders Creek staging
      [-115.8500, 52.4560], // Taunton Trestle area
      [-115.9500, 52.4550], // Continuing toward Nordegg
      [-116.0980, 52.4520], // Nordegg Industrial (western terminus)
    ],
  },
];

export function getTrailBySlug(slug: string): Trail | undefined {
  return trails.find((t) => t.slug === slug);
}

export function getRelatedTrails(currentSlug: string, limit = 3): Trail[] {
  return trails.filter((t) => t.slug !== currentSlug).slice(0, limit);
}
