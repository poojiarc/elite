import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

type NotFoundPageProps = {
  title?: string;
  description?: string;
};

export default function NotFoundPage({
  title = "Page not found",
  description = "The page you're looking for doesn't exist or has been moved.",
}: NotFoundPageProps) {
  usePageMeta({
    title: "404 — Global Elite Facility Services",
    description,
  });

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="font-heading text-7xl font-bold text-gold">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h1>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-lg bg-gold px-6 py-3 font-heading font-semibold text-gold-foreground transition hover:brightness-110"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
