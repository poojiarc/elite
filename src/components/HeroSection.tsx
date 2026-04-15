import { useState, useEffect } from "react";
import heroSecurity from "@/assets/hero-security.jpg";
import heroHousekeeping from "@/assets/hero-housekeeping.jpg";
import heroManpower from "@/assets/hero-manpower.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";

const slides = [heroSecurity, heroHousekeeping, heroManpower, heroEvent, heroCleaning];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Service ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            {...(i === 0 ? {} : { loading: "lazy" as const })}
            width={1920}
            height={1080}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-navy-foreground max-w-4xl leading-tight animate-reveal-up">
          Professional Security & Facility Services{" "}
          <span className="text-gold">Under One Roof</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-navy-foreground/80 max-w-2xl animate-reveal-up delay-200">
          100% Legally Compliant • PSARA Licensed • 24/7 Emergency Response
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center px-8 py-4 bg-gold text-gold-foreground font-heading font-semibold text-lg rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg shadow-gold/30 animate-reveal-up delay-400"
        >
          Contact Us
        </a>

        {/* Dots */}
        <div className="absolute bottom-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-8" : "bg-navy-foreground/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
