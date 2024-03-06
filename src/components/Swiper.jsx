// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/scc/autoplay";

import image from "../../public/assets/Image.png";
import image2 from "../../public/assets/Image2.png";
import image3 from "../../public/assets/Image3.png";
import image4 from "../../public/assets/Image4.png";
import image5 from "../../public/assets/Image5.png";

export const SwiperComp = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="" />
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
        </SwiperSlide>
      </SwiperSlide>
    </Swiper>
  );
};
