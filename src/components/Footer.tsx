import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';
import logo from '@/assets/logo-hn2j.jpeg';

export const Footer = () => {
  return (
    <footer className="bg-deep-charcoal border-t border-border-subtle">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="HN2J" className="h-14 w-auto rounded-lg" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovation closer to you. Empowering business and IT teams through Microsoft technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Expertise', 'Services', 'Training', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : item === 'Contact' ? '/contact' : `/#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-glow-blue transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Power Platform</li>
              <li>Dynamics 365 CE</li>
              <li>Microsoft Azure</li>
              <li>Copilot Studio & AI</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@hn2j.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-glow-blue transition-colors text-sm"
                >
                  <Mail size={18} className="text-glow-blue" />
                  contact@hn2j.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 text-muted-foreground hover:text-glow-blue transition-colors text-sm"
                >
                  <Phone size={18} className="text-glow-blue" />
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-glow-blue transition-colors text-sm"
                >
                  <Linkedin size={18} className="text-glow-blue" />
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} HN2J. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-glow-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-glow-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
