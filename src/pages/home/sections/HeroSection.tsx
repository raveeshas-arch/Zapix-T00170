import { motion } from 'framer-motion';
import HomePic from '@/components/ui/HomePic';

const HeroSection = () => {
  return (
    <div className="relative mx-auto mt-[150px] flex flex-col justify-center overflow-x-hidden overflow-y-hidden md:mt-[214px]">
      {/* Desktop Ellipse Background */}
      <motion.div
        className="absolute top-[150px] left-1/2 z-100 hidden h-[450px] w-[2400px] -translate-x-1/2 -translate-y-1/2 bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] md:flex lg:h-[366px] 2xl:top-[170px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Mobile Ellipse Background */}
      <motion.div
        className="absolute top-[120px] left-[-66px] z-500 flex h-[163px] w-[564px] bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] md:hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-600 mx-auto max-w-[964px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="font-lora text-[32px] leading-[40px] font-normal md:text-[64px] md:leading-[72px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Use your Zapix.
        </motion.h1>

        <motion.h1
          className="font-lora text-[32px] leading-[40px] font-normal md:text-[64px] md:leading-[72px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Unlock real utility.
        </motion.h1>

        <motion.p
          className="mt-[16px] font-sans text-[18px] leading-[24px] font-normal text-[#8B8B8B] md:text-[20px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Don't follow just "trending" tokens. Real value utility from real use. Right?
        </motion.p>

        <motion.div
          className="mt-[54px] flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
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
        className="absolute top-[800px] left-1/2 z-0 hidden h-[357px] w-[2400px] -translate-x-1/2 -translate-y-1/2 bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] md:flex lg:top-[800px] xl:top-[950px] xl:h-[450px] 2xl:top-[960px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Mobile Ellipse Background Below */}
      <motion.div
        className="absolute top-[390px] left-[-66px] z-500 flex h-[163px] w-[564px] bg-black [clip-path:ellipse(50%_50%_at_50%_50%)] md:hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};

export default HeroSection;
