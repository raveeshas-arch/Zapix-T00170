import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi2';
import Logo from '/logo.webp';

const NavigationBar = () => {
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
    <div className="mx-auto flex max-w-[1920px] justify-between bg-black px-[120px] py-[16px]">
      {/* Logo */}
      <div className="">
        <img src={Logo} alt="Logo" className=" " />
      </div>

      {/* Nav Items */}
      <nav className="flex items-center gap-[24px] py-[20px]">
        {navLinks.map((link) => (
          <a
            href={link.link}
            key={link.name}
            className="font-sans text-[16px] leading-[24px] font-normal text-white"
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
  );
};

export default NavigationBar;
