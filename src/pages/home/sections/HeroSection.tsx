import HomePic from '@/components/ui/HomePic';

const HeroSection = () => {
  return (
    <div className="mx-auto mt-[114px] flex max-w-[1920px] flex-col justify-center">
      {/* Hero Content */}
      <div className="mx-auto max-w-[964px]">
        <h1 className="font-lora text-center text-[32px] leading-[40px] font-normal md:text-[64px] md:leading-[72px]">
          Use your Zapix.
        </h1>
        <h1 className="font-lora text-center text-[64px] leading-[72px] font-normal">
          Unlock real utility.
        </h1>
        <p className="mt-[16px] text-center font-sans text-[18px] leading-[24px] font-normal text-[#8B8B8B] md:text-[20px]">
          Don't follow just "trending" tokens. Real value utility from real use.
          Right?
        </p>
        <div className="flex items-center px-[371px]">
          <div className="mt-[54px] max-w-[222px] rounded-[16px] bg-white">
            <button className="w-[190px] cursor-pointer p-[16px] font-sans text-[16px] leading-[24px] font-bold text-black">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Picture Frame */}

      <HomePic />
    </div>
  );
};

export default HeroSection;
