import { useEffect, useRef, useState } from 'react';
import Title from '@/components/ui/Title';
import Tokenomics from '../../../assets/tokenomics.webp';
import MobileTokenomics from '@/components/ui/MobileTokenomics';

const TokenomicsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto flex max-w-[1920px] flex-col justify-center">
      <Title title="Tokenomics of Zapix" description="Zapix is designed with smart tokenomics to support real growth. It has a limited supply, fair distribution, and strong utility to give value to holders and users." />

      <div>
        <img
          ref={imageRef}
          className={`mx-auto mt-[40px] h-[182px] w-[192px] md:h-[360px] md:w-[350px] xl:h-[716px] xl:w-[760px] transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'
          }`}
          src={Tokenomics}
          alt="Tokenomics"
        />

        <MobileTokenomics />
      </div>
    </div>
  );
};

export default TokenomicsSection;
