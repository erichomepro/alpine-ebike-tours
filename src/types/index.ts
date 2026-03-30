export interface ItineraryStop {
  time: string;
  title: string;
  description: string;
  type: "meeting" | "ride" | "stop" | "meal" | "photo" | "activity" | "return";
}

export interface TourSchedule {
  name: string;
  startTime: string;
  endTime: string;
  stops: ItineraryStop[];
}

export interface Tour {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  duration: string;
  distance: string;
  difficulty: "easy" | "moderate" | "challenging";
  rating: number;
  reviewCount: number;
  heroImage: string;
  gallery: string[];
  included: string[];
  highlights: string[];
  meetingPoint: string;
  maxGroupSize: number;
  minAge: number;
  season: string;
  trail: string;
  schedules?: TourSchedule[];
}

export interface Bike {
  slug: string;
  name: string;
  type: string;
  description: string;
  specs: {
    motor: string;
    battery: string;
    range: string;
    maxSpeed: string;
    weight: string;
    frameSize: string;
  };
  images: string[];
  spinImages?: string[];
  bestFor: string[];
  pricePerHalfDay: number;
  pricePerFullDay: number;
}

export interface Trail {
  slug: string;
  name: string;
  distance: string;
  elevationGain: string;
  difficulty: "easy" | "moderate" | "challenging";
  duration: string;
  surface: string;
  batteryUsage: string;
  description: string;
  heroImage: string;
  gallery: string[];
  season: string;
  highlights: string[];
  wildlife: string[];
  mapCenter: [number, number];
  routeCoordinates: [number, number][];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  tour?: string;
  photo?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  heroImage: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: string;
}

export type DifficultyColor = {
  easy: string;
  moderate: string;
  challenging: string;
};

export const DIFFICULTY_COLORS: DifficultyColor = {
  easy: "#22c55e",
  moderate: "#3b82f6",
  challenging: "#1a1a1a",
};

export const DIFFICULTY_LABELS = {
  easy: "Easy — All fitness levels",
  moderate: "Moderate — Some cycling experience",
  challenging: "Challenging — Experienced riders",
} as const;
