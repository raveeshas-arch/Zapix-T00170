const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto flex max-w-[1920px] flex-col justify-center">
      <h1 className="font-lora mt-[84px] text-center text-[24px] leading-[48px] font-normal md:text-[40px]">
        {title}
      </h1>
      <p className="mt-[24px] max-w-[398px] px-[16px] text-center font-sans text-[15px] leading-[24px] font-normal text-[#8B8B8B] sm:max-w-[1680px] md:text-[18px]">
        {description}
      </p>
    </div>
  );
};

export default Title;
