import ServicesSection from "@/components/ServicesSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function ServicesPage() {
  usePageMeta({
    title: "Our Services — Global Elite Facility Services",
    description:
      "Explore our security, housekeeping, deep cleaning, pest control, bouncer, and gardening services in Bengaluru.",
  });

  return <ServicesSection showDetails />;
}
