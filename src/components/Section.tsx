import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section = ({ id, children, className, dark = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-20 lg:py-32',
        dark && 'section-dark',
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader = ({ eyebrow, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={cn('mb-16', centered && 'text-center')}>
      {eyebrow && (
        <span className="inline-block text-glow-blue text-sm font-semibold uppercase tracking-wider mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      {description && (
        <p className={cn('text-muted-foreground text-lg max-w-3xl', centered && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
};
