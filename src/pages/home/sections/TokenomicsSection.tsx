import Title from '@/components/ui/Title';
import Tokenomics from '../../../assets/tokenomics.webp';
import MobileTokenomics from '@/components/ui/MobileTokenomics';

const TokenomicsSection = () => {
  return (
    <div className="mx-auto flex max-w-[1920px] flex-col justify-center">
      <Title title="Tokenomics of Zapix" description="Zapix is designed with smart tokenomics to support real growth. It has a limited supply, fair distribution, and strong utility to give value to holders and users." />

      <div>
        <img
          className="mx-auto mt-[40px] h-[182px] w-[192px] md:h-[360px] md:w-[350px] xl:h-[716px] xl:w-[760px]"
          src={Tokenomics}
          alt="Tokenomics"
        />

        <MobileTokenomics />
      </div>
    </div>
  );
};

export default TokenomicsSection;
