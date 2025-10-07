

const UnderHompic = () => {
  const details = [
    {
      topic: 'Smart & Easy Technology',
      text: "Zapix is a smart digital token made to help everyone — even beginners — use digital tools easily. It's built to be fast, safe, and works well with many apps and services.",
    },
    {
      topic: 'Simple Payments & Rewards',
      text: 'With Zapix, users can make digital payments, earn rewards, and enjoy online services without needing deep crypto knowledge.',
    },
    {
      topic: 'A Fair Digital Future',
      text: 'Zapix supports a future where smart tokens make life easier. We believe in a digital world that is open, fair, and simple for all to join.',
    },
  ];

  return (
    <section className="mx-auto max-w-[1920px] flex justify-center">
      <div className="absolute 2xl:top-[1170px] top-150 md:top-230 lg:top-240 xl:top-260 flex flex-col  gap-[30px] text-center 2xl:flex-row 2xl:px-[115px]">
        {details.map((detail, index) => (
          <div key={index} className="max-w-[400px] sm:max-w-[554px]">
            <h1 className="font-lora lg:text-[24px] text-[16px]  leading-[32px] font-normal text-[#EBEBEB]">
              {detail.topic}
            </h1>
            <p className="mt-[16px] font-sans lg:text-[16px] text-[14px] leading-[24px] font-normal text-gray-500 md:max-w-[544px] max-w-[398px] px-[16px] sm:px-0">
              {detail.text}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default UnderHompic;
