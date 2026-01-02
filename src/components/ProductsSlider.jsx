import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import products from "../data/products";
import ProductCard from "./ProductCard";
import Services from "./Services";

function ProductsSlider() {
  return (
    <>
    <Services />
    <div className="relative my-16 w-full max-w-[900px] mx-auto overflow-visible px-4 md:px-0 md:pl-20">

      
      {/* LEFT ARROW */}
      <div className="swiper-prev hidden md:block absolute left-[-50px] top-1/2 z-10 cursor-pointer text-blue-600 text-4xl">
        ‹
      </div>

      {/* RIGHT ARROW */}
      <div className="swiper-next hidden md:block absolute right-[-50px] top-1/2 z-10 cursor-pointer text-blue-600 text-4xl">
        ›
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <ProductCard product={product} isLink={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}

export default ProductsSlider;
