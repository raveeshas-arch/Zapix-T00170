import HomePic from '@/components/ui/HomePic';

const HeroSection = () => {
  return (
    <div className="relative mx-auto mt-[150px] flex flex-col justify-center overflow-x-hidden overflow-y-hidden md:mt-[214px]">
      {/* Desktop  Ellipse Background */}
      <div className="absolute 2xl:top-[170px] top-[150px]  md:flex hidden left-1/2 z-100  w-[2400px] -translate-x-1/2 -translate-y-1/2 bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] lg:h-[366px] h-[450px]"></div>

      {/* Mobile elipse Background  */}
<div className='absolute w-[564px] h-[163px] [clip-path:ellipse(50%_50%_at_50%_50%)] bg-black left-[-66px] top-[120px] z-500 md:hidden flex '></div>

      {/* Hero Content */}
      <div className="relative z-600 mx-auto max-w-[964px] text-center">
        <h1 className="font-lora text-[32px] leading-[40px] font-normal md:text-[64px] md:leading-[72px]">
          Use your Zapix.
        </h1>
        <h1 className="font-lora text-[32px] leading-[40px] font-normal md:text-[64px] md:leading-[72px]">
          Unlock real utility.
        </h1>
        <p className="mt-[16px] font-sans text-[18px] leading-[24px] font-normal text-[#8B8B8B] md:text-[20px]">
          Don't follow just "trending" tokens. Real value utility from real use.
          Right?
        </p>
        <div className="flex justify-center">
          <div className="mt-[54px] max-w-[222px] rounded-[16px] bg-white">
            <button className="w-[190px] cursor-pointer p-[16px] font-sans text-[16px] leading-[24px] font-bold text-black">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Picture Frame */}
      <HomePic />

   {/*Elipse desktop bellow */}
      <div className="md:flex  absolute 2xl:top-[960px] md:top-[800px] hidden left-1/2 z-0 w-[2400px] -translate-x-1/2 -translate-y-1/2 bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] lg:top-[800px] xl:top-[950px] h-[357px] xl:h-[450px]"></div>
 
      {/* Mobile elipse Background  */}
<div className='absolute top-[390px] w-[564px] h-[163px] [clip-path:ellipse(50%_50%_at_50%_50%)] bg-black left-[-66px] z-500 md:hidden flex '></div>


    </div>

  );
};

export default HeroSection;
