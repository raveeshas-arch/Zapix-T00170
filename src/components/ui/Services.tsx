import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const services = [
    {
      title: 'Buy and Sell Comics',
      description:
        'Use Zapix tokens to buy your favorite digital comics quickly and safely. Creators can sell their comics and get paid easily.',
    },
    {
      title: 'Support Comic Creators',
      description:
        'Zapix lets fans support artists by sending tokens as tips or rewards. This helps creators keep making great stories.',
    },
    {
      title: 'Exclusive Content Access',
      description:
        'Get special comics, early releases, and bonus stories only available to Zapix token holders.',
    },
    {
      title: 'Secure and Transparent',
      description:
        'All transactions with Zapix are secure and recorded on the blockchain, making everything safe and fair.',
    },
    {
      title: 'Comic NFT Ownership',
      description:
        'Turn your favorite comics into NFTs and own rare digital editions. You can collect, trade, or sell them using Zapix.',
    },
    {
      title: 'Rewards and Bonuses',
      description:
        'Earn Zapix tokens as rewards when you read, share, or promote comics in the Zapix community.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-auto flex items-center justify-center">
      <div className="mx-auto mt-[32px] max-w-[1920px]">
        <div className="mx-auto grid grid-cols-1 justify-center gap-[24px] md:grid-cols-2 xl:max-w-[1680px] xl:grid-cols-3 px-[16px]">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-index={index}
              className={`max-w-[398px] rounded-[24px] border-[1px] border-[#636363] p-[16px] transition-all duration-600 ease-out 2xl:max-w-[544px] ${
                visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: visibleCards.includes(index)
                  ? `${index * 100}ms`
                  : '0ms',
              }}
            >
              <h3 className="font-sans text-[20px] leading-[24px] font-normal text-[#FFFFFF]">
                {service.title}
              </h3>
              <p className="font-dmsans mt-[16px] text-[16px] leading-[24px] font-normal text-[#8B8B8B]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
