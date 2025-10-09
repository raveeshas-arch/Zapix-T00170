import { motion } from "framer-motion";
import HomePic from '@/components/ui/HomePic';

const HeroSection = () => {

  // Variants for text animation
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variant for buttons
  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5, ease: "easeOut" } },
  };

  // Variant for floating ellipses
  const floatVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut", yoyo: Infinity } },
  };

  return (
    <div className="relative mx-auto mt-[150px] flex flex-col justify-center overflow-x-hidden overflow-y-hidden md:mt-[214px]">

      {/* Desktop Ellipse Background */}
      <motion.div
        className="absolute 2xl:top-[170px] top-[150px] md:flex hidden left-1/2 z-100 w-[2400px] -translate-x-1/2 -translate-y-1/2 
                    bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] lg:h-[366px] h-[450px]"
        variants={floatVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Mobile Ellipse Background */}
      <motion.div
        className='absolute w-[564px] h-[163px] [clip-path:ellipse(50%_50%_at_50%_50%)] bg-black left-[-66px] top-[120px] z-500 md:hidden flex'
        variants={floatVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-600 mx-auto max-w-[964px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        <motion.h1 className="font-lora text-[32px] leading-[40px] font-normal md:text-[64px] md:leading-[72px]" variants={fadeUpVariant}>
          Use your Zapix.
        </motion.h1>
        <motion.h1 className="font-lora text-[32px] leading-[40px] font-normal md:text-[64px] md:leading-[72px]" variants={fadeUpVariant}>
          Unlock real utility.
        </motion.h1>
        <motion.p className="mt-[16px] font-sans text-[18px] leading-[24px] font-normal text-[#8B8B8B] md:text-[20px]" variants={fadeUpVariant}>
          Don't follow just "trending" tokens. Real value utility from real use. Right?
        </motion.p>

        <motion.div className="flex justify-center mt-[54px]" variants={buttonVariant}>
          <div className="max-w-[222px] rounded-[16px] bg-white">
            <button className="w-[190px] cursor-pointer p-[16px] font-sans text-[16px] leading-[24px] font-bold text-black">
              Join Now
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Picture Frame */}
      <HomePic />

      {/* Desktop Ellipse Background Below */}
      <motion.div
        className="md:flex absolute 2xl:top-[960px] md:top-[800px] hidden left-1/2 z-0 w-[2400px] -translate-x-1/2 -translate-y-1/2 
                    bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] lg:top-[800px] xl:top-[950px] h-[357px] xl:h-[450px]"
        variants={floatVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Mobile Ellipse Background Below */}
      <motion.div
        className='absolute top-[390px] w-[564px] h-[163px] [clip-path:ellipse(50%_50%_at_50%_50%)] bg-black left-[-66px] z-500 md:hidden flex'
        variants={floatVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

    </div>
  );
};

export default HeroSection;
