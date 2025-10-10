import NavigationBar from './components/navbar/NavigationBar';
import Stripe from './components/ui/Stripe';
import UnderHompic from './components/ui/UnderHompic';
import ConnectedSection from './pages/home/sections/ConnectedSection';
import HeroSection from './pages/home/sections/HeroSection';
import RoadmapSection from './pages/home/sections/RoadmapSection';
import ServicesSection from './pages/home/sections/ServicesSection';
import ContactSection from './pages/home/sections/ContactSection';
import BlogsSection from './pages/home/sections/BlogsSection';

import Galaxy from './components/ui/Galaxy';
import ZapixTokenomics from './pages/home/sections/ZapixTokenomics';

function App() {
  return (
    <div className="relative">
      {/* Fixed Galaxy Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Galaxy 
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1.5}
          glowIntensity={0.3}
          saturation={0.6}
          hueShift={240}
        />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <NavigationBar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="aboutus">
        <UnderHompic />
      </section>
      <div className="3xl:mt-[74px] 2xl:mt-[300px] mt-130 md:mt-120 lg:mt-150 xl:mt-110">
        <Stripe />
      </div>
      <section id="tokenomics" className='scroll-mt-[10px]'>
        <ZapixTokenomics />
        <div className="mt-[24px] md:mt-[50px]">
          <Stripe />
        </div>
      </section>
      <section id="services" className='scroll-mt-[10px]'>
        <ServicesSection />
      </section>
      <section id="roadmap" className='scroll-mt-[10px]'>
        <RoadmapSection />
      </section>
      <div className="mt-[84px]">
        <Stripe />
      </div>
      <section id="community" className='scroll-mt-[10px]'>
        <ConnectedSection />
      </section>
      <section id="blogs" className='scroll-mt-[10px]'>
        <BlogsSection />
      </section>
      <section>
        <ContactSection />
      </section>
      
      </div>
    </div>
  );
}

export default App;
