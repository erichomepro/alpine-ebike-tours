import type { Metadata } from "next";
import { LakeLouiseContent } from "./lake-louise-content";

export const metadata: Metadata = {
  title: "Lake Louise Ski Resort E-Bike Tours — Summer Adventures from the Base Area",
  description:
    "E-bike tours departing from Lake Louise Ski Resort. Ride to Lake Louise, Moraine Lake, and the famous Twenty Dollar View. Brunch and lunch included at the resort restaurant. Book for 2027.",
  openGraph: {
    title: "Lake Louise Ski Resort E-Bike Tours",
    description:
      "Premium e-bike tours staging from Lake Louise Ski Resort. Brunch, lakeside walks, Moraine Lake, and the Rockpile Trail — all in one unforgettable day.",
    images: ["/images/stock/lake-louise-ski-resort-summer.jpg"],
  },
};

export default function LakeLouiseSkiResortPage() {
  return <LakeLouiseContent />;
}
