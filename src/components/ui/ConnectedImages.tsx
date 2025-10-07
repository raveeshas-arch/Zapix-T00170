import { useState } from 'react';
import Image1 from '../../assets/connect1.webp';
import Image2 from '../../assets/connect2.webp';
import Image3 from '../../assets/connect3.webp';
import Image4 from '../../assets/connect4.webp';
import Image5 from '../../assets/connect5.webp';
import Image6 from '../../assets/connect6.webp';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const ConnectedImages = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex  items-center justify-center overflow-hidden mt-[128px]">

      {/* --- Desktop layout --- */}
      <div className="relative z-10 hidden h-[820px] w-[1680px]  gap-[24px] md:flex  py-[44px] px-[100px]">
        {images.map((src, index) => {
          const isExpanded =
            hoveredIndex === index || (hoveredIndex === null && index === 0);

          return (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-[35px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isExpanded ? 'flex-[2.8]' : 'flex-[0.6]'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
             
             
              <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-black">
                <img
                  src={src}
                  alt={`image-${index}`}
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    isExpanded
                      ? ' brightness-110'
                      : ' brightness-90'
                  }`}
                />

                {/* Overlay text on first */}
                {index === 0 && (
                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h2 className="mb-2 text-2xl font-semibold">
                      Open and Friendly Space
                    </h2>
                    <p className="text-sm opacity-80">
                      Everyone is welcome in the Zapix community. We create a
                      safe space to talk, share, and learn about the token and
                      its use.
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Mobile Slider layout --- */}
      <div className="flex md:hidden relative z-10 gap-4 w-full px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[280px] h-[420px] snap-center rounded-[28px] overflow-hidden bg-black"
          >
            <div className="absolute inset-0 p-[2px] rounded-[28px] " />
            <div className="relative w-full h-full rounded-[26px] overflow-hidden">
              <img
                src={src}
                alt={`mobile-image-${index}`}
                className="w-full h-full object-cover"
              />

              {/* Optional small overlay for first */}
              {index === 0 && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h2 className="text-lg font-semibold mb-1">
                    Open and Friendly Space
                  </h2>
                  <p className="text-xs opacity-80">
                    Everyone is welcome in the Zapix community.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectedImages;
