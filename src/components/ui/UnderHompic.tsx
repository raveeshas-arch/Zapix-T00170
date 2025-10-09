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
    <section className="mx-auto flex max-w-[1920px] justify-center">
      <div className="absolute top-150 flex flex-col gap-[30px] text-center md:top-230 lg:top-240 xl:top-260 2xl:top-[1170px] 2xl:flex-row 2xl:px-[115px]">
        {details.map((detail, index) => (
          <div key={index} className="relative max-w-[400px] sm:max-w-[554px]">
            <h1 className="font-lora text-[16px] leading-[32px] font-normal text-[#EBEBEB] lg:text-[24px]">
              {detail.topic}
            </h1>
            <p className="mt-[16px] max-w-[398px] px-[16px] font-sans text-[14px] leading-[24px] font-normal text-gray-500 sm:px-0 md:max-w-[544px] lg:text-[16px]">
              {detail.text}
            </p>

            {/* Decorative line for second and third cards on mobile, first and second on desktop */}
            {(index === 1 || index === 2 || index < details.length - 1) && (
              <>
                {/* Mobile horizontal line above the card - only for second and third cards */}
                {(index === 1 || index === 2) && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-[-12px] left-1/2 block h-0 w-[398px] -translate-x-1/2 opacity-100 2xl:hidden"
                    style={{
                      borderStyle: 'solid',
                      borderWidth: '2px 0 0 0',
                      borderImageSlice: 1,
                      borderImageSource:
                        'linear-gradient(90deg, rgba(56, 56, 56, 0) 0%, #383838 50%, rgba(56, 56, 56, 0) 100%)',
                    }}
                  />
                )}

                {/* Desktop vertical line between cards */}
                {index < details.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-[-70px] hidden h-0 w-[121px] -translate-y-1/2 rotate-[89.76deg] opacity-100 2xl:block"
                    style={{
                      borderStyle: 'solid',
                      borderWidth: '2px 0 0 0',
                      borderImageSlice: 1,
                      borderImageSource:
                        'linear-gradient(90deg, rgba(56, 56, 56, 0) 0%, #383838 50%, rgba(56, 56, 56, 0) 100%)',
                    }}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnderHompic;
