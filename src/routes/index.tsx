import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Elite Facility Services — Professional Security & Facility Management" },
      { name: "description", content: "Professional security, housekeeping, and facility management services in Bengaluru. PSARA licensed, 24/7 emergency response. Contact us today." },
      { property: "og:title", content: "Global Elite Facility Services" },
      { property: "og:description", content: "Professional Security & Facility Services Under One Roof" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
