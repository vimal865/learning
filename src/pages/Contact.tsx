import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MainLayout } from '@/components/layout/MainLayout';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@fingrad.in',
    href: 'mailto:hello@fingrad.in'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Bengaluru, Karnataka, India',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    value: 'Mon-Sat: 9AM - 6PM IST',
    href: '#'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <MainLayout>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-white/80">
              Have questions about our programs? Want to talk to a career expert? 
              We're here to help you start your finance career journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels. Our team typically 
                responds within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-navy-50 hover:bg-navy-100 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-700 transition-colors">
                      <info.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl text-white">
                <MessageCircle className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">
                  Talk to a Career Expert
                </h3>
                <p className="text-white/80 mb-4">
                  Schedule a free 15-minute call with our career counselors.
                </p>
                <Button variant="gold" className="w-full">
                  Schedule Call
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Inquiry about P2P Track"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gold" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Find quick answers to common questions about our programs, fees, and placements.
            </p>
            <Link to="/faqs">
              <Button variant="outline" size="lg">
                View FAQs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;
