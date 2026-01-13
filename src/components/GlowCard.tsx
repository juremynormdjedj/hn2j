import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlowCard = ({ children, className, hover = true }: GlowCardProps) => {
  return (
    <div
      className={cn(
        'gradient-border bg-card p-6 lg:p-8',
        hover && 'card-glow cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};
