import MobileTokenomics from '@/components/ui/MobileTokenomics';
import Frame1 from '../../../assets/frame1.png';
import Frame2 from '../../../assets/frame2.png';
import Title from '@/components/ui/Title';

const ZapixTokenomics = () => {
  return (
    <div className="mx-auto max-w-[1680px] relative mx-auto flex  flex-col items-center justify-center text-center">
      <Title
        title="Tokenomics of Zapix"
        description="Zapix is designed with smart tokenomics to support real growth. It has a limited supply, fair distribution, and strong utility to give value to holders and users."
      />

      {/* Desktop */}
      <div className="hidden lg:block mt-[32px] ">
        <img src={Frame2} alt="Frame 1" />
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden mt-[32px]">
        <img src={Frame1} alt="Frame 2" />
      </div>

      <MobileTokenomics />
    </div>
  );
};

export default ZapixTokenomics