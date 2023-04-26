import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "../ProductsList/Product/Product";
const ProductSlider = ({ arr }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {arr.map((p) => (
        <SwiperSlide key={p.id} className="mt-6 cursor-grabbing">
          <Product course={p} display="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
