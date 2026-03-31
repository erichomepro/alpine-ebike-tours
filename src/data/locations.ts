export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  city: string;
  region: string;
  type: "tours" | "rental";
  title: string;
  description: string;
  heroHeading: string;
  heroSubtext: string;
  nearbyTrails: string[];
  nearbyTours: string[];
  uniqueContent: string[];
  faqs: LocationFAQ[];
  coordinates: { lat: number; lng: number };
}

export const locations: Location[] = [
  {
    slug: "ebike-tours-lake-louise",
    city: "Lake Louise",
    region: "Banff National Park, Alberta",
    type: "tours",
    title: "E-Bike Tours at Lake Louise — Ride to Moraine Lake on a Car-Free Road",
    description:
      "E-bike tours from Lake Louise Ski Resort to Lake Louise and Moraine Lake. Ride the car-free Moraine Lake Road, hike the Rockpile Trail, and see the Twenty Dollar View. Brunch included. Book for 2027.",
    heroHeading: "E-Bike Tours at Lake Louise",
    heroSubtext:
      "Ride to Lake Louise and Moraine Lake from the ski resort — the car-free way to see the Rockies",
    nearbyTrails: ["lake-louise-grand-loop", "lake-louise-drive", "moraine-lake-road"],
    nearbyTours: [
      "lake-louise-grand-loop",
      "lake-louise-morning-experience",
      "moraine-lake-rockpile-adventure",
    ],
    uniqueContent: [
      "Lake Louise is where the Canadian Rockies reach their most iconic. Two of the most photographed lakes on Earth — Lake Louise and Moraine Lake — sit within riding distance of the Lake Louise Ski Resort, connected by paved roads through subalpine forest. On an e-bike, the ride from the ski resort to the turquoise waters of Lake Louise is an easy 7 km downhill cruise. Continue to Moraine Lake on the car-free Moraine Lake Road — 14 km of peaceful mountain riding on a road closed to private vehicles — and you arrive at one of the most beautiful places on the planet without competing for a parking spot or a shuttle seat.",
      "Moraine Lake Road is the secret weapon of e-bike touring in Lake Louise. While hundreds of visitors line up for Parks Canada shuttle buses, our guests ride in on premium e-bikes at their own pace. The road climbs 527 metres through dense subalpine forest, but the e-bike motor handles the ascent so you arrive fresh — ready to hike the Rockpile Trail and take in the famous Twenty Dollar View of the Valley of the Ten Peaks. The return ride is 14 km of smooth, exhilarating downhill through mountain scenery. It is the single best way to experience Moraine Lake.",
      "Our tours depart from the Lake Louise Ski Resort base area, where guests enjoy brunch at the resort restaurant before riding. Every tour includes a packed gourmet lunch for the trail, so you can eat lakeside at Moraine Lake or on the shore of Lake Louise itself. The ski resort provides ample parking, full facilities, and a professional staging area for our operation. Two departures daily mean you can choose morning or afternoon, depending on your travel schedule.",
    ],
    faqs: [
      {
        question: "Can you e-bike to Moraine Lake?",
        answer:
          "Yes — and it's the best way to get there. Moraine Lake Road is closed to private vehicles, but bicycles are welcome. The 14 km paved road is smooth and scenic, and our e-bikes handle the elevation gain so you arrive fresh. You skip the shuttle queues entirely.",
      },
      {
        question: "Where do the Lake Louise e-bike tours start?",
        answer:
          "All tours depart from the Lake Louise Ski Resort base area parking lot. Brunch at the resort restaurant is included before your ride. The ski resort is approximately 4 km from Lake Louise village on the Trans-Canada Highway.",
      },
      {
        question: "Is brunch really included?",
        answer:
          "Yes. Every tour includes a hot brunch at the ski resort restaurant before departure, and the full-day and Moraine Lake tours include a packed gourmet lunch to enjoy on the trail. We believe fuelling up properly is part of the experience.",
      },
      {
        question: "Do I need a Parks Canada pass to e-bike at Lake Louise?",
        answer:
          "Yes, a valid Parks Canada pass is required to be in Banff National Park. You can purchase a day pass at the park gates or online. If you have an annual Discovery Pass, that covers you. We send a reminder with your booking confirmation.",
      },
      {
        question: "How hard is the ride to Moraine Lake on an e-bike?",
        answer:
          "On a regular bike, the steady climb would be challenging. On our premium e-bikes, it feels like a gentle pedal through the forest. You choose your assist level — the motor does as much or as little work as you want. Most guests say they barely notice the elevation.",
      },
    ],
    coordinates: { lat: 51.4419, lng: -116.1622 },
  },
  {
    slug: "ebike-tours-near-calgary",
    city: "Calgary",
    region: "Alberta",
    type: "tours",
    title: "E-Bike Tours Near Calgary — Day Trips to Lake Louise and Moraine Lake",
    description:
      "E-bike tours from Calgary to Lake Louise and Moraine Lake. 2-hour drive, full-day adventure. Ride the car-free Moraine Lake Road, brunch included. Book online.",
    heroHeading: "E-Bike Tours Near Calgary",
    heroSubtext:
      "Just two hours from Calgary — ride to Lake Louise and Moraine Lake on premium e-bikes",
    nearbyTrails: ["lake-louise-grand-loop", "lake-louise-drive", "moraine-lake-road"],
    nearbyTours: [
      "lake-louise-grand-loop",
      "lake-louise-morning-experience",
      "moraine-lake-rockpile-adventure",
    ],
    uniqueContent: [
      "Calgary is just under two hours from the Lake Louise Ski Resort — making our e-bike tours a perfect full-day adventure from the city. Drive west on the Trans-Canada Highway through the foothills, and by the time you arrive at the ski resort base area, you're surrounded by some of the most dramatic mountain scenery in the world. Our tours are designed as easy day trips: brunch at the resort, a morning of e-biking through the mountains, and you're back in Calgary for a late dinner.",
      "For Calgarians looking for an unforgettable weekend activity, the Lake Louise Grand Loop is the crown jewel. You'll e-bike from the ski resort to Lake Louise, continue up the car-free Moraine Lake Road to the famous Twenty Dollar View, hike the Rockpile Trail, enjoy a picnic lunch at Moraine Lake, then coast downhill back to base. Six to seven hours of mountain adventure with zero fitness requirements — the e-bike handles the climbing while you handle the camera.",
      "The Moraine Lake advantage is real: while other visitors compete for limited shuttle seats or pay for private transfers, our guests ride in on e-bikes. No parking stress, no schedule constraints, no crowded bus. Just you, a quiet mountain road, and one of the most beautiful destinations in the Canadian Rockies. And the 14 km downhill return is pure joy.",
    ],
    faqs: [
      {
        question: "How far is Lake Louise from Calgary?",
        answer:
          "Lake Louise Ski Resort is approximately 185 km (under 2 hours driving) west of Calgary via the Trans-Canada Highway. Free parking is available at the ski resort base area where our tours depart.",
      },
      {
        question: "Can I do this as a day trip from Calgary?",
        answer:
          "Absolutely. Our most popular tour (the Grand Loop) runs 6-7 hours, so a typical day looks like: leave Calgary at 6:30 AM, arrive by 8:00 AM, ride all morning, finish by 3:00 PM, and be home for dinner. Brunch and lunch are included so you don't need to plan meals.",
      },
      {
        question: "What's the best tour for a first-timer from Calgary?",
        answer:
          "The Lake Louise Morning Experience is a relaxed 3-4 hour half-day that includes brunch and a ride to Lake Louise. If you want the full adventure, the Grand Loop adds Moraine Lake and the Rockpile Trail for a complete day. Both are rated easy to moderate — no cycling experience needed.",
      },
    ],
    coordinates: { lat: 51.4419, lng: -116.1622 },
  },
  {
    slug: "ebike-tours-alberta-parks",
    city: "Rocky Mountain House",
    region: "David Thompson Country, Alberta",
    type: "tours",
    title:
      "E-Bike Tours in Alberta Parks — David Thompson Country Weekend Adventures",
    description:
      "Weekend e-bike tours through Alberta's provincial parks. Explore Chambers Creek, David Thompson Country, and the foothills where the prairies meet the Rockies. Book for 2026.",
    heroHeading: "E-Bike Tours in Alberta Parks",
    heroSubtext:
      "Weekend e-bike adventures through the foothills — the quieter side of the Canadian Rockies",
    nearbyTrails: ["rocky-nordegg-rail-trail"],
    nearbyTours: ["rail-trail-trestle-ride"],
    uniqueContent: [
      "Alberta's provincial parks offer a completely different e-biking experience from the famous national parks. David Thompson Country — the region stretching west from Rocky Mountain House along Highway 11 — is where the prairies transition into the Rocky Mountain foothills. Rolling forested hills, creek valleys, and wide-open spaces create a landscape that most tourists never see. Our weekend e-bike tours stage from Chambers Creek Provincial Recreation Area, 30 km west of Rocky Mountain House, offering a peaceful escape into Alberta's wild backcountry.",
      "This is the side of Alberta that locals love: fewer tourists, more wildlife, and the kind of quiet that only comes from being well off the beaten path. Our e-bike routes follow maintained trails and scenic road corridors through boreal forest, along creek valleys, and across the rolling foothills. The terrain is gentler than the Rockies — perfect for relaxed riding with frequent stops for wildlife spotting and photography. Pack a lunch, ride through the forest, and let the foothills do what they do best: slow you down.",
      "Weekend availability only — these tours run when Dave is on-site at the Chambers Creek campground. The area offers rustic camping at the provincial recreation area if you want to make a full weekend of it. Ride Saturday morning, campfire Saturday night, explore the surrounding areas on Sunday. For visitors staying in Rocky Mountain House, the campground is a 25-minute drive west on Highway 11.",
    ],
    faqs: [
      {
        question: "Where is Chambers Creek Provincial Recreation Area?",
        answer:
          "Chambers Creek is located on Highway 11 (David Thompson Highway), approximately 30 km west of Rocky Mountain House, Alberta. GPS: 52.4524 N, 115.3123 W. It's about a 3-hour drive from Calgary or Edmonton.",
      },
      {
        question: "When are the Alberta Parks tours available?",
        answer:
          "Weekend availability only during the 2026 season (May through October). These tours run when our guide is on-site at Chambers Creek. Book early as weekend spots are limited.",
      },
      {
        question: "Can I camp at Chambers Creek?",
        answer:
          "Yes — the provincial recreation area has approximately 25 rustic campsites and a group camp with shelter. The season runs May 1 to October 14. Bring your own drinking water. This is a great option for making a full weekend out of your e-bike adventure.",
      },
    ],
    coordinates: { lat: 52.4524, lng: -115.3123 },
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByCity(city: string): Location[] {
  return locations.filter((l) => l.city === city);
}

export function getLocationsByType(type: "tours" | "rental"): Location[] {
  return locations.filter((l) => l.type === type);
}
