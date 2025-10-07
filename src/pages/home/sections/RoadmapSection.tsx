import Title from '@/components/ui/Title';
import Road1 from '../../../assets/road1.webp';
import Road2 from '../../../assets/road2.webp';
import Road3 from '../../../assets/road3.webp';
import Road4 from '../../../assets/road4.webp';
import Road5 from '../../../assets/road5.webp';
import MobileRoadmap from '../../../components/ui/MobileRoadmap';

const RoadmapSection = () => {
  type TimelineItem = {
    title: string;
    description: string;
    icon: string;
    side: 'left' | 'right';
  };

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
    <section className='max-w-[1920px] mx-auto  '>
      <div className="mx-auto flex max-w-[1920px] flex-col justify-center">
        <Title
          title="Roadmap of Zapix"
          description="Our roadmap shows how we plan to build, expand, and improve. From launching the token and platform features to adding new tools like NFTs and mobile apps, each phase is made to bring more value, more users, and smarter digital experiences."
        />
      </div>

      <div className='max-w-[1680px] mx-auto'>
        <div className="relative bg-black py-16 text-white">
          <div className=" mx-auto grid  md:grid-cols-9  gap-[16px]  px-[16px] ">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`col-span-4 rounded-[24px] p-[16px] md:border-[1px] md:border-[#636363]  ${
                  item.side === 'left'
                    ? 'md:col-start-1 col-start-3 text-right'
                    : 'col-start-6 text-left'
                }`}
              >
                <div className="flex md:gap-[16px] ">
                  <div className="rounded-full bg-white p-[4px]">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="md:h-[24px] md:w-[24px] w-[45px] h-[45px]"
                    />
                  </div>

                  <h3 className="font-dmsans mb-2  text-[18px] leading-[24px] font-bold md:flex hidden ">
                    {item.title}
                  </h3>
                </div>

                <p className="font-dmsans md:flex hidden mt-[24px]  max-w-[654px] text-left text-[16px] leading-[24px] font-normal text-[#8B8B8B] ">
                  {item.description}
                </p>

              </div>
            ))}


          

            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform border-r-2 border-dashed border-gray-500" />

            {/* Dots */}
            {timelineData.map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 md:h-[35px] md:w-[35px] h-[17px] w-[16px] -translate-x-1/2 transform rounded-full border-4 border-black bg-white"
                style={{ top: `${(index + 1) * 20}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Roadmap */}

      <MobileRoadmap />
    </section>
  );
};

export default RoadmapSection;
