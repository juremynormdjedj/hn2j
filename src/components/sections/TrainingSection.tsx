import { Section, SectionHeader } from '@/components/Section';
import { GlowCard } from '@/components/GlowCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Zap, 
  Bot, 
  Globe,
  Lightbulb,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const trainingPrograms = [
  {
    icon: Rocket,
    name: 'App in a Day',
    description: 'Build your first Power App in a single day with hands-on guidance.',
    duration: '1 day',
  },
  {
    icon: Zap,
    name: 'Flow in a Day',
    description: 'Master Power Automate and create automated workflows.',
    duration: '1 day',
  },
  {
    icon: Bot,
    name: 'Agent in a Day',
    description: 'Create AI-powered agents with Copilot Studio.',
    duration: '1 day',
  },
  {
    icon: Globe,
    name: 'Power Pages in a Day',
    description: 'Build external-facing portals and websites.',
    duration: '1 day',
  },
  {
    icon: Lightbulb,
    name: 'Discovery Sessions',
    description: 'Explore possibilities and define your roadmap.',
    duration: 'Half day',
  },
  {
    icon: BookOpen,
    name: 'Advanced Training',
    description: 'Deep-dive into best practices and advanced patterns.',
    duration: 'Multi-day',
  },
];

export const TrainingSection = () => {
  return (
    <Section id="training">
      <SectionHeader
        eyebrow="Learning & Development"
        title="Training Programs"
        description="Accelerate your team's capabilities with our immersive, hands-on training programs designed by Microsoft experts."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingPrograms.map((program) => (
          <GlowCard key={program.name}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-border-subtle">
                <program.icon className="w-5 h-5 glow-icon" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {program.name}
                  </h3>
                  <span className="text-xs text-glow-purple bg-glow-purple/10 px-2 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Hackathon Highlight */}
      <div className="mt-12 gradient-border bg-card p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <span className="inline-block text-glow-blue text-sm font-semibold uppercase tracking-wider mb-4">
              Featured Program
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Enterprise Hackathons
            </h3>
            <p className="text-muted-foreground max-w-xl">
              Immersive multi-day events where your teams collaborate to solve real business challenges 
              using Microsoft technologies. Learn by doing with expert guidance.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="gradient" size="lg">
              Organize a Hackathon
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
