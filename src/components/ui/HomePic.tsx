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
    { img: Img6, alt: 'hero6' },
  ];

  return (
    <div className="-mt-7 flex gap-[16px]">
      {images.map((item, index) => (
        <img
          key={index}
          src={item.img}
          alt={item.alt}
          className=" max-h-[527px]  overflow-x-hidden"
        />
      ))}
    </div>
  );
};

export default HomePic;
