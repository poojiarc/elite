import { useInView } from "@/hooks/useInView";
import heroSecurity from "@/assets/hero-security.jpg";
import heroHousekeeping from "@/assets/hero-housekeeping.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import servicePest from "@/assets/service-pest.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import serviceGarden from "@/assets/service-garden.jpg";

const services = [
  { title: "Security Services", desc: "Armed & unarmed guarding, CCTV monitoring, and access control for complete premises security.", img: heroSecurity },
  { title: "Housekeeping", desc: "Daily and periodic housekeeping services to maintain clean, hygienic environments.", img: heroHousekeeping },
  { title: "Deep Cleaning", desc: "Thorough deep cleaning for offices, commercial spaces, and residential properties.", img: heroCleaning },
  { title: "Pest Control", desc: "Comprehensive pest management solutions to keep your premises pest-free.", img: servicePest },
  { title: "Bouncer Services", desc: "Trained bouncers for events, clubs, and high-security venues.", img: heroEvent },
  { title: "Gardening", desc: "Professional landscaping and garden maintenance services.", img: serviceGarden },
];

export default function ServicesSection() {
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
          {services.map(({ title, desc, img }, i) => (
            <div
              key={title}
              className={`service-card relative rounded-xl overflow-hidden h-72 group cursor-pointer ${
                visible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="service-overlay absolute inset-0 bg-navy/70" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="font-heading text-xl font-bold text-navy-foreground mb-2">{title}</h3>
                <p className="text-sm text-navy-foreground/80">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
