import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Swipers = ({ image1, image2 }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      spaceBetween={10} // Adjust the space between slides as needed
      slidesPerView={1} // Default number of slides to display
      breakpoints={{
        // Define responsive breakpoints here
        768: {
          slidesPerView: 1, // Display 2 slides on screens wider than 768px
        },
        1024: {
          slidesPerView: 1, // Display 3 slides on screens wider than 1024px
        },
      }}
    >
      <SwiperSlide>
        <img className='w-full' src={image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full'
          src={image2}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full'
          src={image1}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
