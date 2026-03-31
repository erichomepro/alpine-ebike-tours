import { type Metadata } from "next";
import { GroupsContent } from "./groups-content";

export const metadata: Metadata = {
  title: "Group Adventures in the Rockies",
  description:
    "Plan the perfect group e-bike adventure at Lake Louise and in Alberta Parks. Corporate team building, bachelorette parties, private events, and custom group rides.",
  keywords: [
    "group e-bike tours Lake Louise",
    "corporate team building Canadian Rockies",
    "bachelorette party Lake Louise",
    "private e-bike tours Canadian Rockies",
    "group activities Alberta",
    "team building activities Lake Louise",
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
