'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide} from "swiper/react";
type swiperProps ={
    speed?:number,
    spaceBetween? : number,
    slidesPerView? : any,
    delay ?: number,
    autoplay?: boolean,
    navigation?: boolean,
    pagination?:boolean,
    ceteredSlides?:boolean,
    children?: React.ReactNode;
    className?:string;
    breakpoints?:any
}
export default function SwiperComponent ({breakpoints, className="", autoplay=true, speed=800, ceteredSlides=true, spaceBetween=30, slidesPerView=1,delay=3000, navigation=true, pagination=true, children}:swiperProps){
    return (
        <Swiper 
        speed={speed}
        spaceBetween={spaceBetween} 
        slidesPerView={slidesPerView}
        
        autoplay={autoplay?{
            delay: delay,
            disableOnInteraction: false, 
        }:false}
        pagination={pagination?{
          clickable: true,
        }:false}
        navigation={navigation}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
        className={`${className}`}>
            {children}
        </Swiper>

    )
}