import { type Metadata } from "next";
import { GroupsContent } from "./groups-content";

export const metadata: Metadata = {
  title: "Group Adventures in the Rockies",
  description:
    "Plan the perfect group e-bike adventure in Banff and Canmore. Corporate team building, bachelorette parties, private events, and custom group rides with dedicated guides.",
  keywords: [
    "group e-bike tours Banff",
    "corporate team building Canmore",
    "bachelorette party Banff",
    "private e-bike tours Canadian Rockies",
    "group activities Canmore",
    "team building activities Banff",
  ],
  openGraph: {
    title: "Group Adventures in the Rockies | Alpine E-Bike Tours",
    description:
      "Corporate retreats, celebrations, and private events on premium e-bikes through the Canadian Rockies. Custom itineraries, group discounts, dedicated guides.",
    url: "https://www.alpineebiketours.com/groups",
  },
};

export default function GroupsPage() {
  return <GroupsContent />;
}
