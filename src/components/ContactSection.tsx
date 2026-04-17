import { useState, type FormEvent } from "react";
import { Phone, Clock, MapPin, Send, ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { services } from "@/data/services";

const serviceOptions = [...services.map((service) => service.title), "Other"];

export default function ContactSection() {
  const { ref, visible } = useInView();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Hello, I am ${form.name}. Phone: ${form.phone}. Service: ${form.service}. ${form.message}`;
    window.open(`https://wa.me/917892979134?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-secondary py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 text-center ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Get In <span className="text-gold">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className={`space-y-8 ${visible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Phone</h3>
                <a href="tel:7892979134" className="text-muted-foreground transition-colors hover:text-gold">
                  7892979134
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Business Hours</h3>
                <p className="text-sm text-muted-foreground">Monday–Friday: 9 AM – 6 PM</p>
                <p className="text-sm text-muted-foreground">Saturday: 9 AM – 2 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: 9 AM – 2 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">Address</h3>
                <p className="text-sm text-muted-foreground">
                  #3, 2nd Cross, Muniyappa Layout,
                  <br />
                  Kalyan Nagar Post,
                  <br />
                  Bengaluru, Karnataka – 560043
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`rounded-xl border border-border bg-card p-8 shadow-lg ${visible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">Send us a message</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Service Required</label>
                <div className="relative">
                  <select
                    required
                    value={form.service}
                    onChange={(event) => setForm({ ...form, service: event.target.value })}
                    className="w-full cursor-pointer appearance-none rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 font-heading font-semibold text-gold-foreground shadow-md shadow-gold/20 transition-all duration-300 hover:brightness-110"
              >
                <Send className="h-5 w-5" />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
