import { motion } from "framer-motion";

const ContactSection = () => {
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Tokenomics', link: '/tokenomics' },
    { name: 'Services', link: '/services' },
    { name: 'Roadmap', link: '/roadmap' },
    { name: 'Community', link: '/community' },
    { name: 'FAQ', link: '/faq' },
    { name: 'Blogs', link: '/blogs' },
  ];

  return (
    <motion.section
      className="mx-auto mt-30 max-w-[1920px] px-[16px] 3xl:px-0 pb-[40px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-[1680px] justify-center rounded-[24px] border-[1px] border-[#636363] lg:px-[57px] px-[23px] pt-[36px] pb-[21px] 3xl:pt-[79px] 3xl:pb-[135px]">
        <div className="flex flex-col 3xl:flex-row justify-between gap-[30px] 3xl:gap-[88px]">
          {/* Left Content */}
          <div>
            <h1 className="font-lora lg:max-w-[766px] lg:text-[40px] lg:leading-[48px] text-[28px] leading-[32px] font-normal text-[#FFFFFF] max-w-[364px] lg:text-left text-center">
              Zapix fuels creativity with smart tools and real rewards — for
              fans and artists.
            </h1>
            <p className="mt-[22px] font-sans text-[18px] leading-[24px] font-normal lg:text-[#8B8B8B] text-white lg:text-left text-center">
              Modern | Fast | Connected
            </p>
          </div>

          {/* Right Content */}
          <div className="px-auto flex max-w-[712px] flex-col">
            {/* Nav Items */}
            <nav className="flex items-center lg:py-[20px] gap-[24px] lg:flex-row flex-col">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.link}
                  className="font-sans text-[16px] leading-[24px] font-normal text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="lg:mt-0 mt-[30px] flex flex-col gap-[8px]">
              <motion.h1
                className="lg:text-left text-center font-sans text-[18px] leading-[24px] font-normal lg:text-[#8B8B8B] text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Contact: support@zapix.io
              </motion.h1>
              <motion.h1
                className="lg:text-left text-center font-sans text-[18px] leading-[24px] font-normal lg:text-[#8B8B8B] text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                Follow Us: Twitter | Discord | Telegram
              </motion.h1>
              <motion.h1
                className="lg:text-right text-center font-sans text-[18px] leading-[24px] font-normal lg:text-[#8B8B8B] text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                Zapix © 2025 – All Rights Reserved
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
