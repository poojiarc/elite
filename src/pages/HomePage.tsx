import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function HomePage() {
  usePageMeta({
    title: "Global Elite Facility Services — Professional Security & Facility Management",
    description:
      "Professional security, housekeeping, deep cleaning, pest control, and manpower services in Bengaluru.",
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
