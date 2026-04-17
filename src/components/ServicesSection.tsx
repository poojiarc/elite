import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { services } from "@/data/services";

export default function ServicesSection({ showDetails = false }: { showDetails?: boolean }) {
  const { ref, visible } = useInView();

  return (
    <section id="services" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Comprehensive facility management solutions tailored to your site, workforce, and daily operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, shortDescription, description, image, icon: Icon }, index) => (
            <article
              key={slug}
              className={`service-card group flex flex-col overflow-hidden rounded-xl border border-border bg-card ${
                visible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="service-overlay absolute inset-0 bg-navy/70" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/20 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy-foreground">{title}</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="mb-3 text-sm font-medium text-foreground">{shortDescription}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {showDetails ? description : `${description.slice(0, 145)}...`}
                </p>
                <Link
                  to={`/services/${slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-gold transition-colors hover:text-foreground"
                >
                  View service details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
