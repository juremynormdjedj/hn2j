import { Link } from 'react-router-dom';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const CTASection = () => {
  return (
    <Section dark className="relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, hsl(259 100% 65% / 0.4) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border-subtle rounded-full px-4 py-2 mb-8">
          <MessageCircle className="w-4 h-4 text-glow-purple" />
          <span className="text-sm text-muted-foreground">Ready to Transform?</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Let's Build Something{' '}
          <span className="gradient-text">Amazing Together</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Whether you're starting your digital transformation journey or looking to optimize your Microsoft investments, 
          our experts are ready to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/#expertise">
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
