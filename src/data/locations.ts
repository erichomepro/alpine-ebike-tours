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
    slug: "ebike-tours-banff",
    city: "Banff",
    region: "Banff National Park, Alberta",
    type: "tours",
    title: "E-Bike Tours in Banff — Guided Rides Through Banff National Park",
    description:
      "Explore Banff National Park on a guided e-bike tour. Ride the Legacy Trail, Bow Valley Parkway, and Johnston Canyon with expert local guides. All gear included. Book today.",
    heroHeading: "E-Bike Tours in Banff",
    heroSubtext:
      "Guided electric bike tours through the heart of Banff National Park — no experience needed",
    nearbyTrails: ["legacy-trail", "bow-valley-parkway"],
    nearbyTours: [
      "legacy-trail-adventure",
      "johnston-canyon-ebike-hike",
      "sunset-golden-hour",
    ],
    uniqueContent: [
      "Banff is where the Canadian Rockies meet world-class cycling infrastructure. As Canada's oldest national park and a UNESCO World Heritage Site, Banff offers a rare combination of protected wilderness and well-maintained paved pathways that are ideal for e-biking. The town itself sits at 1,383 metres in the Bow Valley, surrounded by peaks that rise another 1,500 metres on every side — and on an e-bike, you get to take in every bit of that panorama without the burn of altitude and elevation.",
      "What makes Banff uniquely suited to e-bike touring is Parks Canada's forward-thinking trail network. The Legacy Trail connects Banff to Canmore along 26.8 kilometres of dedicated paved pathway, completely separated from highway traffic. The Bow Valley Parkway — Highway 1A — closes sections to motor vehicles during peak wildlife season, creating a car-free corridor through some of the most wildlife-rich forest in the Rockies. These aren't backcountry trails requiring technical skills; they're accessible routes where anyone can ride safely while surrounded by genuinely wild landscape.",
      "The wildlife along Banff's cycling routes is the real draw. Elk graze in the meadows along the Bow River, bighorn sheep cross near the Vermilion Lakes, and black bears forage in the berry patches along the Bow Valley Parkway. On an e-bike, you move quietly enough to spot animals that cars would spook, but quickly enough to cover the kind of distances that turn a ride into a genuine expedition. Most of our guests see more wildlife on a single tour than they do in a week of driving through the park.",
    ],
    faqs: [
      {
        question: "Are e-bikes allowed in Banff National Park?",
        answer:
          "Yes. Parks Canada permits Class 1 pedal-assist e-bikes (motor under 500W, 32 km/h cutoff) on paved and designated trails within Banff National Park. Our bikes meet all Parks Canada regulations. You can ride the Legacy Trail, Sundance Trail, Bow Valley Parkway, and other approved routes.",
      },
      {
        question: "Where do Banff e-bike tours start?",
        answer:
          "Our Banff tours depart from our shop in Canmore and ride toward Banff via the Legacy Trail, or we can arrange a meet-up point in Banff townsite for certain tours. The Legacy Trail Adventure ends in Banff with a return shuttle to Canmore included.",
      },
      {
        question: "What is the best time of year for e-biking in Banff?",
        answer:
          "The season runs from May through October. June through September offers the best conditions — warm days, long daylight hours, and the Bow Valley Parkway car-free closures for cyclists. September and early October bring spectacular fall colours and fewer crowds.",
      },
      {
        question: "Do I need a park pass for an e-bike tour in Banff?",
        answer:
          "Yes, a Parks Canada pass is required to enter Banff National Park. You can purchase a day pass at the park gates or online. If you already have an annual Discovery Pass, that works too. We'll remind you before your tour so you're prepared.",
      },
      {
        question:
          "How difficult is e-biking in Banff with the mountain elevation?",
        answer:
          "That's exactly why e-bikes are perfect for Banff. The town sits at 1,383 metres, which can make traditional cycling feel harder due to thinner air. The electric motor compensates for altitude and hills, so you ride at a comfortable effort level regardless of fitness. Most guests say they barely notice the elevation on an e-bike.",
      },
    ],
    coordinates: { lat: 51.1784, lng: -115.5708 },
  },
  {
    slug: "ebike-tours-canmore",
    city: "Canmore",
    region: "Bow Valley, Alberta",
    type: "tours",
    title: "E-Bike Tours in Canmore — Explore the Bow Valley by Electric Bike",
    description:
      "Guided e-bike tours departing from Canmore, Alberta. Ride through the Bow Valley, Canmore Nordic Centre, and along the Bow River with stunning mountain views. Book online.",
    heroHeading: "E-Bike Tours in Canmore",
    heroSubtext:
      "Your basecamp for Rocky Mountain e-bike adventures — all tours depart from our Canmore shop",
    nearbyTrails: [
      "legacy-trail",
      "montane-traverse",
      "horseshoe-loop",
      "canmore-nordic-centre",
    ],
    nearbyTours: [
      "legacy-trail-adventure",
      "sunset-golden-hour",
      "bow-valley-explorer",
    ],
    uniqueContent: [
      "Canmore is the epicentre of e-biking in the Canadian Rockies. Sitting just outside the east gate of Banff National Park, this mountain town of 15,000 has more trail per capita than almost anywhere in Canada. The Canmore Nordic Centre — built for the 1988 Winter Olympics — offers over 60 kilometres of groomed trails that transform into world-class mountain biking in summer. Add the Horseshoe Loop along the Bow River, the Montane Traverse through wildflower meadows, and direct access to the Legacy Trail, and you have a trail network that could keep you riding for a week without repeating a route.",
      "What sets Canmore apart from Banff for e-biking is the variety. Banff's trails are spectacular but regulated — you stay on designated routes within the national park. Canmore sits on provincial land with a more extensive and diverse trail network. You can ride smooth paved pathways along the river, tackle singletrack through the montane forest, climb to viewpoints overlooking the entire Bow Valley, or cruise the town's charming downtown for coffee and pastries between rides. The Three Sisters peaks provide a dramatic backdrop to every ride, and the Bow River is never far away.",
      "Our shop is based in Canmore because it's the ideal starting point for every direction. Head west and you're on the Legacy Trail to Banff within minutes. Ride south into the Canmore Nordic Centre trail network for Olympic-legacy singletrack. Go east along the Bow River toward the Horseshoe Loop for a relaxed riverside cruise. Or head into the Montane Traverse for an intimate forest ride that feels miles from civilization but is fifteen minutes from town. Canmore's trail connectivity means we can design tours that flow naturally from one landscape to the next.",
    ],
    faqs: [
      {
        question: "Where is the Alpine E-Bike Tours shop in Canmore?",
        answer:
          "Our shop is centrally located in Canmore, Alberta. All tours meet and depart from the shop. We provide full orientation, bike fitting, and safety briefing before every ride. Exact address and directions are sent with your booking confirmation.",
      },
      {
        question: "What trails can I ride from Canmore?",
        answer:
          "Canmore has direct access to an incredible trail network: the Legacy Trail to Banff (26.8 km paved), the Canmore Nordic Centre (60+ km of groomed trails), the Horseshoe Loop along the Bow River, and the Montane Traverse through alpine meadows. Our guides know every trail and will match the route to your interests and ability.",
      },
      {
        question: "Is Canmore a good base for e-biking the Rockies?",
        answer:
          "Canmore is the best base. It sits at the junction of every major trail in the Bow Valley, offers more trail variety than Banff, and has excellent restaurants, cafes, and accommodation. You're 20 minutes from Banff National Park, but you have more trail freedom on the Canmore side of the boundary.",
      },
      {
        question:
          "Can I ride from Canmore to Banff on an e-bike?",
        answer:
          "Absolutely — it's the most popular ride in the Rockies. The Legacy Trail is a fully paved, 26.8 km pathway from Canmore to Banff, completely separated from highway traffic. On an e-bike, the ride takes about 1.5 to 2 hours at a comfortable pace with photo stops. Our Legacy Trail Adventure tour includes a return shuttle so you don't have to ride back.",
      },
    ],
    coordinates: { lat: 51.0899, lng: -115.3588 },
  },
  {
    slug: "ebike-rental-banff",
    city: "Banff",
    region: "Banff National Park, Alberta",
    type: "rental",
    title: "E-Bike Rental in Banff — Premium Electric Bike Hire",
    description:
      "Rent premium e-bikes for self-guided rides through Banff National Park. Specialized and Trek e-bikes, helmets included. Half-day and full-day rental options. Book online.",
    heroHeading: "E-Bike Rental for Banff",
    heroSubtext:
      "Premium electric bikes for self-guided exploration of Banff National Park and the Bow Valley",
    nearbyTrails: ["legacy-trail", "bow-valley-parkway"],
    nearbyTours: [],
    uniqueContent: [
      "Renting an e-bike is the smartest way to explore Banff National Park at your own pace. With a premium Specialized or Trek e-bike from our fleet, you have the freedom to ride where you want, stop when you want, and spend as long as you like at each viewpoint. Half-day rentals give you enough time to ride the Legacy Trail from end to end. Full-day rentals open up the Bow Valley Parkway, the Vermilion Lakes loop, and even a ride out to Johnston Canyon — all without the pressure of keeping up with a group.",
      "Our rental fleet is the same premium bikes we use on guided tours — not the heavy, underpowered rentals you'll find at hotel concierge desks. The Specialized Turbo Vado SL weighs under 15 kilograms and has 130 kilometres of range, so you'll never run out of battery on a day ride in Banff. The Trek Powerfly FS is a full-suspension trail bike that handles gravel and packed dirt with ease. Every rental includes a helmet, lock, trail map, route suggestions matched to your experience level, and a phone holder so you can navigate hands-free.",
      "For self-guided riding in Banff, the Legacy Trail is the obvious starting point — 26.8 kilometres of fully paved pathway with mountain views that never stop. But Banff also has quieter gems: the Sundance Trail follows the Bow River south of town through dense forest, and the Vermilion Lakes road is a wildlife-rich detour where elk and osprey are practically guaranteed. We provide printed route cards with every rental so you know exactly where to ride, where to stop, and what wildlife to watch for.",
    ],
    faqs: [
      {
        question: "Can I pick up a rental bike in Banff town?",
        answer:
          "Our shop is in Canmore, about 25 minutes from Banff. We can arrange delivery to Banff for an additional fee, or you can pick up from our Canmore location and ride the Legacy Trail into Banff — which is half the fun. Contact us for Banff delivery options.",
      },
      {
        question: "How much does it cost to rent an e-bike for Banff?",
        answer:
          "Half-day rentals start at $69 and full-day rentals at $99. Every rental includes a premium e-bike, helmet, lock, trail map, and route suggestions. We carry Specialized Turbo Vado SL and Trek Powerfly FS bikes — the same fleet we use on guided tours.",
      },
      {
        question:
          "Do I need cycling experience to rent an e-bike for Banff?",
        answer:
          "No experience needed. If you can ride a regular bicycle, you can ride our e-bikes. We provide a full orientation with every rental — how to use the pedal assist, shifting, braking, and trail etiquette. Most renters are confident within five minutes.",
      },
    ],
    coordinates: { lat: 51.1784, lng: -115.5708 },
  },
  {
    slug: "ebike-rental-canmore",
    city: "Canmore",
    region: "Bow Valley, Alberta",
    type: "rental",
    title: "E-Bike Rental in Canmore — Self-Guided Rocky Mountain Rides",
    description:
      "Rent premium e-bikes in Canmore for self-guided adventures. Explore 100+ km of trails including the Legacy Trail, Nordic Centre, and Bow River pathways. Book online.",
    heroHeading: "E-Bike Rental in Canmore",
    heroSubtext:
      "Pick up from our Canmore shop and explore 100+ kilometres of trails at your own pace",
    nearbyTrails: [
      "legacy-trail",
      "montane-traverse",
      "horseshoe-loop",
      "canmore-nordic-centre",
    ],
    nearbyTours: [],
    uniqueContent: [
      "Canmore is the ideal place to rent an e-bike because the trails start right from town. Within five minutes of leaving our shop, you can be riding along the Bow River on the Horseshoe Loop, climbing into the Montane Traverse through spruce forest, or heading west on the Legacy Trail toward Banff. There's no driving to a trailhead, no parking hassles, no shuttle logistics. You roll out the door and the mountains are right there.",
      "Our Canmore rental fleet features the same premium Specialized and Trek e-bikes used on guided tours. The lightweight Specialized Turbo Vado SL is perfect for the paved Legacy Trail and Horseshoe Loop — smooth, fast, and with 130 kilometres of battery range. If you want to explore the Canmore Nordic Centre singletrack or the gravel sections of the Montane Traverse, the full-suspension Trek Powerfly FS handles rough terrain with confidence. We'll recommend the right bike for your planned route and fit it to your height before you ride.",
      "Half-day renters typically ride the Horseshoe Loop and riverside trails — a relaxed 15 to 20 kilometre spin through Canmore's most scenic corridors. Full-day renters can tackle the Legacy Trail to Banff and back (53 kilometres round trip), explore the 60-kilometre Nordic Centre network, or combine multiple trails for a grand loop through the entire Bow Valley. We provide laminated route cards with distances, elevation profiles, recommended stops, and wildlife-watching hotspots so you never feel lost.",
    ],
    faqs: [
      {
        question: "What bikes are available to rent in Canmore?",
        answer:
          "We carry two premium models: the Specialized Turbo Vado SL (lightweight all-rounder, 130 km range, ideal for paved trails) and the Trek Powerfly FS (full-suspension trail bike, 100 km range, ideal for gravel and singletrack). Both include helmets, locks, and trail maps.",
      },
      {
        question: "How long should I rent for in Canmore?",
        answer:
          "Half-day (4 hours) is enough for the Horseshoe Loop, Bow River trails, or a one-way Legacy Trail ride. Full-day (8 hours) lets you do the Legacy Trail round trip, explore the Nordic Centre network, or combine multiple trails. Most first-time visitors book a full day and don't regret it.",
      },
      {
        question: "Can I ride the Nordic Centre trails on a rental e-bike?",
        answer:
          "Yes. E-bikes are welcome on the Canmore Nordic Centre trails. We recommend the Trek Powerfly FS for the singletrack sections — its full suspension handles the roots and gravel beautifully. The Vado SL works well on the smoother groomed paths. We'll advise which bike suits your planned route.",
      },
      {
        question: "Do you offer multi-day e-bike rentals?",
        answer:
          "Yes, we offer multi-day rental packages at a discounted daily rate. If you're staying in Canmore for a few days and want to explore different trails each day, a multi-day rental is the most cost-effective option. Contact us for multi-day pricing.",
      },
    ],
    coordinates: { lat: 51.0899, lng: -115.3588 },
  },
  {
    slug: "ebike-tours-near-calgary",
    city: "Calgary",
    region: "Alberta",
    type: "tours",
    title:
      "E-Bike Tours Near Calgary — Day Trips to the Canadian Rockies",
    description:
      "E-bike tours just 1 hour from Calgary. Guided rides through Banff and Canmore with stunning Rocky Mountain scenery. Perfect Calgary day trip. All gear included. Book online.",
    heroHeading: "E-Bike Tours Near Calgary",
    heroSubtext:
      "Just one hour from Calgary — guided e-bike tours through the Canadian Rockies",
    nearbyTrails: [
      "legacy-trail",
      "horseshoe-loop",
      "canmore-nordic-centre",
      "montane-traverse",
    ],
    nearbyTours: [
      "legacy-trail-adventure",
      "bow-valley-explorer",
      "sunset-golden-hour",
      "johnston-canyon-ebike-hike",
    ],
    uniqueContent: [
      "Calgary is just one hour from some of the best e-biking in the world. The drive west on the Trans-Canada Highway takes you from prairie to peaks in 45 minutes, and by the time you arrive in Canmore, you're surrounded by the kind of mountain scenery that most people fly across the world to see. Our tours are designed as easy day trips from Calgary — morning departure means you're riding by 10 a.m., and you're back in the city for dinner with photos your friends won't believe.",
      "For Calgarians and Calgary visitors looking for an outdoor experience that doesn't require hiking boots or a high fitness level, e-bike touring is the answer. The electric motor handles the mountain elevation and headwinds that make traditional cycling in the Rockies genuinely hard work. You pedal at a comfortable effort while covering 20 to 50 kilometres of mountain terrain — distances that would be unrealistic on a regular bike for most recreational riders. It's the closest thing to flying through the Rockies without leaving the ground.",
      "Weekend day trips from Calgary are our most popular bookings. The Legacy Trail Adventure — Canmore to Banff on a fully paved pathway — is the classic choice and takes about 3 to 4 hours including photo stops and a snack break. For a fuller day, the Johnston Canyon E-Bike & Hike combines a 40-kilometre ride along the Bow Valley Parkway with a hike to thundering waterfalls. Both tours include all equipment, an expert guide, and return transport — you just need to get yourself to Canmore. Free parking is available at our shop.",
    ],
    faqs: [
      {
        question: "How far is the e-bike tour from Calgary?",
        answer:
          "Our tours depart from Canmore, which is approximately 100 kilometres (1 hour drive) west of Calgary via the Trans-Canada Highway. Free parking is available at our Canmore shop. The drive through the foothills is scenic and easy.",
      },
      {
        question: "Can I do an e-bike tour as a day trip from Calgary?",
        answer:
          "Absolutely. Most of our guests are day-trippers from Calgary. Our most popular tours run 3 to 6 hours, so you can leave Calgary in the morning, ride through the Rockies, and be home for dinner. It's the best day trip within an hour of the city.",
      },
      {
        question: "What's the best e-bike tour for a first-timer from Calgary?",
        answer:
          "The Legacy Trail Adventure is our top recommendation. It's a fully paved, 26.8 km ride from Canmore to Banff with stunning mountain views the entire way. Rated easy — no cycling experience needed. It takes 3 to 4 hours and includes a return shuttle. Most guests say it's the highlight of their trip to the Rockies.",
      },
      {
        question: "Do you offer group or corporate e-bike tours from Calgary?",
        answer:
          "Yes. We run corporate team outings, group rides, and private tours for parties of any size. A guided e-bike tour through the Rockies makes an unforgettable team-building event. Contact us for group pricing and custom itinerary options.",
      },
      {
        question: "Is there parking at the tour start point?",
        answer:
          "Yes, free parking is available at our Canmore shop. The lot is easy to find and we send detailed directions with your booking confirmation. For larger groups, we can also coordinate a meeting point in Canmore town centre.",
      },
    ],
    coordinates: { lat: 51.0899, lng: -115.3588 },
  },
  {
    slug: "ebike-tours-lake-louise",
    city: "Lake Louise",
    region: "Banff National Park, Alberta",
    type: "tours",
    title: "E-Bike Tours Near Lake Louise — Ride the Bow Valley Parkway",
    description:
      "E-bike tours near Lake Louise through the Bow Valley Parkway. Ride through old-growth forest, spot wildlife, and visit Johnston Canyon. Guided tours from Canmore. Book online.",
    heroHeading: "E-Bike Tours Near Lake Louise",
    heroSubtext:
      "Ride the spectacular Bow Valley Parkway toward Lake Louise through wildlife-rich forest",
    nearbyTrails: ["bow-valley-parkway", "legacy-trail"],
    nearbyTours: ["johnston-canyon-ebike-hike", "legacy-trail-adventure"],
    uniqueContent: [
      "Lake Louise is the crown jewel of the Canadian Rockies, and the ride there is half the adventure. The Bow Valley Parkway — the original highway through Banff National Park — winds through 48 kilometres of some of the most wildlife-rich forest in North America. Sections of this road close to motor vehicles during peak season, creating a car-free cycling corridor that feels like riding through a nature documentary. On an e-bike, the moderate elevation gains between Banff and Lake Louise become effortless, letting you focus on the towering Castle Mountain, the old-growth forest canopy, and the black bears foraging in the roadside berry patches.",
      "Our Johnston Canyon E-Bike & Hike tour covers the most spectacular section of the Bow Valley Parkway, combining a 40-kilometre e-bike ride with a hike into Johnston Canyon to see the Lower and Upper Falls. The canyon is a narrow limestone gorge with catwalks bolted to the cliff face, thundering waterfalls, and turquoise plunge pools. It's one of the most popular hikes in the Rockies, and arriving by e-bike means you avoid the packed parking lot entirely. You lock your bike at the trailhead and hike in with energy to spare.",
      "While our current tours don't extend all the way to Lake Louise village, the Bow Valley Parkway route takes you deep into the same landscape. Castle Mountain dominates the western skyline, elk herds graze in the meadows near Johnston Canyon, and the forest transitions from montane spruce to subalpine fir as you climb. For guests wanting to visit Lake Louise itself, we recommend combining our tour with a drive to the lake in the afternoon — the Chateau Lake Louise is only 40 minutes from Johnston Canyon by car.",
    ],
    faqs: [
      {
        question: "Can I e-bike all the way to Lake Louise?",
        answer:
          "The Bow Valley Parkway runs from Banff toward Lake Louise, and our Johnston Canyon tour covers the most scenic section. While a full ride to Lake Louise village is possible for experienced riders (approximately 60 km one way), our guided tours focus on the best sections with Johnston Canyon as the turnaround point. Contact us for custom long-distance options.",
      },
      {
        question: "What wildlife will I see on the Bow Valley Parkway?",
        answer:
          "The Bow Valley Parkway is one of the best wildlife corridors in the Rockies. Black bears, elk, deer, wolves, and great grey owls are regularly spotted. Our guides carry bear spray and know the best wildlife viewing areas. E-bikes are quiet enough that animals often don't spook, giving you closer encounters than you'd get from a car.",
      },
      {
        question:
          "When is the Bow Valley Parkway closed to cars for cycling?",
        answer:
          "Parks Canada typically closes sections of the Bow Valley Parkway to motor vehicles from March through late June to protect wildlife during sensitive seasons. During closures, the road becomes a cyclist and pedestrian paradise. Check Parks Canada for current closure dates, or we can advise when you book.",
      },
    ],
    coordinates: { lat: 51.4254, lng: -116.1773 },
  },
  {
    slug: "ebike-tours-kananaskis",
    city: "Kananaskis",
    region: "Kananaskis Country, Alberta",
    type: "tours",
    title: "E-Bike Tours in Kananaskis Country — Alberta's Mountain Playground",
    description:
      "E-bike tours near Kananaskis Country, Alberta. Guided rides through the Bow Valley with access to Kananaskis trails. Less crowded than Banff, equally stunning. Book online.",
    heroHeading: "E-Bike Tours Near Kananaskis",
    heroSubtext:
      "The quieter side of the Rockies — fewer crowds, wilder trails, and the same stunning peaks",
    nearbyTrails: [
      "canmore-nordic-centre",
      "montane-traverse",
      "horseshoe-loop",
    ],
    nearbyTours: ["bow-valley-explorer", "sunset-golden-hour"],
    uniqueContent: [
      "Kananaskis Country is the local's secret — 4,000 square kilometres of Rocky Mountain wilderness without the crowds of Banff National Park. While Kananaskis itself is a vast network of backcountry trails, the Canmore side of the Bow Valley provides the ideal e-bike gateway to this landscape. Our Canmore-based tours ride through the same montane ecosystem that stretches south into Kananaskis, with views of the same peaks, the same wildlife corridors, and the same pristine mountain air — but on well-maintained trails with expert guides.",
      "The Bow Valley around Canmore sits at the northern edge of Kananaskis Country, and the trail network here shares the same character: dense spruce forest, wildflower meadows, elk and deer at every turn, and mountain views that feel larger than life. The Canmore Nordic Centre and Montane Traverse trails offer the kind of riding experience that Kananaskis is famous for — technical enough to feel adventurous, but manageable on an e-bike. For riders who want to go deeper into Kananaskis trails, we can recommend self-guided rental routes that extend into the K-Country trail network.",
      "Many of our guests choose the Canmore area over Kananaskis for e-biking because of the infrastructure. Canmore has paved pathways, groomed trails, shops, cafes, and our full-service e-bike operation — while deeper Kananaskis trails tend to be rougher and more remote. If you're visiting Kananaskis for hiking, camping, or backcountry adventure, adding an e-bike tour from Canmore is the perfect complement. You get world-class mountain riding with all the support, then head into Kananaskis for the wild stuff.",
    ],
    faqs: [
      {
        question: "Do you run tours directly in Kananaskis Country?",
        answer:
          "Our guided tours depart from Canmore, which sits at the northern edge of Kananaskis Country. The trails we ride share the same landscape and wildlife corridors. For self-guided riding deeper into Kananaskis, we offer rental bikes with route recommendations for K-Country trails suitable for e-bikes.",
      },
      {
        question: "Do I need a Kananaskis Conservation Pass for your tours?",
        answer:
          "No. Our Canmore-based tours ride on trails that don't require a Kananaskis Conservation Pass. However, if you plan to visit Kananaskis Provincial Park or other K-Country areas on the same day, you will need the pass. You can purchase it online through the Alberta Parks website.",
      },
      {
        question: "How does e-biking near Kananaskis compare to Banff?",
        answer:
          "The Canmore/Kananaskis side of the Bow Valley offers more trail variety and significantly fewer crowds than Banff. You ride through the same mountain landscape but with a quieter, more intimate feel. The Canmore Nordic Centre alone has 60+ kilometres of trails that rarely feel busy, even in peak summer.",
      },
    ],
    coordinates: { lat: 51.0267, lng: -115.1761 },
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
