import ImageCollage from '@/components/ui/ImageCollage';
import Services from '@/components/ui/Services';
import Title from '@/components/ui/Title';

const ServicesSection = () => {
  return (
    <div className="">
      <div className="mx-auto flex max-w-[1920px] flex-col justify-center">
        <Title
          title="Services of Zapix"
          description="Zapix is designed with smart tokenomics to support real growth. It has a limited total supply, fair distribution, and strong utility. These features give real value to both holders and users, helping the ecosystem grow in a healthy and balanced way."
        />
      </div>

      <ImageCollage />
      <Services />
    </div>
  );
};

export default ServicesSection;
