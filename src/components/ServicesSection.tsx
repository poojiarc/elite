import { useInView } from "@/hooks/useInView";
import { Shield, Sparkles, Brush, Bug, Users, TreePine } from "lucide-react";
import heroSecurity from "@/assets/hero-security.jpg";
import heroHousekeeping from "@/assets/hero-housekeeping.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import servicePest from "@/assets/service-pest.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import serviceGarden from "@/assets/service-garden.jpg";

const services = [
  {
    title: "Security Services",
    desc: "Armed & unarmed guarding, CCTV monitoring, and access control for complete premises security.",
    img: heroSecurity,
    icon: Shield,
    details: "We provide trained and licensed security personnel for residential complexes, corporate offices, industrial sites, and retail spaces. Our services include 24/7 CCTV surveillance monitoring, access control management, patrolling, visitor management, and emergency response. All guards are PSARA-licensed and undergo rigorous background checks and regular training.",
  },
  {
    title: "Housekeeping",
    desc: "Daily and periodic housekeeping services to maintain clean, hygienic environments.",
    img: heroHousekeeping,
    icon: Sparkles,
    details: "Our housekeeping team ensures spotless, well-maintained premises through daily sweeping, mopping, dusting, washroom sanitization, and waste management. We serve corporate offices, hospitals, educational institutions, and residential societies with dedicated supervisors ensuring consistent quality and hygiene standards.",
  },
  {
    title: "Deep Cleaning",
    desc: "Thorough deep cleaning for offices, commercial spaces, and residential properties.",
    img: heroCleaning,
    icon: Brush,
    details: "Our deep cleaning service covers every corner — from ceiling fans and light fixtures to floor scrubbing and tile grouting. We use industrial-grade equipment and eco-friendly chemicals to handle carpet shampooing, upholstery cleaning, kitchen degreasing, bathroom descaling, and post-construction cleanup for both commercial and residential spaces.",
  },
  {
    title: "Pest Control",
    desc: "Comprehensive pest management solutions to keep your premises pest-free.",
    img: servicePest,
    icon: Bug,
    details: "We offer integrated pest management covering termites, cockroaches, rodents, mosquitoes, bed bugs, and more. Our certified technicians use government-approved chemicals and methods including gel treatment, spray treatment, fumigation, and herbal solutions. We provide one-time treatments as well as annual maintenance contracts with guaranteed results.",
  },
  {
    title: "Bouncer Services",
    desc: "Trained bouncers for events, clubs, and high-security venues.",
    img: heroEvent,
    icon: Users,
    details: "Our professional bouncers and bodyguards are trained in crowd management, conflict resolution, and VIP protection. Ideal for corporate events, weddings, concerts, nightclubs, and private parties. All personnel are physically fit, well-groomed, and experienced in handling high-pressure situations with professionalism and discretion.",
  },
  {
    title: "Gardening",
    desc: "Professional landscaping and garden maintenance services.",
    img: serviceGarden,
    icon: TreePine,
    details: "Our gardening team provides complete landscape maintenance including lawn mowing, hedge trimming, flower bed management, tree pruning, and irrigation system upkeep. We also offer landscape design, indoor plant maintenance for offices, and seasonal planting services to keep your outdoor spaces beautiful year-round.",
  },
];

export default function ServicesSection({ showDetails = false }: { showDetails?: boolean }) {
  const { ref, visible } = useInView();

  return (
    <section id="services" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive facility management solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, img, icon: Icon, details }, i) => (
            <div
              key={title}
              className={`service-card bg-card border border-border rounded-xl overflow-hidden group flex flex-col ${
                visible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              {/* Image with title overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="service-overlay absolute inset-0 bg-navy/70" />
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-9 h-9 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy-foreground">{title}</h3>
                  </div>
                </div>
              </div>

              {/* Description below the image */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm text-foreground font-medium mb-2">{desc}</p>
                {showDetails && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
