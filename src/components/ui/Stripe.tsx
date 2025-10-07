import Marquee from 'react-fast-marquee';

const Stripe = () => {
  return (
    <Marquee>
      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-[38px] whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, index) => (
            <h1
              key={index}
              className="font-lora flex items-center text-[20px] leading-[28px] font-bold text-[#6060605C] uppercase md:text-[32px] md:leading-[48px]"
            >
              WELCOME TO ZAPIX
            </h1>
          ))}
        </div>
      </div>
    </Marquee>
  );
};

export default Stripe;
