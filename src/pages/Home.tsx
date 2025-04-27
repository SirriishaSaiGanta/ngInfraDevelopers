import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      {/* <TeamSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
};

export default Home;