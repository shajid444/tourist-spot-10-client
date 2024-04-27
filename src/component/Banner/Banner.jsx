import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Banner = () => {
    return (
        <div className=''>
            <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={30}
        slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='h-96 object-cover'  src="https://i.ibb.co/MZTH0Vq/federica-bisso-6o3sh-N1-NPM-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 object-cover' src="https://i.ibb.co/qNKpm5x/riashat-rafat-Ph5-VL5-Tilto-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 object-cover' src="https://i.ibb.co/gMjFZqv/souhardya-saha-1sm-BCg-0-IX4-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 object-cover' src="https://i.ibb.co/yfDdNx0/amjad-rana-Mr-KPi-yaj-C0-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 object-cover' src="https://i.ibb.co/VgDtHwn/ashraful-islam-z-Zn-l-ODGCms-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 object-cover' src="https://i.ibb.co/zmX6gDG/andreas-brucker-g5-Uh7n-P60-FA-unsplash.jpg" alt="" /></SwiperSlide>
        ...
      </Swiper>
        </div>
       
       
    );
};

export default Banner;