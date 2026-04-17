import { Link, useParams } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";
import NotFoundPage from "@/pages/NotFoundPage";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  usePageMeta({
    title: service
      ? `${service.title} — Global Elite Facility Services`
      : "Service Not Found — Global Elite Facility Services",
    description: service
      ? service.description
      : "The requested service could not be found.",
  });

  if (!service) {
    return <NotFoundPage />;
  }

  const Icon = service.icon;

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-gold/40 hover:text-gold"
        >
          Back to Services
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-gold/10 px-4 py-2 text-sm text-gold">
              <Icon className="h-4 w-4" />
              Dedicated facility solution
            </div>
            <h1 className="mt-5 font-heading text-4xl font-bold text-foreground md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {service.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {service.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-sm font-semibold leading-6 text-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-gold px-6 py-3 font-heading text-base font-semibold text-gold-foreground transition hover:brightness-110"
              >
                Request a Quote
              </Link>
              <a
                href="tel:7892979134"
                className="inline-flex items-center rounded-lg border border-border bg-background px-6 py-3 font-heading text-base font-semibold text-foreground transition hover:border-gold/40 hover:text-gold"
              >
                Call 7892979134
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-gold/10">
            <img
              src={service.image}
              alt={service.title}
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
