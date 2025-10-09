import React, { useState } from 'react';
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
    <div className="flex justify-center items-center gap-[24px] overflow-x-auto py-10 px-4 lg:px-0 bg-black">
      {details.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative overflow-hidden rounded-[35px] cursor-pointer flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
            ${isActive ? "w-[615px] h-[732px]" : "w-[149px] h-[732px]"}`}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className={`w-full h-full object-cover rounded-[35px] transition-transform duration-700 ease-in-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />

            {/* Full transparent overlay + text */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Full background overlay */}
              <div className="absolute inset-0 bg-[#00000085] rounded-[35px] z-0 transition-opacity duration-700"></div>

              {/* Centered text at bottom */}
              <div className=" z-10 px-8 py-6 max-w-[553px] absolute bottom-[74px] left-0 right-0">
                <h3 className="font-lora font-normal text-[28px] leading-[32px] text-white">
                  {item.title}
                </h3>
                <p className="font-sans font-normal text-[16px] leading-[24px] text-white mt-[16px]">
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