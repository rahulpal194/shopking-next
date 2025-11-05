'use client'
import SwiperComponent from "@/components/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import categories from '@/json/category.json'
import products from '@/json/products.json'
import benefits from '@/json/benefits.json'
import brands from '@/json/brands.json'
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useGetcategoryQuery, useGetpromotionQuery, useGetsliderQuery } from "@/store/api/authapi";
import SkeletonLoading from "@/components/SkeletonLoading";

export default function Home() {
    const { data: sliderdata, error, isLoading: sliderloading } = useGetsliderQuery()
    const { data: categorydata , isLoading: categoryloading} = useGetcategoryQuery()
    const { data: promotiondata , isLoading: promotionloading} = useGetpromotionQuery()
    const slides = sliderdata ?? [];
    const categories = categorydata ?? []
    const promotion = promotiondata ?? []
    console.log(promotion)
    return (
      <>
        {/* <!--===============================
                HERO PART START       
        =================================--> */}
         <section className="container mb-8 sm:mb-12 md:mb-20 group">
            {sliderloading ? (
                <SkeletonLoading width="100%" height="400px"/>
                ) : (
                <SwiperComponent slidesPerView={1} spaceBetween={24} speed={2500} navigation pagination delay={2000}>
                     {slides.data.map((slide: any, i: number) => (
                       <SwiperSlide key={slide.id || i}>
                         <Link href={slide.link || "#"}>
                           <img
                             src={slide.image || "/images/hero/slider1.png"}
                             alt={slide.title || ""}
                             className="w-full h-auto object-cover rounded-lg"
                           />
                         </Link>
                       </SwiperSlide>
                     ))}
                 </SwiperComponent>
            )}
         </section>
        {/* <!--===============================
                HERO PART START       
        =================================--> */}

        {/* <!--===============================
                CATEGORY PART START       
        =================================--> */}
        <section className=" sm:mb-12">
            <div className="container">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold -mb-6 sm:-mb-10">
                    Browse by Categories
                </h2>
                <SwiperComponent
                    slidesPerView={6}
                    pagination={false}
                    spaceBetween={24}
                    speed={1000} 
                    autoplay={false}
                    navigation={true}
                    className="navigate-swiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                            loop: true,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                            loop: true,
                        },
                        900: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                            loop: true,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 24,
                            loop: false,
                        }
                        }}>
                            {categoryloading ? (
                                Array.from({ length: 6 }).map((_, index) => (
                                    <SwiperSlide key={`skeleton-${index}`} className="rounded-2xl shadow-category group">
                                        <SkeletonLoading height="160px" width="100%"/>
                                    </SwiperSlide>
                                ))
                            ) : (
                            categories.data.map((category: any) => (
                                <SwiperSlide key={category.id || category.name} className="rounded-2xl shadow-category group">
                                    <Link href={`/category/${category.slug || category.id}`}>
                                        <img className="max-sm:h-16 w-auto rounded-tl-2xl rounded-tr-2xl" src={category.thumb} alt={category.name}/>
                                        <span className="text-sm sm:text-xl font-medium capitalize text-center py-1 sm:py-2 px-3 overflow-hidden whitespace-nowrap text-ellipsis block rounded-bl-lg sm:rounded-bl-2xl rounded-br-lg sm:rounded-br-2xl group-hover:text-primary">
                                            {category.name}
                                        </span>
                                    </Link>
                                </SwiperSlide>
                            )))}
                </SwiperComponent>
            </div>
        </section>
        {/* <!--===============================
                CATEGORY PART START       
        =================================--> */}

        {/* <!--===============================
                PROMOTION PART START       
        =================================--> */}
        <section className="container mb-20">
            <div className="grid sm:grid-cols-3 gap-6">
                {
                    promotionloading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <SwiperSlide key={`skeleton-${index}`} className="rounded-2xl shadow-category group">
                                <SkeletonLoading height="229px" width="350px"/>
                            </SwiperSlide>
                        ))
                    ):
                    (
                        promotiondata.data.map((data:any)=>(
                            <img key={data.id} src={data.cover}/>
                        ))
                    )
                }
            </div>
        </section>
        {/* <!--===============================
                PROMOTION PART START       
        =================================--> */}

        {/* <!--===============================
            TRENDY COLLETION PART START       
        =================================--> */}
        <section className="container mb-20">
            <h2 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-6">
               Trendy Collections
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {products.slice(0,8).map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
        {/* <!--===============================
            TRENDY COLLETION PART END    
        =================================--> */}

        {/* <!--===============================
                PROMOTION PART START       
        =================================--> */}
        <section className="container mb-20">
            <div className="max-h-[400px] w-full">
                <img src="/images/promotion/promotion4.png" alt="" />
            </div>
        </section>
        {/* <!--===============================
                PROMOTION PART END       
        =================================--> */}

        {/* <!--===============================
               POPULAR PRODUCT PART START       
        =================================--> */}
        <section className="container mb-20">
            <div className="flex flex-wrap gap-2 justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-4xl font-bold ">Most Popular</h2>
                <Link href={'/product'} className="see-more-btn">See All Collection</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {products.slice(6,14).map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
        {/* <!--===============================
              POPULAR PRODUCT PART END    
        =================================--> */}

        {/* <!--===============================
                 FLASH SALE PART START       
        =================================--> */}
        <section className="container mb-20">
            <div className="flex flex-wrap gap-2 justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-4xl font-bold ">Flash Sale</h2>
                <Link href={'/product'} className="see-more-btn">See All Collection</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {products.filter((product)=>product.flash_sale == true).slice(0,8).map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
        {/* <!--===============================
                 FLASH SALE PART END    
        =================================--> */}

        {/* <!--===============================
              POPULAR BRAND PART START    
        =================================--> */}
        <section className="">
           <div className="container">
                <h2 className="text-xl sm:text-4xl font-bold -mb-6 sm:-mb-10"> Popular Brands</h2>
                <SwiperComponent slidesPerView={6} autoplay={false} pagination={false} spaceBetween={24} speed={1000} navigation={true} className="navigate-swiper"
                 breakpoints={{
                         0: {
                            slidesPerView: "auto",
                            spaceBetween: 12,
                            loop: true,
                        },
                        900: {
                            slidesPerView: "auto",
                            spaceBetween: 16,
                            loop: true,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 24,
                            
                        }
                    }}>
                    {brands.map((brand)=>(
                    <SwiperSlide className="!w-fit rounded-2xl shadow-category group">
                        <div className="h-[168px] aspect-square w-full rounded-2xl shadow-xs group border border-gray-100">
                            <figure className="w-full h-[120px] flex items-center justify-center aspect-square">
                                <img src={brand.img} alt="brand" className="w-14"/>
                            </figure>
                            <span className="text-sm sm:text-lg font-medium capitalize text-center pb-3 block group-hover:text-primary">{brand.title}</span>
                        </div>
                    </SwiperSlide>
                     ))}
                </SwiperComponent>
            </div>
        </section>
        {/* <!--===============================
              POPULAR BRAND PART END    
        =================================--> */}

        {/* <!--===============================
                BENEFIT PART START       
        =================================--> */}
        <section className="pt-6 pb-6 sm:py-12 border-t border-slate-100">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        benefits.map((benefit,index)=>(
                        <div key={index} className="w-full max-w-[236px] flex flex-col sm:flex-row gap-3">
                            <div className="w-6 h-auto flex-shrink-0">
                                <img src={benefit.src} alt="benefit" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold leading-none capitalize mb-1 sm:mb-2">{ benefit.title }</h4>
                                <p className="text-xs sm:text-sm">{ benefit.describe }</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
        {/* <!--===============================
                BENEFIT PART END       
        =================================--> */}

        
      </>
    );
}
