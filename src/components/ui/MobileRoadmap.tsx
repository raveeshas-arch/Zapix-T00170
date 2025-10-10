import Road1 from '../../assets/road1.webp';
import Road2 from '../../assets/road2.webp';
import Road3 from '../../assets/road3.webp';
import Road4 from '../../assets/road4.webp';
import Road5 from '../../assets/road5.webp';
import Chart from './Chart';

const MobileRoadmap = () => {
  type RoadmapIcons = {
    title: string;
    description: string;
    icon: string;
  };

  const RoadmapData: RoadmapIcons[] = [
    {
      title: 'Launch & Foundation',
      description:
        'In the first phase, Zapix focuses on building its base. This includes creating the token, setting up the smart contract, and launching the official website along with the whitepaper. The community is also introduced through platforms like social media, blogs, and Discord.',
      icon: Road1,
    },
    {
      title: 'Platform Integration',
      description:
        'Next, Zapix starts connecting with partner platforms. Payment and reward features are introduced, and a community reward program begins to engage and grow the user base.',
      icon: Road2,
    },
    {
      title: 'Growth & Marketing',
      description:
        'In this phase, global marketing campaigns are launched to spread awareness. Zapix aims for more exchange listings and begins working with creators and platforms to grow its reach and value.',
      icon: Road3,
    },
    {
      title: 'Expansion & Utilities',
      description:
        'Zapix expands by launching a mobile app and introducing NFTs with exclusive digital content. It also begins supporting multiple blockchains to increase access and use.',
      icon: Road4,
    },
    {
      title: 'Future Development',
      description:
        'The final phase focuses on adding decentralized platform features. A DAO (community voting system) will be introduced, and regular updates will be made to grow the Zapix ecosystem in a smart and user-driven way.',
      icon: Road5,
    },
  ];

  return (
    <div className="mx-auto mt-[37px] flex sm:max-w-[398px] max-w-[350px] flex-col gap-[16px] lg:hidden">
      <Chart />
      {RoadmapData.map((data, index) => (
        <div
          key={index}
          className="rounded-[24px] border border-[#636363] p-[16px]"
        >
          <div className="flex gap-[12px]">
            <div className="rounded-full bg-white p-[4px]">
              <img src={data.icon} className="h-[24px] w-[24px]" />
            </div>
            <h1 className="font-sans text-[18px] leading-[24px] font-bold text-white">
              {data.title}
            </h1>
          </div>
          <p className="mt-[16px] sm:max-w-[366px] max-w-[350px] font-sans text-[16px] leading-[24px] font-normal text-[#8B8B8B]">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MobileRoadmap;
