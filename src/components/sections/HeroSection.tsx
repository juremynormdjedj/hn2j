import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlowCard } from '@/components/GlowCard';
import { Section } from '@/components/Section';

const duo = [
  {
    FullName: 'Julien Normand'
  },
  {
    FullName: 'Jérémy Hadjedj'
  }
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-blue">
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(259 100% 65% / 0.4) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 80% 80%, hsl(217 100% 62% / 0.3) 0%, transparent 50%)',
          }}
        />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(227 24% 22% / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, hsl(227 24% 22% / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-vivid-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border-subtle rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-glow-purple" />
            <span className="text-sm text-muted-foreground">Architecte Technique et Fonctionnel de vos outils Microsoft</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">HN2J</span>
            <span className="block mt-2">L'innovation proche de vous</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Donner aux équipes métiers et informatiques les moyens de réussir grâce aux technologies Microsoft.<br/>
            Des services experts de conseil, de montée en compétence et d’accompagnement, adaptés à votre parcours de transformation digitale.
          </p>

          {/* Duo */}
          <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {duo.map((d, index) => (
              <GlowCard key={d.FullName} className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all">
                      {d.FullName}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {d.FullName}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
          </Section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Démarrer votre projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/#expertise">
              <Button variant="hero-outline" size="xl">
                Explorer nos expertises
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border-subtle animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '100+', label: 'Projects Delivered' },
              { value: '50+', label: 'Enterprise Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
