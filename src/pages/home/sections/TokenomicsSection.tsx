import { useEffect, useRef, useState } from 'react';
import Title from '@/components/ui/Title';
import Tokenomics from '../../../assets/tokenomics.webp';
import MobileTokenomics from '@/components/ui/MobileTokenomics';
import { motion } from 'framer-motion';

const TokenomicsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mx-auto flex max-w-[1920px] flex-col items-center justify-center text-center">
      {/* Section Title */}
      <Title
        title="Tokenomics of Zapix"
        description="Zapix is designed with smart tokenomics to support real growth. It has a limited supply, fair distribution, and strong utility to give value to holders and users."
      />

      {/* Container for chart + labels */}
      <div className="relative mt-12 hidden md:block">
        {/* Pie chart image */}
        <motion.img
          ref={imageRef}
          src={Tokenomics}
          alt="Tokenomics Pie Chart"
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mx-auto h-auto w-[90%] max-w-[760px] drop-shadow-2xl"
        />

        {/* Labels around the chart */}
        <div className="pointer-events-none absolute inset-0 text-sm text-white xl:text-base">
          {/*  Development */}
          <div className="absolute top-[10%] right-[8%] flex items-center">
            <div className="mr-2 flex items-center">
              <div className="h-0.5 w-8 rotate-45 transform bg-white"></div>
              <div className="h-0.5 w-8 rotate-45 transform bg-white"></div>
              <div className="-ml-0.5 h-1.5 w-1.5 rotate-45 transform rounded-full bg-white"></div>
            </div>
            <span className="font-semibold">35% Development</span>
          </div>

          {/*  Community Rewards */}
          <div className="absolute bottom-[22%] right-[10%] flex items-center">
            <div className="mr-2 flex items-center">
              <div className="h-0.5 w-8 -rotate-12 transform bg-white"></div>
              <div className="-ml-0.5 h-1.5 w-1.5 -rotate-12 transform rounded-full bg-white"></div>
            </div>
            <span className="font-semibold">10% Community Rewards</span>
          </div>

          {/*  Public Sale */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="mb-2 flex flex-col items-center">
              <div className="h-8 w-0.5 bg-white"></div>
              <div className="-mt-0.5 h-1.5 w-1.5 rounded-full bg-white"></div>
            </div>
            <span className="font-semibold">20% Public Sale</span>
          </div>

          {/* Team & Advisors */}
          <div className="absolute bottom-[25%] left-[10%] flex items-center">
            <div className="mr-2 flex items-center">
              <div className="h-0.5 w-8 rotate-12 transform bg-white"></div>
              <div className="-ml-0.5 h-1.5 w-1.5 rotate-12 transform rounded-full bg-white"></div>
            </div>
            <span className="font-semibold">15% Team & Advisors</span>
          </div>

          {/*  Marketing */}
          <div className="absolute top-[40%] left-[7%] flex items-center">
            <div className="mr-2 flex items-center">
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="-ml-0.5 h-1.5 w-1.5 rounded-full bg-white"></div>
            </div>
            <span className="font-semibold">10% Marketing</span>
          </div>

          {/*  Reserve */}
          <div className="absolute top-[12%] left-[20%] flex items-center">
            <div className="mr-2 flex items-center">
              <div className="h-0.5 w-8 -rotate-45 transform bg-white"></div>
              <div className="-ml-0.5 h-1.5 w-1.5 -rotate-45 transform rounded-full bg-white"></div>
            </div>
            <span className="font-semibold">10% Reserve</span>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden mt-10">
        <MobileTokenomics />
      </div>
    </div>
  );
};

export default TokenomicsSection;
