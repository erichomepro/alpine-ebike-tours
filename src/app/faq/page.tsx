import { type Metadata } from "next";
import { FAQContent } from "./faq-content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about e-bike tours at Lake Louise and in Alberta Parks. E-bike basics, tour details, what to bring, safety info, and more.",
};

const faqCategories = [
  {
    category: "About E-Bikes",
    items: [
      {
        question: "Do I need cycling experience?",
        answer:
          "Not at all. E-bikes are designed for everyone, including complete beginners. Every tour starts with a hands-on orientation where we teach you how to use the pedal assist, brakes, and gears. Most guests are comfortable within the first five minutes.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "If you can ride a regular bike around the block, you can do our tours. The electric motor handles the hills and headwinds, so you set your own pace. We regularly welcome guests in their 60s, 70s, and beyond who have a fantastic time.",
      },
      {
        question: "What is an e-bike and how does it work?",
        answer:
          "An e-bike is a regular bicycle with a built-in electric motor that activates when you pedal. You still pedal normally, but the motor amplifies your effort -- like having a tailwind on every hill. You control the assist level from low (gentle boost) to high (climb anything). Our bikes are pedal-assist only, meaning the motor only works when you pedal.",
      },
      {
        question: "Are e-bikes allowed in Banff National Park?",
        answer:
          "Yes! Parks Canada allows pedal-assist e-bikes (Class 1) on paved and designated trails. Our bikes comply with all regulations: pedal-assist only, 500W maximum motor, and 32 km/h speed cutoff. We ride on Lake Louise Drive and Moraine Lake Road — both paved roads within Banff National Park. Moraine Lake Road is closed to private vehicles but open to bikes, making it one of the best e-bike routes in the Rockies.",
      },
      {
        question: "How fast do e-bikes go?",
        answer:
          "Our e-bikes have a pedal-assist cutoff at 32 km/h, which is the legal limit in Alberta and Parks Canada. In practice, most tours cruise at a relaxed 15-25 km/h -- fast enough to cover great distances, slow enough to soak in the scenery and spot wildlife.",
      },
    ],
  },
  {
    category: "Tour Details",
    items: [
      {
        question: "What's included in the tour?",
        answer:
          "Everything you need for the ride: a premium e-bike, helmet, safety briefing, snacks, and water. Lake Louise tours include brunch at the ski resort restaurant before departure. Full-day and Moraine Lake tours also include a packed gourmet lunch for the trail. You just need to show up with comfortable clothes and a Parks Canada pass.",
      },
      {
        question: "How long are the tours?",
        answer:
          "We offer tours from 3 hours to a full day. The Lake Louise Morning Experience is 3-4 hours. The Moraine Lake and Rockpile Adventure is 5-6 hours. The Grand Loop (Lake Louise + Moraine Lake) is our full-day experience at 5-6 hours. Our Alberta Parks weekend ride is 3-4 hours. Check individual tour pages for exact schedules.",
      },
      {
        question: "What's the group size?",
        answer:
          "Lake Louise tours accommodate up to 12 riders per departure, with two departures daily. Our Alberta Parks weekend rides cap at 8 riders. Both sizes feel personal — you are not on a massive bus tour. Private tours are available for any group size.",
      },
      {
        question: "Do you offer private tours?",
        answer:
          "Absolutely. Private tours are perfect for families, couples, corporate groups, or anyone who wants a custom itinerary. We can adjust the route, pace, and stops to match your interests. Contact us for private tour pricing and availability.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "Light rain? We ride. Mountain weather changes fast, and a bit of drizzle often means fewer people on the trails and better wildlife sightings. For heavy rain, thunderstorms, or dangerous conditions, we'll reschedule your tour at no extra cost or offer a full refund. Your safety always comes first.",
      },
      {
        question: "What's the cancellation policy?",
        answer:
          "Free cancellation up to 48 hours before your tour for a full refund. Cancellations within 48 hours receive a credit toward a future tour. If we cancel due to weather or safety concerns, you always get a full refund or free reschedule -- no questions asked.",
      },
    ],
  },
  {
    category: "Practical Info",
    items: [
      {
        question: "What should I wear?",
        answer:
          "Dress in comfortable layers. Mountain weather can change quickly, so we recommend a moisture-wicking base layer, a warm mid-layer, and a windproof or waterproof shell. Closed-toe shoes are required -- athletic shoes or hiking shoes work great. Avoid loose clothing that could catch in the bike chain.",
      },
      {
        question: "What should I bring?",
        answer:
          "We provide the essentials, but we recommend bringing sunscreen, sunglasses, a small daypack, and a camera. If you have personal medications (like an EpiPen or inhaler), bring those too. We supply water bottles, but you're welcome to bring your own reusable bottle.",
      },
      {
        question: "Is there a minimum age?",
        answer:
          "Alberta law requires riders to be at least 12 years old to operate an e-bike. For our guided tours, we recommend a minimum age of 14 and a minimum height of 5 feet (152 cm) to safely handle our bikes. Younger riders are welcome on our family-friendly trailer options -- contact us for details.",
      },
      {
        question: "Where do we meet?",
        answer:
          "Lake Louise tours meet at the Lake Louise Ski Resort base area parking lot (1 Whitehorn Road, Lake Louise). Free parking is available. Our Alberta Parks weekend tours meet at Chambers Creek Provincial Recreation Area on Highway 11, 30 km west of Rocky Mountain House. Exact GPS coordinates and directions are included in your booking confirmation.",
      },
      {
        question: "Do you provide helmets?",
        answer:
          "Yes, and wearing one is non-negotiable. Helmets are mandatory for all ages when riding e-bikes in Alberta -- it's the law, and it's the right thing to do. We provide high-quality, properly fitted helmets in a range of sizes at no extra charge. You're welcome to bring your own if you prefer.",
      },
    ],
  },
  {
    category: "Safety",
    items: [
      {
        question: "Is e-biking safe?",
        answer:
          "Very. Our e-bikes are stable, well-maintained, and easy to control. Every tour begins with a thorough safety briefing and bike orientation. Our guides are first-aid certified and carry emergency communication devices. We stick to well-maintained trails and ride at a comfortable pace. Safety is the foundation of every ride we do.",
      },
      {
        question: "What about bears and wildlife?",
        answer:
          "We ride through bear country, and that's part of the magic. Our guides are trained in wildlife awareness and carry bear spray on every tour. We teach you how to behave around wildlife before we set out, and we follow all Parks Canada guidelines. We regularly see elk, deer, eagles, and occasionally bears -- always from a safe, respectful distance.",
      },
      {
        question: "Do I need bear spray?",
        answer:
          "Our guides carry bear spray on every tour, so you don't need to bring your own. That said, if you're comfortable carrying bear spray and want an extra canister, we recommend it for tours between May and October, especially on trails that pass through forested areas. We can help you with proper use before the ride.",
      },
      {
        question: "What safety training is provided?",
        answer:
          "Every tour starts with a 10-15 minute safety session covering: e-bike controls and braking, trail etiquette, hand signals, what to do if you encounter wildlife, group riding formation, and emergency procedures. Our guides also do a personalized bike fit to make sure your seat height, handlebar position, and helmet are all dialled in.",
      },
    ],
  },
];

// Generate JSON-LD FAQPage schema
const faqSchemaItems = faqCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems,
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent categories={faqCategories} />
    </>
  );
}
