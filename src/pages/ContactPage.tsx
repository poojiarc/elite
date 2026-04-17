import ContactSection from "@/components/ContactSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function ContactPage() {
  usePageMeta({
    title: "Contact Us — Global Elite Facility Services",
    description:
      "Contact Global Elite Facility Services in Kalyan Nagar, Bengaluru for security and facility management support.",
  });

  return <ContactSection />;
}
