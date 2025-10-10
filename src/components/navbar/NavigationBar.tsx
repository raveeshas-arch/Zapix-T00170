import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi2';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import Logo from '/logo.webp';
import { motion } from 'framer-motion';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'aboutus',
        'tokenomics',
        'services',
        'roadmap',
        'community',
        'faq',
        'blogs',
      ];
      const scrollPosition = window.scrollY + 100;

      let current = 'Home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          current =
            section === 'aboutus'
              ? 'About Us'
              : section.charAt(0).toUpperCase() + section.slice(1);
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', link: '#' },
    { name: 'About Us', link: '#aboutus' },
    { name: 'Tokenomics', link: '#tokenomics' },
    { name: 'Services', link: '#services' },
    { name: 'Roadmap', link: '#roadmap' },
    { name: 'Community', link: '#community' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Blogs', link: '#blogs' },
  ];

  return (
    <>
      {/* Blur Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-0 bg-black/20 backdrop-blur-sm lg:hidden" />
      )}

      {/* Desktop Navigation */}
      <div className="fixed top-0 right-0 left-0 z-500000 mx-auto hidden max-w-[1920px] justify-between bg-black px-[16px] py-[16px] sm:px-[30px] lg:flex xl:px-[120px]">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        {/* Nav Items */}
        <nav className="flex items-center gap-[15px] py-[20px] xl:gap-[24px]">
          {navLinks.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className={`relative font-sans text-[16px] leading-[24px] font-normal text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:text-gray-300 ${
                link.name === activeSection
                  ? 'after:w-full'
                  : 'after:w-0 hover:after:w-full'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Search & User */}
        <div className="flex items-center gap-[9px]">
          <motion.div
            className="cursor-pointer rounded-full border-[2px] border-white bg-black p-[11px]"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <AiOutlineSearch className="h-[25px] w-[25px] text-white" />
          </motion.div>
          <motion.div
            className="cursor-pointer rounded-full border-[2px] border-black bg-white p-[19px]"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineUser className="h-[14px] w-[14px] text-black" />
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-0 right-0 left-0 z-5000000 bg-black backdrop-blur-md lg:hidden">
        <div className="flex justify-between px-[20px] py-[16px]">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-[40px]" />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-[9px]">
            <motion.div
              className="cursor-pointer rounded-full border-[2px] border-white bg-black p-[11px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <AiOutlineSearch className="h-[25px] w-[25px] text-white" />
            </motion.div>
            <motion.div
              className="cursor-pointer rounded-full border-[2px] border-white bg-black p-[19px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <HiOutlineUser className="h-[14px] w-[14px] text-white" />
            </motion.div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full bg-white p-[13px] text-black transition-all duration-300 ease-in-out hover:scale-110"
            >
              {isMenuOpen ? (
                <HiOutlineXMark className="h-[25px] w-[25px] transition-transform duration-300 ease-in-out " />
              ) : (
                <HiOutlineBars3 className="h-[25px] w-[25px] transition-transform duration-300 ease-in-out" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`overflow-hidden px-[70px]  transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'max-h-150 py-[16px]  opacity-100'
              : 'max-h-0 py-0 opacity-0'
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              href={link.link}
              key={link.name}
              className={`relative block py-[22px] text-center
              font-sans text-[16px] leading-[24px] font-normal text-white transition-all duration-300 ease-in-out after:absolute after:bottom-[8px] after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:translate-x-2 hover:text-gray-300 ${
                link.name === activeSection
                  ? 'after:w-full'
                  : 'after:w-0 hover:after:w-full'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
