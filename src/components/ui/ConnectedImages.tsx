import { useState } from 'react';
import Image1 from '../../assets/connect1.webp';
import Image2 from '../../assets/connect2.webp';
import Image3 from '../../assets/connect3.webp';
import Image4 from '../../assets/connect4.webp';
import Image5 from '../../assets/connect5.webp';
import Image6 from '../../assets/connect6.webp';

const ConnectedImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const details = [
    {
      title: 'Open and Friendly Space',
      src: Image1,
      description:
        'Everyone is welcome in the Zapix community. We create a safe space to talk, share, and learn about the token and its use.',
      url: 'service1',
    },
    {
      title: 'Social Media Connection',
      src: Image2,
      description:
        'Join our active community on platforms like Discord, Telegram, and Twitter to stay updated and chat with others.',
      url: 'service2',
    },
    {
      title: 'Creator & Fan Interaction',
      src: Image3,
      description:
        'Zapix brings artists and fans closer. Creators can get direct feedback, support, and ideas from the community.',
      url: 'service3',
    },
    {
      title: 'Community Events',
      src: Image4,
      description:
        'We host fun events like giveaways, contests, and AMA (Ask Me Anything) sessions to keep the community active and rewarded.',
      url: 'service4',
    },
    {
      title: 'Voting & Proposals',
      src: Image5,
      description:
        'Zapix holders will be able to vote on future updates, features, and changes — your voice will help shape Zapix.',
      url: 'service5',
    },
    {
      title: 'Community Growth Rewards',
      src: Image6,
      description:
        'Earn Zapix tokens by inviting friends, joining events, or helping others. We grow stronger when we grow together.',
      url: 'service6',
    },
  ];

  return (
    <div className="scrollbar-hide mx-auto flex max-w-[1680px] items-center justify-center gap-[12px] overflow-x-auto scroll-smooth bg-black px-4 py-10 lg:gap-[24px] lg:px-0">
      {details.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[24px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] lg:rounded-[35px] ${index === 0 ? 'ml-[150px] md:ml-10 lg:ml-150 xl:ml-50 2xl:ml-0' : ''} ${isActive || (index === 0 && activeIndex === 0) ? 'h-[284px] w-[189px] lg:h-[732px] lg:w-[615px]' : 'h-[293px] w-[55px] lg:h-[732px] lg:w-[149px]'}`}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className={`h-full w-full object-cover ${index % 2 === 0 ? 'object-right' : 'object-left'} rounded-[24px] transition-transform duration-700 ease-in-out lg:rounded-[35px] ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Full transparent overlay + text */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Full background overlay */}
              <div className="absolute inset-0 z-0 rounded-[24px] bg-[#00000085] transition-opacity duration-700 lg:rounded-[35px]"></div>

              {/* Centered text at bottom */}
              <div className="absolute right-0 left-0 z-10 mt-[87px] max-w-[168px] px-[10px] lg:bottom-[74px] lg:max-w-[553px] lg:px-8 lg:py-6">
                <h3 className="font-lora text-[16px] leading-[24px] font-normal text-white lg:text-[28px] lg:leading-[32px]">
                  {item.title}
                </h3>
                <p className="mt-[16px] font-sans text-[14px] leading-[20px] font-normal text-white lg:text-[16px] lg:leading-[24px]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConnectedImages;
