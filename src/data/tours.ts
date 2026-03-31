import { Tour } from "@/types";

export const tours: Tour[] = [
  // =============================================
  // ALBERTA PARKS OPERATION (2026 Season — ACTIVE)
  // Chambers Creek / David Thompson Country
  // =============================================
  {
    slug: "rail-trail-trestle-ride",
    name: "Rail Trail & Taunton Trestle Ride",
    tagline:
      "Ride a historic 1914 railway trail to a 220-metre trestle bridge with mountain views",
    description:
      "This is Alberta's best-kept cycling secret. The Rocky to Nordegg Rail Trail follows an abandoned 1914 coal railway through the foothills — and it explicitly permits e-bikes. Starting from Chambers Creek Provincial Recreation Area, you'll ride the compacted gravel rail bed through boreal forest to the Taunton Trestle Bridge — a stunning 220-metre historic railway bridge with panoramic views of the foothills stretching to the Rocky Mountain front ranges. Packed lunch included, eaten on the bridge or at a trailside rest stop. The rail grade is gentle and consistent — built for trains, perfect for e-bikes.",
    price: 149,
    duration: "3-4 hours",
    distance: "~25 km round trip",
    difficulty: "easy",
    rating: 4.8,
    reviewCount: 0,
    heroImage: "/images/stock/rail-trail-trestle.jpg",
    gallery: [],
    included: [
      "Premium e-bike rental",
      "Helmet & safety gear",
      "Packed lunch & water",
      "Trail map & route guide",
      "Bear spray (seasonal)",
    ],
    highlights: [
      "Rocky to Nordegg Rail Trail — 1914 historic railway corridor",
      "Taunton Trestle Bridge — 220 metres of epic views",
      "Gentle rail grade — built for trains, perfect for e-bikes",
      "Foothills forest, creek valleys, and mountain views",
      "Wildlife spotting — deer, elk, eagles, bears",
      "Weekend availability only — small groups",
    ],
    meetingPoint:
      "Chambers Creek Provincial Recreation Area, Highway 11 (30 km west of Rocky Mountain House)",
    maxGroupSize: 8,
    minAge: 12,
    season: "May — October (2026)",
    trail: "rocky-nordegg-rail-trail",
    schedules: [
      {
        name: "Weekend Morning Ride",
        startTime: "9:00 AM",
        endTime: "1:00 PM",
        stops: [
          {
            time: "9:00 AM",
            title: "Meet at Chambers Creek campground",
            description:
              "Arrive at the recreation area off Highway 11. Bike fitting, safety briefing, and route overview in the camp shelter.",
            type: "meeting",
          },
          {
            time: "9:30 AM",
            title: "Hit the Rail Trail",
            description:
              "Ride the former Canadian Northern Western Railway corridor. The compacted gravel rail bed is smooth and the grade is gentle — built for locomotives, effortless on e-bikes.",
            type: "ride",
          },
          {
            time: "10:15 AM",
            title: "Foothills viewpoint stop",
            description:
              "Break at a high point where the trail opens up. The foothills roll west toward the Rocky Mountain front ranges on the horizon.",
            type: "photo",
          },
          {
            time: "10:45 AM",
            title: "Taunton Trestle Bridge",
            description:
              "The highlight: ride across the 220-metre historic railway trestle bridge. Stop in the middle for panoramic photos — there's nothing else like this in Alberta.",
            type: "photo",
          },
          {
            time: "11:15 AM",
            title: "Lunch on the trail",
            description:
              "Packed lunch at a trailside rest stop or right on the bridge. No crowds, no noise, just mountains and forest.",
            type: "meal",
          },
          {
            time: "12:00 PM",
            title: "Return ride",
            description:
              "Ride back along the rail trail to Chambers Creek. Slightly different views on the return — watch for wildlife in the afternoon warmth.",
            type: "ride",
          },
          {
            time: "12:45 PM",
            title: "Back at Chambers Creek",
            description:
              "Return bikes and gear. If you're camping, the rest of your weekend in the foothills awaits — campfire tonight.",
            type: "return",
          },
        ],
      },
    ],
  },

  // =============================================
  // LAKE LOUISE OPERATION (Coming 2027)
  // ONE tour: Lake Louise → Moraine Lake → Ski Hill
  // Pending Parks Canada + ski hill parking approval
  // =============================================
  {
    slug: "lake-louise-moraine-lake-tour",
    name: "Lake Louise & Moraine Lake E-Bike Tour",
    tagline:
      "Lake Louise, Moraine Lake, and the Twenty Dollar View — all in one unforgettable ride",
    description:
      "Our signature full-day experience starting from Lake Louise Ski Resort. Enjoy brunch at the resort restaurant, then e-bike to the turquoise waters of Lake Louise for a lakeside walk. Continue up the car-free Moraine Lake Road to one of the most photographed spots on Earth. Hike the Rockpile Trail for the iconic Valley of the Ten Peaks panorama, enjoy a packed lunch lakeside, then cruise downhill back to base. No fitness required — the e-bike handles the climbs so you arrive fresh, not exhausted.",
    price: 275,
    duration: "5-6 hours",
    distance: "~34 km round trip",
    difficulty: "moderate",
    rating: 5.0,
    reviewCount: 0,
    heroImage: "/images/stock/moraine-lake-panorama.jpg",
    gallery: [],
    included: [
      "Premium e-bike rental",
      "Helmet & safety gear",
      "Brunch at the ski resort restaurant",
      "Packed gourmet lunch for the trail",
      "Guided lakeside walk at Lake Louise",
      "Rockpile Trail hike at Moraine Lake",
      "All-day hydration & snacks",
    ],
    highlights: [
      "Turquoise waters of Lake Louise with Victoria Glacier backdrop",
      "Car-free Moraine Lake Road — arrive where private vehicles can't",
      "The Rockpile Trail: the famous Twenty Dollar View",
      "Valley of the Ten Peaks panorama at Moraine Lake",
      "Brunch at the Lake Louise Ski Resort restaurant",
      "Thrilling downhill return ride through mountain scenery",
    ],
    meetingPoint: "Lake Louise Ski Resort, base area parking lot",
    maxGroupSize: 12,
    minAge: 14,
    season: "Coming 2027 — Pending Parks Canada approval",
    trail: "lake-louise-moraine-lake-loop",
    schedules: [
      {
        name: "Morning Departure",
        startTime: "8:00 AM",
        endTime: "2:30 PM",
        stops: [
          {
            time: "8:00 AM",
            title: "Arrive at Lake Louise Ski Resort",
            description:
              "Meet at the base area parking lot. Bike fitting, safety briefing, and e-bike orientation.",
            type: "meeting",
          },
          {
            time: "8:30 AM",
            title: "Brunch at the resort restaurant",
            description:
              "Fuel up with a hot brunch before the ride. Coffee, eggs, fresh pastries — you'll need the energy.",
            type: "meal",
          },
          {
            time: "9:30 AM",
            title: "Ride to Lake Louise",
            description:
              "E-bike 4 km along Lake Louise Drive through dense subalpine forest. Mostly downhill — an easy, scenic warm-up.",
            type: "ride",
          },
          {
            time: "10:00 AM",
            title: "Lake Louise lakeside walk",
            description:
              "Lock up the bikes and stroll along the lakeshore trail. Turquoise water, Victoria Glacier, and the Fairmont Chateau — the classic Rockies postcard.",
            type: "activity",
          },
          {
            time: "10:45 AM",
            title: "Ride Moraine Lake Road",
            description:
              "The highlight of the trip — ride 14 km up the car-free Moraine Lake Road. No private vehicles allowed, so the road is peaceful. The e-bike handles the steady climb effortlessly.",
            type: "ride",
          },
          {
            time: "12:00 PM",
            title: "Moraine Lake & Rockpile Trail",
            description:
              "Arrive at Moraine Lake. Hike the short Rockpile Trail (15-20 min) for the legendary Twenty Dollar View — the Valley of the Ten Peaks reflected in turquoise water.",
            type: "activity",
          },
          {
            time: "12:30 PM",
            title: "Picnic lunch at Moraine Lake",
            description:
              "Enjoy your packed gourmet lunch lakeside. This is the kind of lunch spot most people only see in photographs.",
            type: "meal",
          },
          {
            time: "1:15 PM",
            title: "Return ride — downhill to base",
            description:
              "The best part: 14 km downhill from Moraine Lake, then a gentle ride back to the ski resort. Fast, fun, and scenic.",
            type: "ride",
          },
          {
            time: "2:30 PM",
            title: "Return to Lake Louise Ski Resort",
            description:
              "Arrive back at base. Share your favourite moments, download any photos, and return your e-bike. What a day.",
            type: "return",
          },
        ],
      },
      {
        name: "Afternoon Departure",
        startTime: "12:00 PM",
        endTime: "6:30 PM",
        stops: [
          {
            time: "12:00 PM",
            title: "Arrive at Lake Louise Ski Resort",
            description:
              "Afternoon departure — same full experience, golden afternoon light for photos.",
            type: "meeting",
          },
          {
            time: "12:30 PM",
            title: "Lunch at the resort restaurant",
            description:
              "Fuel up with lunch at the resort before hitting the trail.",
            type: "meal",
          },
          {
            time: "1:30 PM",
            title: "Ride to Lake Louise",
            description:
              "Afternoon light through the forest. The lake is often calmer in the afternoon — better reflections.",
            type: "ride",
          },
          {
            time: "2:00 PM",
            title: "Lake Louise lakeside walk",
            description:
              "Stroll the famous lakeshore trail. Afternoon crowds thin out — more room for photos.",
            type: "activity",
          },
          {
            time: "2:45 PM",
            title: "Ride Moraine Lake Road",
            description:
              "14 km up the car-free road in warm afternoon sun. The e-bike makes the climb effortless.",
            type: "ride",
          },
          {
            time: "4:00 PM",
            title: "Moraine Lake & Rockpile Trail",
            description:
              "Golden hour at Moraine Lake. Hike the Rockpile for the Twenty Dollar View in the best light of the day.",
            type: "activity",
          },
          {
            time: "4:30 PM",
            title: "Snack break at Moraine Lake",
            description:
              "Enjoy snacks and drinks lakeside as the afternoon light paints the Ten Peaks.",
            type: "meal",
          },
          {
            time: "5:15 PM",
            title: "Return ride — downhill to base",
            description:
              "Coast downhill through the golden evening light. The perfect end to a perfect day.",
            type: "ride",
          },
          {
            time: "6:30 PM",
            title: "Return to Lake Louise Ski Resort",
            description:
              "Back at base as the sun sets behind the mountains. What a day.",
            type: "return",
          },
        ],
      },
    ],
  },
];
