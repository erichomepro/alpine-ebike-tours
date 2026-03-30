import { type Metadata } from "next";
import { PrivateEventsContent } from "./private-events-content";

export const metadata: Metadata = {
  title: "Private E-Bike Events — Custom Group Rides",
  description:
    "Celebrate birthdays, family reunions, anniversaries, and special occasions with a private guided e-bike tour in the Canadian Rockies. Fully customizable itinerary for any group size.",
  keywords: [
    "private e-bike tours Banff",
    "custom group rides Canmore",
    "birthday party Banff",
    "family reunion activities Canadian Rockies",
    "private guided tours Canmore",
    "special occasion tours Alberta",
  ],
  openGraph: {
    title: "Private E-Bike Events | Alpine E-Bike Tours",
    description:
      "Birthdays, reunions, anniversaries, or just-because celebrations. Fully custom e-bike experiences in the Canadian Rockies for your group.",
    url: "https://www.alpineebiketours.com/groups/private-events",
  },
};

export default function PrivateEventsPage() {
  return <PrivateEventsContent />;
}
