import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section, SectionHeader } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { GlowCard } from '@/components/GlowCard';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, hsl(259 100% 65% / 0.3) 0%, transparent 60%)',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-glow-blue text-sm font-semibold uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Start a{' '}
                <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your business with Microsoft technologies? 
                Our experts are here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <GlowCard hover={false} className="p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-border-subtle mb-6">
                      <CheckCircle2 className="w-8 h-8 text-glow-blue" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline-glow"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          required
                          className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or challenge..."
                        rows={6}
                        required
                        className="bg-background border-border-subtle focus:border-glow-blue transition-colors resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="gradient" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Our experts will get back to you quickly to discuss your needs.
                    </p>
                  </form>
                )}
              </GlowCard>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-border-subtle">
                    <Mail className="w-5 h-5 glow-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <a 
                      href="mailto:contact@hn2j.com"
                      className="text-muted-foreground hover:text-glow-blue transition-colors"
                    >
                      contact@hn2j.com
                    </a>
                  </div>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-border-subtle">
                    <Phone className="w-5 h-5 glow-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <a 
                      href="tel:+33123456789"
                      className="text-muted-foreground hover:text-glow-blue transition-colors"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-border-subtle">
                    <MapPin className="w-5 h-5 glow-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Paris, France
                    </p>
                  </div>
                </div>
              </GlowCard>

              {/* Response Time */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-electric-blue/5 to-vivid-purple/5 border border-border-subtle">
                <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
