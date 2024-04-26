import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Banner = () => {
    return (
        <div className='ml-10'>
            <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='h-96'  src="https://i.ibb.co/x7nHCdc/derek-thomson-a168-At-RF6-A-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://i.ibb.co/FKwXQky/christopher-jolly-Gqb-U78bd-JFM-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://i.ibb.co/F8srVLq/christian-gabele-4-Tn19-NVKUW8-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://i.ibb.co/84Xgn5B/alexander-andrews-A3-DPhh-AL6-Zg-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://i.ibb.co/LdBt4Mg/mika-baumeister-PL7-K02i4s9g-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://i.ibb.co/cJxgD7n/april-pethybridge-n-N28-Pj-FOOLI-unsplash.jpg" alt="" /></SwiperSlide>
        ...
      </Swiper>
        </div>
       
       
    );
};

export default Banner;