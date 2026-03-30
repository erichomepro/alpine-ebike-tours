import { Hero } from "@/components/home/hero";
import { ValueProps } from "@/components/home/value-props";
import { FeaturedTours } from "@/components/home/featured-tours";
import { HowItWorks } from "@/components/home/how-it-works";
import { TrailMapTeaser } from "@/components/home/trail-map-teaser";
import { SocialProof } from "@/components/home/social-proof";
import { Newsletter } from "@/components/home/newsletter";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedTours />
      <HowItWorks />
      <TrailMapTeaser />
      <SocialProof />
      <Newsletter />
      <CTASection />
    </>
  );
}
