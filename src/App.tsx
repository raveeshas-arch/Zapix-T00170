import { useState, useEffect, useMemo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUser, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import Logo from '/logo.webp';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('#'); // Home active by default

  const navLinks = useMemo(() => [
    { name: 'Home', link: '#' },
    { name: 'About Us', link: '#aboutus' },
    { name: 'Tokenomics', link: '#tokenomics' },
    { name: 'Services', link: '#services' },
    { name: 'Roadmap', link: '#roadmap' },
    { name: 'Community', link: '#community' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Blogs', link: '#blogs' },
  ], []);

  // Smooth scroll on click
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    if (link === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(link);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentPath(link);
    setIsMenuOpen(false);
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let found = false;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].link);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) {
            setCurrentPath(navLinks[i].link);
            found = true;
            break;
          }
        }
      }

      if (!found) setCurrentPath('#'); // Default to Home if at top
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set correct active link on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Blur Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-0 bg-black/20 backdrop-blur-sm lg:hidden" />
      )}

      {/* Desktop Navigation */}
      <div className="fixed top-0 right-0 left-0 z-50 mx-auto hidden max-w-[1920px] justify-between bg-black px-[16px] py-[16px] sm:px-[30px] lg:flex xl:px-[120px]">
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
              onClick={(e) => handleSmoothScroll(e, link.link)}
              className={`font-sans text-[16px] leading-[24px] font-normal text-white transition-all duration-300 ${
                currentPath === link.link
                  ? 'border-b-2 border-white'
                  : 'hover:border-b-2 hover:border-white/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Search & User */}
        <div className="flex items-center gap-[9px]">
          <div className="rounded-full border-[2px] border-white bg-black p-[11px]">
            <AiOutlineSearch className="h-[25px] w-[25px] text-white" />
          </div>
          <div className="rounded-full border-[2px] border-black bg-white p-[19px]">
            <HiOutlineUser className="h-[14px] w-[14px] text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-black/95 backdrop-blur-md lg:hidden">
        <div className="flex justify-between px-[20px] py-[16px]">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-[40px]" />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-[9px]">
            <div className="rounded-full border-[2px] border-white bg-black p-[11px]">
              <AiOutlineSearch className="h-[25px] w-[25px] text-white" />
            </div>
            <div className="rounded-full border-[2px] border-black bg-white p-[19px]">
              <HiOutlineUser className="h-[14px] w-[14px] text-black" />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full bg-white p-[13px] text-black transition-all duration-300 ease-in-out hover:scale-110"
            >
              {isMenuOpen ? (
                <HiOutlineXMark className="h-[25px] w-[25px] transition-transform duration-300 ease-in-out" />
              ) : (
                <HiOutlineBars3 className="h-[25px] w-[25px] transition-transform duration-300 ease-in-out" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`overflow-hidden px-[70px] transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'max-h-150 py-[16px] opacity-100'
              : 'max-h-0 py-0 opacity-0'
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              href={link.link}
              key={link.name}
              className={`block py-[12px] font-sans text-[16px] leading-[24px] font-normal text-white transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-gray-300 ${
                currentPath === link.link ? 'border-b-2 border-white' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={(e) => handleSmoothScroll(e, link.link)}
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
