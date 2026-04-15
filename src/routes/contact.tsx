import { createFileRoute } from "@tanstack/react-router";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Global Elite Facility Services" },
      { name: "description", content: "Contact Global Elite Facility Services at 7892979134. Located in Kalyan Nagar, Bengaluru. Get a free quote today." },
      { property: "og:title", content: "Contact — Global Elite Facility Services" },
      { property: "og:description", content: "Reach us at Kalyan Nagar, Bengaluru for all your facility service needs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
