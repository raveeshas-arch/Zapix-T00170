// import { motion } from "framer-motion";
// import ImageCollage from '@/components/ui/ImageCollage';
// import Services from '@/components/ui/Services';
// import Title from '@/components/ui/Title';

// const ServicesSection = () => {
//   return (
//     <section className="overflow-hidden">
//       {/* Title with scroll animation */}
//       <motion.div
//         className="mx-auto max-w-[1920px] flex flex-col justify-center px-4 md:px-0"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <Title
//           title="Services of Zapix"
//           description="Zapix is designed with smart tokenomics to support real growth. It has a limited total supply, fair distribution, and strong utility. These features give real value to both holders and users, helping the ecosystem grow in a healthy and balanced way."
//         />
//       </motion.div>

//       {/* Image Collage with scroll animation */}
//       <motion.div
//         className="mt-[40px]"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//       >
//         <ImageCollage />
//       </motion.div>

//       {/* Services section */}
//       <motion.div
//         className="mt-[60px]"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//       >
//         <Services />
//       </motion.div>
//     </section>
//   );
// };

// export default ServicesSection;
import { motion } from "framer-motion";
import ImageCollage from '@/components/ui/ImageCollage';
import Services from '@/components/ui/Services';
import Title from '@/components/ui/Title';

const ServicesSection = () => {
  return (
    <section className="overflow-hidden">
      {/* Title with scroll animation */}
      <motion.div
        className="mx-auto w-full max-w-[1920px] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title
          title="Services of Zapix"
          description="Zapix is designed with smart tokenomics to support real growth. It has a limited total supply, fair distribution, and strong utility. These features give real value to both holders and users, helping the ecosystem grow in a healthy and balanced way."
        />
      </motion.div>

      {/* Image Collage with scroll animation */}
      <motion.div
        className="mt-10 w-full px-4 sm:px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ImageCollage />
      </motion.div>

      {/* Services section */}
      <motion.div
        className="mt-16 w-full px-4 sm:px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Services />
      </motion.div>
    </section>
  );
};

export default ServicesSection;

