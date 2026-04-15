import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "@/components/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Global Elite Facility Services" },
      { name: "description", content: "Learn about Global Elite Facility Services — 100% legally compliant, PSARA licensed, providing integrated security and facility solutions." },
      { property: "og:title", content: "About Global Elite Facility Services" },
      { property: "og:description", content: "100% legally compliant, PSARA licensed security & facility services." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
