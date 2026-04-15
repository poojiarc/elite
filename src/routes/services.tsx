import { createFileRoute } from "@tanstack/react-router";
import ServicesSection from "@/components/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Global Elite Facility Services" },
      { name: "description", content: "Security, housekeeping, deep cleaning, pest control, bouncer, and gardening services in Bengaluru." },
      { property: "og:title", content: "Services — Global Elite Facility Services" },
      { property: "og:description", content: "Comprehensive facility management solutions tailored to your needs." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  );
}
