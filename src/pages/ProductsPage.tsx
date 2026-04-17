import { ShieldCheck, Sparkles, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

const productBundles = [
  {
    title: "Security Deployment Package",
    description:
      "A complete guarding solution for offices, apartments, retail spaces, and industrial premises with trained staff and supervision.",
    icon: ShieldCheck,
  },
  {
    title: "Housekeeping & Hygiene Package",
    description:
      "A recurring cleaning and upkeep package designed for workplaces and shared facilities that require dependable hygiene standards.",
    icon: Sparkles,
  },
  {
    title: "Integrated Facility Package",
    description:
      "A combined service model covering security, housekeeping, deep cleaning, and support manpower under one management team.",
    icon: Layers3,
  },
];

export default function ProductsPage() {
  usePageMeta({
    title: "Products & Packages — Global Elite Facility Services",
    description:
      "Browse packaged security and facility service solutions designed for commercial and residential properties.",
  });

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
            Service Packages
          </span>
          <h1 className="mt-5 font-heading text-4xl font-bold text-foreground md:text-6xl">
            Ready-to-deploy facility service packages
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
            These bundled offerings make it easier to choose the right mix of support for your building,
            site, office, or event without starting from scratch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productBundles.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-foreground">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-secondary p-8 md:p-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">Need a custom solution?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            We also create tailored service plans based on your manpower requirement, site size, cleaning scope,
            and operating hours.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center rounded-lg bg-gold px-6 py-3 font-heading font-semibold text-gold-foreground transition hover:brightness-110"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
