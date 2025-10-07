import Img1 from '../../assets/hero1.webp';
import Img2 from '../../assets/hero2.webp';
import Img3 from '../../assets/hero3.webp';
import Img4 from '../../assets/hero4.webp';
import Img5 from '../../assets/hero5.webp';
import Img6 from '../../assets/hero6.webp';

const HomePic = () => {
  const images = [
    { img: Img1, alt: 'hero1' },
    { img: Img2, alt: 'hero2' },
    { img: Img3, alt: 'hero3' },
    { img: Img4, alt: 'hero4' },
    { img: Img5, alt: 'hero5' },
    { img: Img1, alt: 'hero6' },
  ];

  return (
    <div className="relative  overflow-hidden w-full max-w-[1920px] mx-auto">
      <div className="animate-marquee-alternate gap-[16px]">
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={image.img}
              alt={image.alt}
              className="xl:w-[351px] xl:h-[527px] w-[150px] h-[167px] md:w-[250px] md:h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePic;
