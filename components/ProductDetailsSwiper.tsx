'use client'
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';

export default function ProductSwiper (){
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    return (
    <>
      <Swiper loop={true} spaceBetween={12} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]} className="productSwiper rounded-2xl mb-3 group">
        <SwiperSlide>
          <img className="w-full h-full" src="/images/productDetails/cover.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="/images/productDetails/thumb1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="/images/productDetails/thumb2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="/images/productDetails/thumb3.png" />
        </SwiperSlide>
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={12} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="productSwiperthumb">
        <SwiperSlide className="rounded-lg">
          <img className="rounded-lg" src="/images/productDetails/cover.png" />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img className="rounded-lg" src="/images/productDetails/thumb1.png" />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img className="rounded-lg" src="/images/productDetails/thumb2.png" />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img className="rounded-lg" src="/images/productDetails/thumb3.png" />
        </SwiperSlide>
      </Swiper>
    </>
    )
}