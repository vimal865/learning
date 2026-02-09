import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  programs: [
    { name: 'P2P Track', path: '/programs/p2p' },
    { name: 'O2C Track', path: '/programs/o2c' },
    { name: 'R2R Track', path: '/programs/r2r' },
    { name: 'SAP FICO', path: '/programs/sap-fico' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Batches & Fees', path: '/batches' },
    { name: 'Certifications', path: '/certifications' },
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-gold-400">
                <GraduationCap className="w-6 h-6 text-navy-900" />
              </div>
              <span className="font-display text-2xl font-bold">FinGrad</span>
            </Link>
            <p className="text-navy-200 mb-6 max-w-sm">
              Transform your finance career in 90 days with hands-on ERP training, 
              real finance processes, and direct placement support.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@fingrad.in" className="flex items-center gap-3 text-navy-200 hover:text-gold-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@fingrad.in</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-navy-200 hover:text-gold-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-navy-200">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold-400">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold-400">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-300 text-sm">
              © {new Date().getFullYear()} FinGrad. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-navy-800 text-navy-300 hover:bg-navy-700 hover:text-gold-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
