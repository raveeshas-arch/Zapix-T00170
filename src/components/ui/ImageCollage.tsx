import React from 'react';
import img1 from '../../assets/service1.webp'
import img2 from '../../assets/service2.webp'
import img3 from '../../assets/service3.webp'
import img4 from '../../assets/service4.webp'
import img5 from '../../assets/service5.webp'
import img6 from '../../assets/service6.webp'
import img7 from '../../assets/service7.webp'
import img8 from '../../assets/service8.webp'
import img9 from '../../assets/service9.webp'

const ImageCollage: React.FC = () => {
  return (
    <div className='max-w-[1680px] overflow-x-auto mx-auto mt-[68px]'>
      <div className='flex gap-[24px] justify-center'>

        <div className='flex gap-[24px]'>
          {/* First Image Grid */}
          <div className='flex flex-col mt-[117px] gap-[24px]'>
            <img src={img1} alt='serviceimage1' className='w-[260px] h-[268px] rounded-2xl animate-float-1'/>
            <img src={img2} alt='serviceimage2' className='w-[260px] h-[268px] rounded-2xl animate-float-2'/>
          </div>

          {/* Second Image Grid */}
          <div className='flex flex-col gap-[24px]'>
            <img src={img3} alt='serviceimage3' className='w-[260px] h-[268px] rounded-2xl animate-float-3'/>
            <img src={img4} alt='serviceimage4' className='w-[260px] h-[268px] rounded-2xl animate-float-1'/>
          </div>
        </div>

        {/* Third Image Grid */}
        <div className='flex gap-[24px] mt-[96px]'>
          <img src={img5} alt='serviceimage5' className='w-[260px] h-[268px] rounded-2xl animate-float-2'/>
          <img src={img6} alt='serviceimage6' className='w-[260px] h-[268px] rounded-2xl mt-[99px] animate-float-3'/>
          <img src={img7} alt='serviceimage7' className='w-[260px] h-[268px] rounded-2xl animate-float-1'/>
        </div>

        {/* Fourth Image Grid */}
        <div>
          <div className='flex flex-col gap-[24px]'>
            <img src={img8} alt='serviceimage8' className='w-[260px] h-[268px] rounded-2xl animate-float-2'/>
            <img src={img9} alt='serviceimage9' className='w-[260px] h-[268px] rounded-2xl animate-float-3'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
