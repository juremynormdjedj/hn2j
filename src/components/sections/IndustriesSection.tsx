import { Section, SectionHeader } from '@/components/Section';
import { GlowCard } from '@/components/GlowCard';
import { Gem, ShoppingBag, Zap, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Gem,
    name: 'Luxury',
    description: 'Tailored digital solutions for prestigious brands, combining elegance with innovation.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description: 'Omnichannel strategies and customer engagement platforms for modern retail.',
  },
  {
    icon: Zap,
    name: 'Energy',
    description: 'Digital transformation solutions for sustainable and efficient energy operations.',
  },
  {
    icon: Building2,
    name: 'Construction',
    description: 'Project management and collaboration tools for construction excellence.',
  },
];

export const IndustriesSection = () => {
  return (
    <Section>
      <SectionHeader
        eyebrow="Industry Focus"
        title="Business & Industry Expertise"
        description="Deep understanding of industry-specific challenges combined with technical excellence for pragmatic, scalable solutions."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry) => (
          <GlowCard key={industry.name} className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-vivid-purple/10 border border-border-subtle mb-6">
              <industry.icon className="w-8 h-8 glow-icon" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
              {industry.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {industry.description}
            </p>
          </GlowCard>
        ))}
      </div>

      {/* Value Propositions */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { title: 'Business Understanding', desc: 'We speak your language and understand your challenges' },
          { title: 'IT & Business Alignment', desc: 'Bridging the gap between technology and business goals' },
          { title: 'Pragmatic Solutions', desc: 'Scalable implementations that deliver real value' },
        ].map((item) => (
          <div key={item.title} className="p-6">
            <h4 className="font-display text-lg font-semibold gradient-text mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
