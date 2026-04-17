import { Shield, Sparkles, Brush, Bug, Users, TreePine, type LucideIcon } from "lucide-react";
import heroSecurity from "@/assets/hero-security.jpg";
import heroHousekeeping from "@/assets/hero-housekeeping.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import servicePest from "@/assets/service-pest.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import serviceGarden from "@/assets/service-garden.jpg";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "security-services",
    title: "Security Services",
    shortDescription:
      "Armed & unarmed guarding, CCTV monitoring, and access control for complete premises security.",
    description:
      "We provide trained and licensed security personnel for residential complexes, corporate offices, industrial sites, and retail spaces. Our teams manage access points, patrol sensitive zones, monitor CCTV feeds, and respond quickly to emergencies with disciplined, site-specific security coverage.",
    image: heroSecurity,
    icon: Shield,
    highlights: [
      "PSARA-licensed guards with verified backgrounds",
      "24/7 site surveillance and patrolling support",
      "Visitor, gate, and access control management",
    ],
  },
  {
    slug: "housekeeping",
    title: "Housekeeping",
    shortDescription:
      "Daily and periodic housekeeping services to maintain clean, hygienic environments.",
    description:
      "Our housekeeping team handles routine cleaning, washroom maintenance, dusting, waste collection, and hygiene control for offices, apartments, hospitals, and institutions. Dedicated supervisors ensure standards stay consistent across shifts and large premises.",
    image: heroHousekeeping,
    icon: Sparkles,
    highlights: [
      "Daily upkeep for offices, residences, and institutions",
      "Washroom hygiene and consumable management",
      "Trained staff with on-site supervision",
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription:
      "Thorough deep cleaning for offices, commercial spaces, and residential properties.",
    description:
      "Our deep cleaning service targets built-up dirt and hard-to-reach areas using industrial equipment and safe cleaning agents. We cover floors, fixtures, kitchens, washrooms, upholstery, and post-construction spaces with a structured top-to-bottom cleaning process.",
    image: heroCleaning,
    icon: Brush,
    highlights: [
      "Machine-based scrubbing and detailed sanitization",
      "Ideal for move-ins, handovers, and periodic reset cleaning",
      "Safe chemicals with professional equipment handling",
    ],
  },
  {
    slug: "pest-control",
    title: "Pest Control",
    shortDescription:
      "Comprehensive pest management solutions to keep your premises pest-free.",
    description:
      "We offer targeted pest control for termites, cockroaches, rodents, mosquitoes, bed bugs, and more. Treatments are selected based on site conditions and infestation type, helping businesses and residences maintain cleaner, safer, and more compliant environments.",
    image: servicePest,
    icon: Bug,
    highlights: [
      "Treatment plans for homes, offices, and commercial sites",
      "Government-approved chemicals and safe application",
      "One-time visits and annual maintenance options",
    ],
  },
  {
    slug: "bouncer-services",
    title: "Bouncer Services",
    shortDescription:
      "Trained bouncers for events, clubs, and high-security venues.",
    description:
      "Our bouncers and event security professionals are trained in crowd handling, access management, conflict control, and VIP movement. They are suitable for weddings, corporate events, nightlife venues, concerts, and private functions requiring strong but polished front-line security.",
    image: heroEvent,
    icon: Users,
    highlights: [
      "Experienced personnel for events and VIP movement",
      "Crowd control and entry-point coordination",
      "Professional appearance with calm incident handling",
    ],
  },
  {
    slug: "gardening",
    title: "Gardening",
    shortDescription:
      "Professional landscaping and garden maintenance services.",
    description:
      "Our gardening team manages lawn care, pruning, plant maintenance, irrigation checks, and seasonal upkeep for residential and commercial landscapes. We help properties stay green, neat, and visually welcoming throughout the year.",
    image: serviceGarden,
    icon: TreePine,
    highlights: [
      "Routine landscape maintenance and grooming",
      "Plant care for campuses, offices, and apartments",
      "Support for both outdoor and indoor greenery",
    ],
  },
];

export function getServiceBySlug(slug?: string) {
  return services.find((service) => service.slug === slug);
}
