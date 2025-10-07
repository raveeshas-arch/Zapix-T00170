import React from "react";
import Road1 from "../../assets/road1.webp"
import Road2 from "../../assets/road2.webp";
import Road3 from "../../assets/road3.webp";
import Road4 from "../../assets/road4.webp";
import Road5 from "../../assets/road5.webp";

type TimelineItem = {
  title: string;
  description: string;
  icon: string;
  side: "left" | "right";
};

const timelineData: TimelineItem[] = [
  {
    title: "Launch & Foundation",
    description:
      "In the first phase, Zapix focuses on building its base. This includes creating the token, setting up the smart contract, and launching the official website along with the whitepaper. The community is also introduced through platforms like social media, blogs, and Discord.",
    icon: Road1,
    side: "right",
  },
  {
    title: "Platform Integration",
    description:
      "Next, Zapix starts connecting with partner platforms. Payment and reward features are introduced, and a community reward program begins to engage and grow the user base.",
    icon: Road2,
    side: "left",
  },
  {
    title: "Growth & Marketing",
    description:
      "In this phase, global marketing campaigns are launched to spread awareness. Zapix aims for more exchange listings and begins working with creators and platforms to grow its reach and value.",
    icon: Road3,
    side: "right",
  },
  {
    title: "Expansion & Utilities",
    description:
      "Zapix expands by launching a mobile app and introducing NFTs with exclusive digital content. It also begins supporting multiple blockchains to increase access and use.",
    icon: Road4,
    side: "left",
  },
  {
    title: "Future Development",
    description:
      "The final phase focuses on adding decentralized platform features. A DAO (community voting system) will be introduced, and regular updates will be made to grow the Zapix ecosystem in a smart and user-driven way.",
    icon: Road5,
    side: "right",
  },
];

const RoadmapSection: React.FC = () => {
  return (
    <section className="relative flex justify-center bg-black py-20">
      <div className="relative w-full max-w-[1200px] px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-between my-12 ${
              item.side === "left" ? "flex-row-reverse" : ""
            }`}
          >
           

            {/* Content */}
            <div className="w-1/2 px-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            

            {/* Timeline Dot */}
            <div className="relative flex flex-col items-center">
              {/* Dashed connector (except last one) */}
              {index < timelineData.length - 1 && (
                <div className="absolute top-[100%] h-20 w-[2px] border-l-2 border-dashed border-white"></div>
              )}

              <div className="w-5 h-5 bg-white rounded-full border-2 border-black z-10"></div>
            </div>
               {/* Horizontal Line (alternating sides) */}
            <div
              className={`absolute w-12 h-[2px] bg-white ${
                index % 2 === 0 ? "left-125" : "right-125"
              }`}
            ></div>

            {/* Icon */}
            <div className="w-1/2 flex justify-center">
              <img 
                alt={item.title}
                className="w-[120px] h-[120px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
