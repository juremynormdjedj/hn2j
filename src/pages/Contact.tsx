import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section, SectionHeader } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlowCard } from '@/components/GlowCard';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          company: data.company || undefined,
          subject: data.subject,
          message: data.message,
        },
      });

      if (error) {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again.');
        return;
      }

      setSubmitted(true);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@company.com"
                                  className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Company"
                                  className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="How can we help?"
                                  className="bg-background border-border-subtle focus:border-glow-blue transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or challenge..."
                                rows={6}
                                className="bg-background border-border-subtle focus:border-glow-blue transition-colors resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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
                  </Form>
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
