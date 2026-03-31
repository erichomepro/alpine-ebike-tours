import { Hero } from "@/components/home/hero";
import { ValueProps } from "@/components/home/value-props";
import { FeaturedTours } from "@/components/home/featured-tours";
import { HowItWorks } from "@/components/home/how-it-works";
import { SocialProof } from "@/components/home/social-proof";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedTours />
      <HowItWorks />
      <SocialProof />
      <CTASection />
    </>
  );
}
