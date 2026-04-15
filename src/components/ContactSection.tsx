import { useState } from "react";
import { Phone, Clock, MapPin, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function ContactSection() {
  const { ref, visible } = useInView();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, I am ${form.name}. Phone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/917892979134?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Get In <span className="text-gold">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className={`space-y-8 ${visible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">Phone</h3>
                <a href="tel:7892979134" className="text-muted-foreground hover:text-gold transition-colors">7892979134</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">Business Hours</h3>
                <p className="text-muted-foreground text-sm">Monday–Friday: 9 AM – 6 PM</p>
                <p className="text-muted-foreground text-sm">Saturday: 9 AM – 2 PM</p>
                <p className="text-muted-foreground text-sm">Sunday: 9 AM – 2 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">Address</h3>
                <p className="text-muted-foreground text-sm">
                  #3, 2nd Cross, Muniyappa Layout,<br />
                  Kalyan Nagar Post,<br />
                  Bengaluru, Karnataka – 560043
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-card rounded-xl p-8 shadow-lg border border-border ${visible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Send us a message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-heading font-semibold rounded-lg hover:brightness-110 transition-all duration-300 shadow-md shadow-gold/20"
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
