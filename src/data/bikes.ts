import type { Bike } from "@/types";

export const bikes: Bike[] = [
  {
    slug: "specialized-turbo-vado-sl",
    name: "Specialized Turbo Vado SL",
    type: "All-Rounder",
    description:
      "Our flagship touring e-bike. The Vado SL is whisper-quiet, incredibly lightweight for an e-bike (under 15kg), and has the smoothest pedal assist on the market. The SL motor blends so naturally with your pedalling that most riders forget it's electric — until they glide up a hill without breaking a sweat. With 130km of range in Eco mode and a refined ride quality, this is the bike that makes first-timers fall in love with e-biking.",
    specs: {
      motor: "Specialized SL 1.1 (240W nominal)",
      battery: "320Wh internal + optional 160Wh range extender",
      range: "Up to 130 km (Eco mode)",
      maxSpeed: "32 km/h pedal-assist cutoff",
      weight: "14.9 kg",
      frameSize: "S, M, L, XL",
    },
    images: ["/images/bikes/vado-sl-hero.jpg"],
    bestFor: [
      "Legacy Trail",
      "Scenic paved routes",
      "Couples",
      "Beginners",
      "All-day rides",
    ],
    pricePerHalfDay: 69,
    pricePerFullDay: 99,
  },
  {
    slug: "trek-powerfly-fs",
    name: "Trek Powerfly FS",
    type: "Trail / Off-Road",
    description:
      "When the trail gets rough, the Powerfly gets going. Full suspension front and rear soaks up roots, rocks, and gravel washboard like they're not even there. The Bosch Performance CX motor delivers powerful, responsive assist that makes steep climbs feel flat. Built for the trails around Canmore Nordic Centre and the Montane Traverse — anywhere the path turns to dirt and the views get wilder.",
    specs: {
      motor: "Bosch Performance CX (250W, 85 Nm torque)",
      battery: "625Wh PowerTube",
      range: "Up to 100 km (Eco mode)",
      maxSpeed: "32 km/h pedal-assist cutoff",
      weight: "23.5 kg",
      frameSize: "S, M, L, XL",
    },
    images: ["/images/bikes/powerfly-hero.jpg"],
    bestFor: [
      "Montane Traverse",
      "Nordic Centre trails",
      "Gravel paths",
      "Experienced riders",
      "Off-road adventure",
    ],
    pricePerHalfDay: 89,
    pricePerFullDay: 129,
  },
  {
    slug: "cannondale-adventure-neo",
    name: "Cannondale Adventure Neo",
    type: "Comfort / Step-Through",
    description:
      "The most approachable e-bike in our fleet. The step-through frame means no awkward leg-swinging — just step on and ride. An upright riding position keeps your back happy on longer rides, and the wide comfort saddle and suspension seatpost smooth out every bump. The Bosch Active Line Plus motor provides gentle, intuitive assist that's perfect for riders who want a relaxed, confidence-inspiring experience.",
    specs: {
      motor: "Bosch Active Line Plus (250W, 50 Nm torque)",
      battery: "500Wh PowerPack",
      range: "Up to 120 km (Eco mode)",
      maxSpeed: "32 km/h pedal-assist cutoff",
      weight: "25.1 kg",
      frameSize: "S, M, L",
    },
    images: ["/images/bikes/adventure-neo-hero.jpg"],
    bestFor: [
      "Legacy Trail",
      "Horseshoe Loop",
      "Seniors",
      "First-time riders",
      "Comfort seekers",
    ],
    pricePerHalfDay: 59,
    pricePerFullDay: 89,
  },
];

export function getBikeBySlug(slug: string): Bike | undefined {
  return bikes.find((b) => b.slug === slug);
}

export function getRelatedBikes(currentSlug: string, count = 2): Bike[] {
  return bikes.filter((b) => b.slug !== currentSlug).slice(0, count);
}
