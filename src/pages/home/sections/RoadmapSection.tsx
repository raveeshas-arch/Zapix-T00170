import { useEffect, useRef, useState } from 'react';
import Title from '@/components/ui/Title';
import Road1 from '../../../assets/road1.webp';
import Road2 from '../../../assets/road2.webp';
import Road3 from '../../../assets/road3.webp';
import Road4 from '../../../assets/road4.webp';
import Road5 from '../../../assets/road5.webp';
import MobileRoadmap from '../../../components/ui/MobileRoadmap';

const RoadmapSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  type TimelineItem = {
    title: string;
    description: string;
    icon: string;
    side: 'left' | 'right';
  };

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    // Section observer to reset when leaving roadmap
    let sectionObserver: IntersectionObserver | null = null;
    if (sectionRef.current) {
      sectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            setVisibleItems([]);
          }
        },
        { threshold: 0.1 }
      );
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      sectionObserver?.disconnect();
    };
  }, []);

  const timelineData: TimelineItem[] = [
    {
      title: 'Launch & Foundation',
      description:
        'In the first phase, Zapix focuses on building its base. This includes creating the token, setting up the smart contract, and launching the official website along with the whitepaper. The community is also introduced through platforms like social media, blogs, and Discord.',
      icon: Road1,
      side: 'left',
    },
    {
      title: 'Platform Integration',
      description:
        'Next, Zapix starts connecting with partner platforms. Payment and reward features are introduced, and a community reward program begins to engage and grow the user base.',
      icon: Road2,
      side: 'right',
    },
    {
      title: 'Growth & Marketing',
      description:
        'In this phase, global marketing campaigns are launched to spread awareness. Zapix aims for more exchange listings and begins working with creators and platforms to grow its reach and value.',
      icon: Road3,
      side: 'left',
    },
    {
      title: 'Expansion & Utilities',
      description:
        'Zapix expands by launching a mobile app and introducing NFTs with exclusive digital content. It also begins supporting multiple blockchains to increase access and use.',
      icon: Road4,
      side: 'right',
    },
    {
      title: 'Future Development',
      description:
        'The final phase focuses on adding decentralized platform features. A DAO (community voting system) will be introduced, and regular updates will be made to grow the Zapix ecosystem in a smart and user-driven way.',
      icon: Road5,
      side: 'left',
    },
  ];

  return (
    <section ref={sectionRef} className="mx-auto max-w-[1920px]">
      <div className="mx-auto flex max-w-[1920px] flex-col justify-center">
        <Title
          title="Roadmap of Zapix"
          description="Our roadmap shows how we plan to build, expand, and improve. From launching the token and platform features to adding new tools like NFTs and mobile apps, each phase is made to bring more value, more users, and smarter digital experiences."
        />
      </div>

      <div className="mx-auto max-w-[1680px]">
        <div className="relative bg-transparent py-16 text-white">
          {/* Desktop Timeline */}
          <div className="relative mx-auto hidden px-[16px] lg:block">
            {/* Vertical dashed line */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-gray-500" />
            
            {/* Animated solid line that fills progressively */}
            <div
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 border-l-2 border-solid border-white transition-all duration-500 ease-out"
              style={{
                height: `${(visibleItems.length / timelineData.length) * 100}%`,
              }}
            />

            {/* Rows: each item is its own grid row to align dot and card */}
            <div className="flex flex-col gap-20">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`relative grid items-center transition-all duration-700 md:grid-cols-10 ${
                    visibleItems.includes(index)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                >
                  {item.side === 'left' ? (
                    <>
                      {/* Left card */}
                      <div
                        className={`z-10 max-w-[686px] rounded-[24px] p-[16px] transition-all duration-700 md:col-span-4 md:col-start-1 md:border-[1px] md:border-[#636363] ${
                          visibleItems.includes(index)
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="flex md:gap-[16px]">
                          <div className="rounded-full bg-white p-[4px]">
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="h-[45px] w-[45px] md:h-[24px] md:w-[24px]"
                            />
                          </div>
                          <h3 className="font-dmsans mb-2 hidden text-[18px] leading-[24px] font-bold md:flex">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-dmsans mt-[24px] hidden max-w-[654px] text-left text-[16px] leading-[24px] font-normal text-[#8B8B8B] md:flex">
                          {item.description}
                        </p>
                      </div>

                      {/* Center connector */}
                      <div className="relative md:col-span-2 md:col-start-5">
                        <span
                          className={`pointer-events-none absolute top-1/2 left-1/2 z-20 hidden border-t-4 border-white transition-all duration-500 lg:block xl:w-[90px] ${
                            visibleItems.includes(index)
                              ? 'w-[40px] opacity-100 xl:w-[90px]'
                              : 'w-0 opacity-0'
                          }`}
                          style={{
                            transform: 'translate(calc(-100% - 46.5px), -50%)',
                            transitionDelay: `${index * 200 + 300}ms`,
                          }}
                        />
                      </div>

                      {/* Right placeholder */}
                      <div className="md:col-span-4 md:col-start-7" />
                    </>
                  ) : (
                    <>
                      {/* Left placeholder */}
                      <div className="md:col-span-4 md:col-start-1" />

                      {/* Center connector */}
                      <div className="relative md:col-span-2 md:col-start-5">
                        <span
                          className={`pointer-events-none absolute top-1/2 left-1/2 z-20 hidden border-t-4 border-white transition-all duration-500 md:block xl:w-[90px] ${
                            visibleItems.includes(index)
                              ? 'w-[40px] opacity-100 xl:w-[90px]'
                              : 'w-0 opacity-0'
                          }`}
                          style={{
                            transform: 'translate(46.5px, -50%)',
                            transitionDelay: `${index * 200 + 300}ms`,
                          }}
                        />
                      </div>

                      {/* Right card */}
                      <div
                        className={`z-10 max-w-[686px] rounded-[24px] p-[16px] transition-all duration-700 md:col-span-4 md:col-start-7 md:border-[1px] md:border-[#636363] ${
                          visibleItems.includes(index)
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="flex md:gap-[16px]">
                          <div className="rounded-full bg-white p-[4px]">
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="h-[45px] w-[45px] md:h-[24px] md:w-[24px]"
                            />
                          </div>
                          <h3 className="font-dmsans mb-2 hidden text-[18px] leading-[24px] font-bold md:flex">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-dmsans mt-[24px] hidden max-w-[654px] text-left text-[16px] leading-[24px] font-normal text-[#8B8B8B] md:flex">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                  {/* Center dot aligned to the vertical timeline */}
                  <div
                    className={`absolute top-1/2 left-1/2 z-10 h-[17px] w-[16px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black bg-white transition-all duration-500 md:h-[35px] md:w-[35px] ${
                      visibleItems.includes(index)
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 150}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Roadmap */}
      <MobileRoadmap />
    </section>
  );
};

export default RoadmapSection;
