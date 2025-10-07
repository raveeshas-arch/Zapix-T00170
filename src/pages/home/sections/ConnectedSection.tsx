import ConnectedFAQ from '@/components/ui/ConnectedFAQ';
import ConnectedImages from '@/components/ui/ConnectedImages';
import Title from '@/components/ui/Title';

const ConnectedSection = () => {
  return (
    <section>
      {/* Title */}
      <div className="flex flex-col justify-center ">
        <Title
          title="Connected by Zapix"
          description="Zapix builds a strong, friendly community where fans, creators, and users share ideas, support each other, and grow together. It's a space for learning, sharing, and making digital life better for everyone."
        />
      </div>

      {/* Connected Images */}
      <div>
        <ConnectedImages />
      </div>

      {/* Connected FAQ */}
      <div className="mx-auto mt-[84px] px-[16px] flex max-w-[1680px] flex-col justify-center xl:gap-[118px] gap-[50px] lg:flex-row">
        {/* Left Content */}
        <div className="items-left flex flex-col justify-center ">
          <h1 className="font-lora text-[24px] lg:text-[40px]  lg:leading-[48px] leading-[32px] font-normal text-[#FFFFFF] lg:text-left text-center">
            Connected by Zapix
          </h1>
          <p className="mt-[30px] max-w-[684px] font-sans  text-[16px] lg:text-[18px] leading-[24px] font-normal text-[#8B8B8B] lg:text-left text-center">
            Got questions about Zapix? We're here to help! This FAQ page answers
            the most common questions about the Zapix token, its use, and how
            you can get started. Whether you're a beginner or an expert, you'll
            find useful answers here.
          </p>
        </div>

        {/*Right content */}
        <div>
          <ConnectedFAQ />
        </div>
      </div>
    </section>
  );
};

export default ConnectedSection;
