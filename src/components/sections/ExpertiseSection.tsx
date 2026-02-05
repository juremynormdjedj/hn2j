import { Section, SectionHeader } from '@/components/Section';
import { GlowCard } from '@/components/GlowCard';
import { 
  FlagTriangleRight, 
  Workflow, 
  Cloud, 
  Bot,
  ArrowRight
} from 'lucide-react';

const technologies = [
  {
    icon: FlagTriangleRight,
    title: 'Power Platform',
    description: 'Power Apps, Power Automate, Power BI, and Power Pages for low-code business solutions.',
    features: ['Custom App Development', 'Process Automation', 'Business Intelligence', 'Portal Solutions'],
  },
  {
    icon: Workflow,
    title: 'Dynamics 365 CE',
    description: 'Customer Engagement solutions for sales, marketing, and customer service excellence.',
    features: ['Sales Automation', 'Customer Insights', 'Service Management', 'Field Service'],
  },
  {
    icon: Cloud,
    title: 'Microsoft Azure',
    description: 'Cloud infrastructure, data services, and modern application development.',
    features: ['Cloud Migration', 'Data Analytics', 'DevOps Solutions', 'Integration Services'],
  },
  {
    icon: Bot,
    title: 'Copilot Studio & AI',
    description: 'AI-powered agents and intelligent automation for the modern enterprise.',
    features: ['AI Agents', 'Natural Language', 'Workflow Intelligence', 'Conversational AI'],
  },
];

export const ExpertiseSection = () => {
  return (
    <Section id="expertise" dark>
      <SectionHeader
        eyebrow="Technology Expertise"
        title="Microsoft Technology Stack"
        description="Deep expertise across the Microsoft ecosystem to power your digital transformation with cutting-edge solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {technologies.map((tech, index) => (
          <GlowCard key={tech.title} className="group">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-border-subtle">
                <tech.icon className="w-6 h-6 glow-icon" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {tech.features.map((feature) => (
                <div 
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <ArrowRight className="w-3 h-3 text-glow-blue" />
                  {feature}
                </div>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
};
