import type { BlogPost } from "@/types";

export type BlogCategory = "All" | "Trail Guides" | "Planning";

export const blogCategories: BlogCategory[] = ["All", "Trail Guides", "Planning"];

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-ebiking-moraine-lake-road",
    title: "The Complete Guide to E-Biking Moraine Lake Road",
    excerpt:
      "Moraine Lake Road is closed to private vehicles — but bikes are welcome. Here's everything you need to know about riding this stunning car-free mountain road on an e-bike.",
    heroImage: "/images/blog/moraine-lake-road.jpg",
    author: "Dave Richardson",
    publishedAt: "2026-03-28",
    category: "Trail Guides",
    tags: [
      "Moraine Lake",
      "Lake Louise",
      "trail guide",
      "e-bike route",
      "car-free road",
      "Canadian Rockies",
    ],
    readTime: "10 min read",
    content: `
      <p>Moraine Lake is one of the most photographed places in the Canadian Rockies — and for good reason. Turquoise water ringed by ten mountain peaks, a short hike to the viewpoint that used to grace the Canadian twenty dollar bill, and a setting so dramatic it almost looks artificial. The problem? Getting there.</p>

      <p>Since 2023, Moraine Lake Road has been <strong>permanently closed to private vehicles</strong>. Most visitors take Parks Canada shuttle buses, competing for limited seats on a fixed schedule. But there is another way — and it might be the best-kept secret in the Rockies.</p>

      <p><strong>You can ride a bike to Moraine Lake.</strong> And on an e-bike, it is genuinely enjoyable.</p>

      <h2 id="the-route">The Route: What to Expect</h2>

      <p>Moraine Lake Road is a 12 km paved road that climbs from the junction near Lake Louise village to Moraine Lake. The elevation gain is approximately 153 metres — spread over 12 kilometres, that is a gentle, consistent grade. On an e-bike with pedal assist, most riders barely notice the climb.</p>

      <h3>Key Stats</h3>
      <ul>
        <li><strong>Distance:</strong> 12 km one way from the junction (14 km from Lake Louise village)</li>
        <li><strong>Elevation gain:</strong> ~153 m</li>
        <li><strong>Surface:</strong> Paved road, excellent condition</li>
        <li><strong>Time on e-bike:</strong> 40-55 minutes uphill, 25-35 minutes downhill</li>
        <li><strong>Season:</strong> June 1 to October 12 (varies annually)</li>
        <li><strong>Traffic:</strong> Shuttle buses and licensed commercial vehicles only — no private cars</li>
      </ul>

      <p>The road winds through dense subalpine forest of Engelmann spruce and subalpine fir. As you climb, the trees occasionally open to reveal glimpses of the surrounding peaks. The final approach to the lake is a sweeping curve that delivers the full panorama all at once — and it never gets old.</p>

      <h2 id="starting-point">Where to Start</h2>

      <p>Our tours start from <strong>Lake Louise Ski Resort</strong> base area, which adds approximately 4 km of riding along Lake Louise Drive before reaching the Moraine Lake Road junction. This means the full round trip from the ski resort to Moraine Lake and back is approximately 34 km — a comfortable half-day on an e-bike.</p>

      <p>The ski resort offers free parking, a restaurant for brunch before your ride, and a proper staging area for bike fitting and safety briefing. It is the ideal starting point.</p>

      <h2 id="the-advantage">The E-Bike Advantage</h2>

      <p>On a regular bicycle, the 153m climb to Moraine Lake is manageable but tiring — especially at 1,800+ metres elevation where the air is thinner. You arrive sweaty and need time to recover before hiking.</p>

      <p>On an e-bike, you arrive fresh. The motor handles as much or as little of the effort as you want. Most of our guests ride with moderate assist and describe the climb as "a pleasant pedal through the forest." They arrive at Moraine Lake with energy to hike the Rockpile Trail, take photos, and enjoy a lakeside picnic — rather than collapsing on a bench.</p>

      <p>The return ride is pure joy regardless of bike type — 12 km of smooth, winding downhill through mountain scenery. But on an e-bike, the whole experience is balanced: enjoyable up, thrilling down.</p>

      <h2 id="rockpile-trail">The Rockpile Trail: The Twenty Dollar View</h2>

      <p>Once you arrive at Moraine Lake, the must-do hike is the <strong>Rockpile Trail</strong> — a short 0.8 km return walk (about 15-20 minutes) up a set of stairs built into a natural rock pile. At the top, you get the iconic viewpoint: Moraine Lake's turquoise water backed by the Valley of the Ten Peaks.</p>

      <p>This view was featured on the old Canadian twenty dollar bill. Standing there in person, you understand why. It is one of those rare places where reality exceeds the photograph.</p>

      <h2 id="tips">Tips for Riding Moraine Lake Road</h2>

      <ul>
        <li><strong>Go early.</strong> The road is quietest before 8 AM, before shuttle bus traffic picks up. Our morning tours depart at 8:00 AM from the ski resort for this reason.</li>
        <li><strong>Watch for bears.</strong> Black bears and grizzlies are active along Moraine Lake Road, particularly in berry season (late July through September). Carry bear spray and make noise on blind corners.</li>
        <li><strong>Bring layers.</strong> At 1,884 m elevation, Moraine Lake is noticeably cooler than the valley. A light jacket and gloves are worth packing even in July.</li>
        <li><strong>Pack food.</strong> There are no restaurants or stores at Moraine Lake. Our tours include a packed gourmet lunch — eating lakeside at Moraine is an experience in itself.</li>
        <li><strong>Lock your bike.</strong> Bike racks are available at the Moraine Lake parking area. Bring a lock (we provide one with every rental).</li>
        <li><strong>Check the road opening date.</strong> Moraine Lake Road typically opens June 1, but snow can delay this. Parks Canada posts current road status online.</li>
      </ul>

      <h2 id="booking">Ready to Ride?</h2>

      <p>Our <a href="/tours/moraine-lake-rockpile-adventure">Moraine Lake and Rockpile Adventure</a> tour covers this exact route — with a packed lunch, bear spray, and all the local knowledge you need to make the most of the ride. Or choose the <a href="/tours/lake-louise-grand-loop">Lake Louise Grand Loop</a> to add a lakeside walk at Lake Louise and brunch at the ski resort.</p>

      <p>Either way, you will see Moraine Lake the way it deserves to be seen — on your own schedule, at your own pace, arriving where cars cannot.</p>
    `,
  },
  {
    slug: "are-ebikes-allowed-in-banff-national-park",
    title:
      "Are E-Bikes Allowed in Banff National Park? Complete Rules and Trail Guide",
    excerpt:
      "Yes — but only certain types. Here are the Parks Canada regulations for e-bikes in Banff, which trails you can ride, and what happens if you break the rules.",
    heroImage: "/images/blog/banff-ebike-rules.jpg",
    author: "Dave Richardson",
    publishedAt: "2026-03-25",
    category: "Planning",
    tags: [
      "Banff National Park",
      "Parks Canada",
      "e-bike regulations",
      "Lake Louise",
      "Moraine Lake",
      "rules",
    ],
    readTime: "8 min read",
    content: `
      <p>One of the most common questions we get is: <strong>"Are e-bikes even allowed in Banff National Park?"</strong> The short answer is yes — but there are specific rules you need to follow.</p>

      <h2 id="the-rules">Parks Canada E-Bike Regulations</h2>

      <p>Parks Canada permits <strong>pedal-assist e-bikes only</strong> (also known as Class 1 e-bikes). The key technical requirements are:</p>

      <ul>
        <li><strong>Motor power:</strong> 500 watts or less</li>
        <li><strong>Speed cutoff:</strong> Motor must stop assisting at 32 km/h on level ground</li>
        <li><strong>Pedal requirement:</strong> Motor cannot engage until the bike reaches 3 km/h — you must pedal first</li>
        <li><strong>Auto-stop:</strong> Motor assistance must immediately stop when you stop pedalling</li>
        <li><strong>Throttle-only e-bikes are BANNED</strong> — the motor can only assist pedalling, not replace it</li>
      </ul>

      <p>All of our rental e-bikes meet these requirements. If you are bringing your own e-bike, verify it complies before riding in the park.</p>

      <h3>Penalties</h3>
      <p>Riding a non-compliant e-bike in Banff National Park can result in fines of <strong>up to $25,000</strong> under the Canada National Parks Act. Parks Canada wardens actively enforce this.</p>

      <h2 id="allowed-trails">Where Can You Ride E-Bikes in the Lake Louise Area?</h2>

      <p>E-bikes are permitted on the following trails and roads in the Lake Louise area of Banff National Park:</p>

      <h3>Roads Open to E-Bikes</h3>
      <ul>
        <li><strong>Lake Louise Drive</strong> — The road connecting the Trans-Canada Highway to Lake Louise (the lake). ~4 km, paved.</li>
        <li><strong>Moraine Lake Road</strong> — 12 km paved road to Moraine Lake. Closed to private vehicles but open to bikes. This is our featured route.</li>
        <li><strong>Bow Valley Parkway (Highway 1A)</strong> — Sections close to motor vehicles seasonally, creating a car-free cycling corridor.</li>
      </ul>

      <h3>Trails Open to E-Bikes (Banff Area)</h3>
      <ul>
        <li>Lake Louise Drive (4 km, paved)</li>
        <li>Sundance Trail</li>
        <li>Brewster Creek Trail</li>
        <li>Cascade Ponds to Bankhead Trail</li>
        <li>Fenland Loop</li>
        <li>Tunnel Mountain Bench network</li>
        <li>Healy Creek Trail (partial)</li>
        <li>Redearth Creek Trail (partial)</li>
      </ul>

      <h3>Trails Open to E-Bikes (Lake Louise Area)</h3>
      <ul>
        <li>Bow River Trail</li>
        <li>Tramline Trail</li>
        <li>Louise Creek Trail (partial)</li>
        <li>Great Divide Trail</li>
      </ul>

      <h2 id="park-pass">Do You Need a Park Pass?</h2>

      <p>Yes. A valid <strong>Parks Canada pass</strong> is required to enter Banff National Park — whether you are driving, cycling, or walking in. You can purchase a day pass at the park gates or online. If you have an annual Discovery Pass, that covers all national parks across Canada.</p>

      <p>Our tours include a reminder about the park pass in your booking confirmation email. We recommend purchasing online in advance to skip the line at the park gates.</p>

      <h2 id="helmets">Helmet Rules</h2>

      <p>Under Alberta law, <strong>helmets are mandatory for all ages when riding an e-bike</strong>. This is different from regular bicycles, where helmets are only required for riders under 18. On an e-bike, everyone wears a helmet — no exceptions. We provide properly fitted helmets with every tour and rental.</p>

      <h2 id="our-tours">Our Tours Stay Compliant</h2>

      <p>All <a href="/tours">Alpine E-Bike Tours</a> operate with full Parks Canada compliance. Our e-bikes are pedal-assist only, under 500W, with a 32 km/h cutoff. We carry all required permits and insurance. Your only job is to enjoy the ride.</p>
    `,
  },
  {
    slug: "why-ebike-to-moraine-lake-instead-of-shuttle",
    title: "Why You Should E-Bike to Moraine Lake Instead of Taking the Shuttle",
    excerpt:
      "The shuttle gets you there. An e-bike gives you the experience. Here is why riding to Moraine Lake is worth every pedal stroke.",
    heroImage: "/images/blog/moraine-vs-shuttle.jpg",
    author: "Dave Richardson",
    publishedAt: "2026-03-20",
    category: "Trail Guides",
    tags: [
      "Moraine Lake",
      "shuttle",
      "e-bike advantage",
      "Lake Louise",
      "Parks Canada",
    ],
    readTime: "7 min read",
    content: `
      <p>Since Moraine Lake Road closed to private vehicles in 2023, visitors have two options: take the Parks Canada shuttle bus, or ride a bike. Most people take the shuttle without considering the alternative. Here is why the e-bike option is better in almost every way.</p>

      <h2 id="schedule-freedom">1. You Set Your Own Schedule</h2>

      <p>The shuttle runs on a fixed timetable. You arrive when the bus arrives, and you leave when the next bus departs. If you want an extra twenty minutes at the Rockpile viewpoint, too bad — the bus waits for no one.</p>

      <p>On an e-bike, you decide. Linger at the viewpoint for an hour. Have a long picnic lunch. Take the scenic way back. Your schedule is your own.</p>

      <h2 id="the-ride">2. The Ride IS the Experience</h2>

      <p>The shuttle whisks you to Moraine Lake in about 25 minutes. You miss everything between the junction and the lake — 12 km of stunning subalpine forest, mountain streams, and wildlife habitat. On an e-bike, that ride is part of the adventure. You hear the creek, smell the spruce, spot wildlife in the meadows, and feel the mountain air. The journey becomes half the destination.</p>

      <h2 id="quiet">3. You Arrive in Quiet</h2>

      <p>Shuttle buses are loud. They pull up to a busy parking area, doors open, and dozens of people pour out at once. The first few minutes at Moraine Lake are chaos.</p>

      <p>On a bike, you glide in silently. You lock up, take a breath, and walk to the lakeshore with the sound of your own footsteps. The experience of arriving quietly at one of the most beautiful places on Earth is genuinely different from arriving on a bus.</p>

      <h2 id="wildlife">4. Better Wildlife Spotting</h2>

      <p>E-bikes are quiet enough that animals do not spook the way they do with motor vehicles. Black bears, pikas, marmots, and eagles are all more likely to stay visible when you approach slowly and silently on two wheels. Several of our guests have had closer wildlife encounters on the ride to Moraine Lake than they have had in years of visiting the Rockies by car.</p>

      <h2 id="no-stress">5. Zero Logistics Stress</h2>

      <p>Shuttle reservations fill up. The early-morning "Alpine Start" slots at 4:00 AM and 5:00 AM sell out. Day-of availability is not guaranteed. The whole system adds a layer of planning and anxiety to what should be a relaxing day in the mountains.</p>

      <p>On an e-bike, you just ride. No reservations, no sold-out slots, no checking your phone for bus schedules. Leave when you are ready, come back when you are done.</p>

      <h2 id="the-downhill">6. The Downhill Return</h2>

      <p>The shuttle ride back to the parking lot is... a bus ride. On an e-bike, the return from Moraine Lake is a 12 km downhill coast through mountain scenery. Smooth pavement, sweeping curves, cool mountain air, and the kind of grin that only gravity and good scenery can produce. It is the best part of the day, and the shuttle passengers never get to experience it.</p>

      <h2 id="book">Ready to Skip the Shuttle?</h2>

      <p>Our <a href="/tours/moraine-lake-rockpile-adventure">Moraine Lake and Rockpile Adventure</a> includes the e-bike, packed lunch, bear spray, and everything you need for a perfect day at Moraine Lake — minus the bus.</p>
    `,
  },
  {
    slug: "what-to-wear-pack-ebike-tour-canadian-rockies",
    title:
      "What to Wear and Pack for an E-Bike Tour in the Canadian Rockies",
    excerpt:
      "The mountains change fast. Here is exactly what to wear, what to bring, and what to leave behind for your e-bike tour at Lake Louise.",
    heroImage: "/images/blog/packing-guide.jpg",
    author: "Dave Richardson",
    publishedAt: "2026-03-15",
    category: "Planning",
    tags: [
      "packing list",
      "what to wear",
      "preparation",
      "Lake Louise",
      "Canadian Rockies",
    ],
    readTime: "6 min read",
    content: `
      <p>Mountain weather changes fast. At Lake Louise — sitting at 1,700+ metres — you can start a ride in sunshine and hit a cold wind within an hour. Here is what to wear and pack so you are comfortable all day.</p>

      <h2 id="clothing">What to Wear</h2>

      <h3>The Layering System</h3>
      <p>Dress in layers that you can add or remove as conditions change:</p>

      <ul>
        <li><strong>Base layer:</strong> Moisture-wicking shirt (synthetic or merino wool). Avoid cotton — it holds sweat and gets cold fast.</li>
        <li><strong>Mid layer:</strong> Light fleece or insulated jacket. You will want this at Moraine Lake (1,884m) even on a warm day.</li>
        <li><strong>Outer layer:</strong> Packable windbreaker or rain jacket. Mountain showers are common and brief — a light shell keeps you dry without overheating.</li>
      </ul>

      <h3>Lower Body</h3>
      <ul>
        <li><strong>Shorts or leggings</strong> — whatever you are comfortable cycling in. Padded cycling shorts are nice but not necessary on an e-bike (you will not be grinding uphill).</li>
        <li><strong>Long pants</strong> available for cooler mornings or if you prefer them for hiking.</li>
      </ul>

      <h3>Footwear</h3>
      <ul>
        <li><strong>Closed-toe shoes with good grip.</strong> Hiking shoes or trail runners are ideal — they work on the bike and on the Rockpile Trail.</li>
        <li>Avoid flip-flops, sandals, or heels. You will be pedalling and hiking.</li>
      </ul>

      <h3>Accessories</h3>
      <ul>
        <li><strong>Sunglasses</strong> — essential at altitude where UV is stronger</li>
        <li><strong>Sunscreen (SPF 30+)</strong> — reapply at rest stops</li>
        <li><strong>Light gloves</strong> — mornings can be cold, especially on the downhill return</li>
        <li><strong>Buff or neck gaiter</strong> — versatile for wind, sun, or warmth</li>
      </ul>

      <h2 id="what-to-bring">What to Bring</h2>

      <ul>
        <li><strong>Small daypack or saddle bag</strong> — for layers, snacks, and camera</li>
        <li><strong>Phone + charger</strong> — for photos (and GPS if self-guided)</li>
        <li><strong>Camera</strong> — if your phone is not enough for you</li>
        <li><strong>Water bottle</strong> — we provide water, but your own bottle is handy</li>
        <li><strong>Parks Canada pass</strong> — required to be in Banff National Park. Buy online in advance.</li>
      </ul>

      <h2 id="we-provide">What We Provide</h2>

      <p>Do not worry about gear — we have you covered:</p>
      <ul>
        <li>Premium e-bike (fitted to your size)</li>
        <li>Helmet (mandatory for all ages on e-bikes in Alberta)</li>
        <li>Bike lock</li>
        <li>Bear spray (seasonal, carried by your guide)</li>
        <li>Brunch and/or packed lunch (depending on tour)</li>
        <li>Water and trail snacks</li>
        <li>Trail map and route guide</li>
      </ul>

      <h2 id="leave-behind">What to Leave Behind</h2>

      <ul>
        <li><strong>Heavy backpacks</strong> — you do not need a full hiking pack for an e-bike tour</li>
        <li><strong>Cotton clothing</strong> — it stays wet and gets cold. Synthetics dry fast.</li>
        <li><strong>Valuables</strong> — leave them locked in your car at the ski resort</li>
        <li><strong>Drones</strong> — not permitted in Banff National Park without a special permit</li>
      </ul>

      <h2 id="weather">A Note on Mountain Weather</h2>

      <p>At Lake Louise, daytime summer temperatures typically range from 15 to 25 degrees Celsius in the valley, but can be 5 to 10 degrees cooler at Moraine Lake. Rain showers can appear quickly and usually pass within 30 minutes. The golden rule: <strong>bring one more layer than you think you need.</strong></p>

      <p>We monitor weather conditions before every tour and will contact you if conditions require schedule adjustments. Safety always comes first.</p>
    `,
  },
  {
    slug: "how-fit-do-you-need-to-be-for-ebike-tour",
    title: "How Fit Do You Need to Be for an E-Bike Tour? (Honest Answer)",
    excerpt:
      "The honest answer: not very. Here is what the e-bike motor actually does, who our riders really are, and why fitness anxiety is the wrong reason to skip this experience.",
    heroImage: "/images/blog/fitness-guide.jpg",
    author: "Dave Richardson",
    publishedAt: "2026-03-10",
    category: "Planning",
    tags: [
      "fitness",
      "beginners",
      "first time",
      "e-bike tour",
      "seniors",
      "accessibility",
    ],
    readTime: "6 min read",
    content: `
      <p>This is the question we hear most — usually from people who want to come but are worried they will hold the group back. So here is the honest answer.</p>

      <h2 id="honest-answer">The Honest Answer</h2>

      <p><strong>If you can ride a regular bicycle for five minutes, you can complete any of our tours.</strong></p>

      <p>That is not marketing speak. The e-bike motor is doing the hard work. You are pedalling, yes — but the motor amplifies every pedal stroke. Hills that would leave you gasping on a regular bike feel like flat ground. Headwinds disappear. The altitude (1,700+ metres at Lake Louise) that makes traditional cycling genuinely hard becomes a non-factor.</p>

      <h2 id="what-motor-does">What the Motor Actually Does</h2>

      <p>Our e-bikes have multiple assist levels — from Eco (light help) to Turbo (the motor does most of the work). Most riders use a medium setting and describe the experience as "a gentle pedal." You choose how much effort you want to put in.</p>

      <ul>
        <li><strong>Eco mode:</strong> Light assistance. You feel the hills but they are manageable. Best for experienced cyclists who want exercise.</li>
        <li><strong>Trail mode:</strong> Moderate assistance. Hills feel like flat ground. This is what most of our guests use.</li>
        <li><strong>Turbo mode:</strong> Maximum assistance. The motor does 80% of the work. For steep sections or when you need a break.</li>
      </ul>

      <p>The climb to Moraine Lake gains about 153 metres over 12 kilometres. On Turbo mode, it feels like riding on flat pavement. On Trail mode, it feels like a gentle incline. On Eco mode, it feels like a moderate hill. You pick your adventure.</p>

      <h2 id="real-riders">Who Actually Rides With Us</h2>

      <p>Our riders range from 12 to 75+ years old. Here is what our customer base really looks like:</p>

      <ul>
        <li><strong>Couples where one person is fit and the other is not.</strong> E-bikes equalize the difference. Both people can ride side by side and enjoy the same experience.</li>
        <li><strong>Active retirees (55-75)</strong> who love the outdoors but find traditional cycling too demanding at altitude.</li>
        <li><strong>Families with teenagers</strong> looking for an activity everyone can do together.</li>
        <li><strong>People who have not ridden a bike in years</strong> but want to experience Lake Louise and Moraine Lake without the hiking commitment.</li>
        <li><strong>Experienced cyclists</strong> who want to cover more ground or ride with less-fit partners.</li>
      </ul>

      <h2 id="what-helps">What Actually Helps</h2>

      <p>Instead of worrying about fitness, focus on these:</p>

      <ul>
        <li><strong>Balance:</strong> Can you sit on a bike and pedal without falling over? That is all you need.</li>
        <li><strong>Comfort with braking:</strong> You need to be able to brake and stop. Our safety briefing covers this in five minutes.</li>
        <li><strong>Reasonable mobility:</strong> You need to get on and off the bike, and walk the Rockpile Trail stairs (0.8 km, about 120 steps).</li>
      </ul>

      <p>You do <strong>not</strong> need: cycling experience, gym fitness, cardiovascular endurance, leg strength, or the ability to ride long distances unassisted.</p>

      <h2 id="still-nervous">Still Nervous?</h2>

      <p>Start with the <a href="/tours/lake-louise-morning-experience">Lake Louise Morning Experience</a> — our easiest tour. It is 8 km round trip, mostly gentle terrain, with brunch and a relaxed lakeside walk. If that goes well (it will), you can always book the <a href="/tours/lake-louise-grand-loop">Grand Loop</a> next time.</p>

      <p>Or <a href="/contact">contact us</a> with your specific concerns. We have helped hundreds of first-timers and know exactly how to make it comfortable. The last thing we want is for fitness anxiety to keep you from one of the best experiences in the Canadian Rockies.</p>
    `,
  },
];
