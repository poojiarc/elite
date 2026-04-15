import { Link } from "@tanstack/react-router";
import { Heart, Phone, MapPin, Clock, Home, Info, Briefcase, MessageSquare, Shield, Sparkles, Bug, TreePine, Users, Brush } from "lucide-react";
import logo from "@/assets/logo-icon.png";

const quickLinks = [
  { to: "/" as const, label: "Home", icon: Home },
  { to: "/about" as const, label: "About Us", icon: Info },
  { to: "/services" as const, label: "Services", icon: Briefcase },
  { to: "/contact" as const, label: "Contact", icon: MessageSquare },
];

const serviceLinks = [
  { label: "Security Services", icon: Shield },
  { label: "Housekeeping", icon: Sparkles },
  { label: "Deep Cleaning", icon: Brush },
  { label: "Pest Control", icon: Bug },
  { label: "Bouncer Services", icon: Users },
  { label: "Gardening", icon: TreePine },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Global Elite" className="h-10 w-auto" />
              <div>
                <span className="font-heading text-lg font-bold text-gold">GLOBAL ELITE</span>
                <span className="block text-xs text-navy-foreground/60 tracking-widest">Facility Services</span>
              </div>
            </div>
            <p className="text-sm text-navy-foreground/70 leading-relaxed">
              Professional Security & Facility Services under one roof. 100% legally compliant and PSARA licensed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-2 text-sm text-navy-foreground/70 hover:text-gold transition-colors">
                    <Icon className="h-4 w-4 text-gold shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <Link to="/services" className="flex items-center gap-2 text-sm text-navy-foreground/70 hover:text-gold transition-colors">
                    <Icon className="h-4 w-4 text-gold shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-navy-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:7892979134" className="hover:text-gold transition-colors">7892979134</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-foreground/70">
                <Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Mon–Fri: 9AM–6PM<br />Sat–Sun: 9AM–2PM</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>#3, 2nd Cross, Muniyappa Layout, Kalyan Nagar Post, Bengaluru – 560043</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-0 pt-8 pb-8 flex flex-col items-center gap-4 px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Global Elite Facility Services. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="inline h-4 w-4 text-destructive mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
}
