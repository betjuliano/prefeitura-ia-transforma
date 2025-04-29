
import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import WhyAISection from '@/components/WhyAISection';
import ImpactSection from '@/components/ImpactSection';
import SolutionsSection from '@/components/SolutionsSection';
import InvestmentSection from '@/components/InvestmentSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <AboutSection />
        <WhyAISection />
        <ImpactSection />
        <SolutionsSection />
        <InvestmentSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
