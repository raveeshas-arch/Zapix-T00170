import { motion } from 'framer-motion';
import ConnectedFAQ from '@/components/ui/ConnectedFAQ';
import ConnectedImages from '@/components/ui/ConnectedImages';
import Title from '@/components/ui/Title';

const ConnectedSection = () => {
  return (
    <section className="overflow-hidden">
      {/* Title */}
      <motion.div
        className="flex flex-col justify-center px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title
          title="Connected by Zapix"
          description="Zapix builds a strong, friendly community where fans, creators, and users share ideas, support each other, and grow together. It's a space for learning, sharing, and making digital life better for everyone."
        />
      </motion.div>

      {/* Connected Images */}
      <motion.div
        className="mt-[40px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <ConnectedImages />
      </motion.div>

      {/* Connected FAQ */}
      <motion.div
        className="mx-auto mt-[84px] flex max-w-[1680px] flex-col justify-center gap-[50px] px-[16px] lg:flex-row xl:gap-[118px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        {/* Left Content */}
        <div className="items-left flex flex-col justify-center">
          <h1 className="font-lora text-center text-[24px] leading-[32px] font-normal text-[#FFFFFF] lg:text-left lg:text-[40px] lg:leading-[48px]">
            Connected by Zapix
          </h1>
          <p className="mt-[30px] max-w-[684px] text-center font-sans text-[16px] leading-[24px] font-normal text-[#8B8B8B] lg:text-left lg:text-[18px]">
            Got questions about Zapix? We're here to help! This FAQ page answers
            the most common questions about the Zapix token, its use, and how
            you can get started. Whether you're a beginner or an expert, you'll
            find useful answers here.
          </p>
        </div>

        {/* Right content */}
        <div>
          <ConnectedFAQ />
        </div>
      </motion.div>
    </section>
  );
};

export default ConnectedSection;