
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import FutureSection from '../components/FutureSection';
import ObjectionsSection from '../components/ObjectionsSection';
import OriginStorySection from '../components/OriginStorySection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <div className="space-y-0">
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <OriginStorySection />
        <TestimonialsSection />
        <HowItWorksSection />
        <ObjectionsSection />
        <PricingSection />
        <FAQSection />
        <FutureSection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
