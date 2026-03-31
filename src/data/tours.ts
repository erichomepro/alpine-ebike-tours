import { Tour } from "@/types";

export const tours: Tour[] = [
  // =============================================
  // LAKE LOUISE SKI RESORT OPERATION (2027 Season)
  // Staging from Lake Louise Ski Resort base area
  // =============================================
  {
    slug: "lake-louise-grand-loop",
    name: "Lake Louise Grand Loop",
    tagline:
      "The ultimate Rockies day — Lake Louise, Moraine Lake, and the famous Twenty Dollar View",
    description:
      "This is our signature full-day experience. Starting from Lake Louise Ski Resort, you'll e-bike to the turquoise waters of Lake Louise for a leisurely lakeside walk, then ride the car-free Moraine Lake Road to one of the most photographed spots on Earth. Hike the Rockpile Trail for the iconic Valley of the Ten Peaks panorama, enjoy a picnic lunch with a view that used to be on the Canadian twenty dollar bill, then cruise downhill back to base. Brunch at the ski resort before departure and a packed gourmet lunch are included — this is a full day you'll never forget.",
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
    season: "June — October (2027)",
    trail: "lake-louise-grand-loop",
    schedules: [
      {
        name: "Morning Departure",
        startTime: "8:00 AM",
        endTime: "3:00 PM",
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
    ],
  },
  {
    slug: "lake-louise-morning-experience",
    name: "Lake Louise Morning Experience",
    tagline:
      "Brunch, a lakeside walk, and the ride to Lake Louise — the perfect half-day",
    description:
      "Start your morning with brunch at the Lake Louise Ski Resort restaurant, then e-bike the scenic 4 km to Lake Louise itself. Stroll along the famous lakeshore trail with Victoria Glacier towering above turquoise water, snap your photos at the Fairmont Chateau viewpoint, then ride back to base. A relaxed, beautiful half-day for visitors who want to experience Lake Louise without the full-day commitment.",
    price: 175,
    duration: "3-4 hours",
    distance: "~8 km round trip",
    difficulty: "easy",
    rating: 5.0,
    reviewCount: 0,
    heroImage: "/images/stock/lake-louise-chateau.jpg",
    gallery: [],
    included: [
      "Premium e-bike rental",
      "Helmet & safety gear",
      "Brunch at the ski resort restaurant",
      "Guided lakeside walk at Lake Louise",
      "Snacks & water",
    ],
    highlights: [
      "Brunch at the Lake Louise Ski Resort",
      "Scenic 4 km ride along Lake Louise Drive",
      "Lakeside walk with Victoria Glacier views",
      "Fairmont Chateau Lake Louise viewpoint",
      "Easy, relaxed pace — perfect for all ages",
    ],
    meetingPoint: "Lake Louise Ski Resort, base area parking lot",
    maxGroupSize: 12,
    minAge: 12,
    season: "June — October (2027)",
    trail: "lake-louise-drive",
    schedules: [
      {
        name: "Morning Departure",
        startTime: "8:30 AM",
        endTime: "12:00 PM",
        stops: [
          {
            time: "8:30 AM",
            title: "Arrive at Lake Louise Ski Resort",
            description:
              "Meet at the base area. Bike fitting and safety briefing.",
            type: "meeting",
          },
          {
            time: "9:00 AM",
            title: "Brunch at the resort",
            description:
              "Enjoy a relaxed brunch before riding. Hot coffee, fresh food, mountain views from the restaurant.",
            type: "meal",
          },
          {
            time: "10:00 AM",
            title: "Ride to Lake Louise",
            description:
              "E-bike through subalpine forest on Lake Louise Drive. Mostly downhill — a gentle, scenic warm-up ride.",
            type: "ride",
          },
          {
            time: "10:30 AM",
            title: "Lakeside walk at Lake Louise",
            description:
              "Stroll along the famous lakeshore. Turquoise water, glaciers, and the iconic Chateau. Take your time — this is why you came.",
            type: "activity",
          },
          {
            time: "11:15 AM",
            title: "Return ride to ski resort",
            description:
              "Ride back uphill to the resort. The e-bike makes the return climb easy and enjoyable.",
            type: "ride",
          },
          {
            time: "11:45 AM",
            title: "Back at base",
            description:
              "Return your bike and gear. The rest of your day in the Rockies is wide open.",
            type: "return",
          },
        ],
      },
      {
        name: "Afternoon Departure",
        startTime: "1:00 PM",
        endTime: "4:30 PM",
        stops: [
          {
            time: "1:00 PM",
            title: "Arrive at Lake Louise Ski Resort",
            description:
              "Afternoon departure — same full experience, softer afternoon light for photos.",
            type: "meeting",
          },
          {
            time: "1:15 PM",
            title: "Lunch at the resort",
            description:
              "Fuel up with lunch before the ride.",
            type: "meal",
          },
          {
            time: "2:00 PM",
            title: "Ride to Lake Louise",
            description:
              "Afternoon light through the forest. The lake is often calmer in the afternoon — better reflections.",
            type: "ride",
          },
          {
            time: "2:30 PM",
            title: "Lakeside walk",
            description:
              "Explore the lakeshore trail. Afternoon crowds thin out — more room for photos.",
            type: "activity",
          },
          {
            time: "3:30 PM",
            title: "Return ride",
            description:
              "Easy ride back to the resort with the afternoon sun warming the valley.",
            type: "ride",
          },
          {
            time: "4:00 PM",
            title: "Back at base",
            description: "Bikes returned, memories made.",
            type: "return",
          },
        ],
      },
    ],
  },
  {
    slug: "moraine-lake-rockpile-adventure",
    name: "Moraine Lake & Rockpile Adventure",
    tagline:
      "Ride the car-free road to the Twenty Dollar View — arrive where cars can't",
    description:
      "This tour is all about Moraine Lake — arguably the most beautiful lake in the Canadian Rockies. From Lake Louise Ski Resort, you'll e-bike to Lake Louise, then continue up the car-free Moraine Lake Road. Private vehicles are banned, so you'll ride a peaceful mountain road while shuttle passengers wave from bus windows. At Moraine Lake, hike the short Rockpile Trail for the legendary panorama, enjoy a packed lunch lakeside, then coast downhill on the return. The e-bike handles the steady climb so you arrive fresh, not exhausted.",
    price: 225,
    duration: "5-6 hours",
    distance: "~34 km round trip",
    difficulty: "moderate",
    rating: 5.0,
    reviewCount: 0,
    heroImage: "/images/stock/moraine-lake-rockpile.jpg",
    gallery: [],
    included: [
      "Premium e-bike rental",
      "Helmet & safety gear",
      "Packed gourmet lunch",
      "Rockpile Trail hike at Moraine Lake",
      "Snacks & water",
      "Bear spray (seasonal)",
    ],
    highlights: [
      "Car-free Moraine Lake Road — the ultimate e-bike advantage",
      "Rockpile Trail: the Twenty Dollar View",
      "Valley of the Ten Peaks panorama",
      "Lakeside picnic at Moraine Lake",
      "14 km thrilling downhill return",
      "Arrive at iconic spots without fighting for parking",
    ],
    meetingPoint: "Lake Louise Ski Resort, base area parking lot",
    maxGroupSize: 12,
    minAge: 14,
    season: "June — October (2027)",
    trail: "moraine-lake-road",
    schedules: [
      {
        name: "Morning Departure",
        startTime: "8:00 AM",
        endTime: "2:00 PM",
        stops: [
          {
            time: "8:00 AM",
            title: "Meet at Lake Louise Ski Resort",
            description:
              "Base area parking lot. Bike fitting, safety briefing, e-bike orientation.",
            type: "meeting",
          },
          {
            time: "8:30 AM",
            title: "Ride to Lake Louise",
            description:
              "Quick 4 km ride through the forest to the lake. Warm up your legs.",
            type: "ride",
          },
          {
            time: "9:00 AM",
            title: "Quick stop at Lake Louise",
            description:
              "Brief photo stop at the lakeshore before continuing to Moraine Lake.",
            type: "photo",
          },
          {
            time: "9:15 AM",
            title: "Moraine Lake Road ascent",
            description:
              "The main event: 14 km up the car-free Moraine Lake Road. The e-bike motor handles the steady climb — you focus on the stunning mountain scenery unfolding around every switchback.",
            type: "ride",
          },
          {
            time: "10:30 AM",
            title: "Arrive at Moraine Lake",
            description:
              "Park the bikes and take in the view. The turquoise water ringed by ten peaks — it hits different when you've earned it on two wheels.",
            type: "photo",
          },
          {
            time: "10:45 AM",
            title: "Rockpile Trail hike",
            description:
              "Short 15-20 min hike up the rock pile to the viewpoint. This is the Twenty Dollar View — the image that was on the old Canadian $20 bill.",
            type: "activity",
          },
          {
            time: "11:15 AM",
            title: "Picnic lunch at Moraine Lake",
            description:
              "Gourmet packed lunch in one of the most beautiful settings on the planet. Take your time.",
            type: "meal",
          },
          {
            time: "12:00 PM",
            title: "Return ride — downhill all the way",
            description:
              "14 km of glorious downhill from Moraine Lake. Then a gentle ride back through Lake Louise to the ski resort.",
            type: "ride",
          },
          {
            time: "1:30 PM",
            title: "Back at base",
            description:
              "Return to Lake Louise Ski Resort. What a morning.",
            type: "return",
          },
        ],
      },
    ],
  },

  // =============================================
  // ALBERTA PARKS OPERATION (2026 Season)
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
];
