import { type Metadata } from "next";
import { BacheloretteContent } from "./bachelorette-content";

export const metadata: Metadata = {
  title: "Bachelorette E-Bike Tours — Pedal, Pop Champagne, Repeat",
  description:
    "The ultimate bachelorette party in the Canadian Rockies. E-bike tours with champagne toasts, pro photography, sunset rides, and Instagram-worthy mountain views. Groups of 4+.",
  keywords: [
    "bachelorette party Banff",
    "bachelorette activities Canmore",
    "bachelorette e-bike tour",
    "bridal party Banff",
    "bachelorette party ideas Canadian Rockies",
    "unique bachelorette party Alberta",
  ],
  openGraph: {
    title: "Bachelorette E-Bike Tours | Alpine E-Bike Tours",
    description:
      "Champagne toasts at mountain viewpoints, pro photos, sunset rides. The bachelorette party your crew will never forget.",
    url: "https://www.alpineebiketours.com/groups/bachelorette-parties",
  },
};

export default function BachelorettePartiesPage() {
  return <BacheloretteContent />;
}
