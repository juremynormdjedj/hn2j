import { Section, SectionHeader } from '@/components/Section';
import { GlowCard } from '@/components/GlowCard';
import { 
  GraduationCap, 
  Shield, 
  Settings,
  Users,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    category: 'Skills & Enablement',
    icon: GraduationCap,
    items: [
      'Power Platform Expertise',
      'Dynamics 365 CE Mastery',
      'Microsoft Azure Proficiency',
      'Copilot Studio Development',
    ],
  },
  {
    category: 'Advisory & Governance',
    icon: Shield,
    items: [
      'IT Project Management',
      'Business & Change Support',
      'Platform Governance',
      'Best Practices Implementation',
    ],
  },
  {
    category: 'Technical Implementation',
    icon: Settings,
    items: [
      'Custom Development',
      'System Integration',
      'Data Migration',
      'Performance Optimization',
    ],
  },
  {
    category: 'Team Support',
    icon: Users,
    items: [
      'Dedicated Consulting',
      'Staff Augmentation',
      'Knowledge Transfer',
      'Ongoing Mentorship',
    ],
  },
];

export const ServicesSection = () => {
  return (
    <Section id="services" dark>
      <SectionHeader
        eyebrow="Our Services"
        title="Consulting & Support Services"
        description="Comprehensive services designed to accelerate your digital transformation and maximize your Microsoft investment."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service) => (
          <GlowCard key={service.category} className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-vivid-purple/20 border border-border-subtle">
                <service.icon className="w-6 h-6 glow-icon" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {service.category}
              </h3>
            </div>

            <ul className="space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-glow-blue flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
};
