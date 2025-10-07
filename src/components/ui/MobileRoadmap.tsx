
import Road1 from '../../assets/road1.webp';
import Road2 from '../../assets/road2.webp';
import Road3 from '../../assets/road3.webp';
import Road4 from '../../assets/road4.webp';
import Road5 from '../../assets/road5.webp';
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
    <div className='mt-[37px] md:hidden flex flex-col max-w-[398px] mx-auto gap-[16px]'>
       {RoadmapData.map((data,index)=>(
        <div key={index} className='p-[16px] border border-[#636363] rounded-[24px]'>
            <div className='flex gap-[12px]'>
                <div className='p-[4px] bg-white rounded-full'>
            <img src={data.icon} className='w-[24px] h-[24px] '/></div>
            <h1 className='font-sans font-bold text-[18px] leading-[24px] text-white'>{data.title} </h1>
            </div>
            <p className=' mt-[16px] font-sans font-normal text-[16px] leading-[24px] text-[#8B8B8B] max-w-[366px]'>{data.description}</p>
        </div>
       ))}
    </div>
  )
}

export default MobileRoadmap