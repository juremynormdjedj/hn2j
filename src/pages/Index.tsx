import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TrainingSection } from '@/components/sections/TrainingSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <IndustriesSection />
        <ServicesSection />
        <TrainingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
