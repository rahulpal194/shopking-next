'use client'
import ProductSwiper from "@/components/ProductDetailsSwiper";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { activetab } from "@/store/features/tabSlice";
import { useEffect, useState } from "react";
import products from "@/json/products.json"
import ProductCard from "@/components/ProductCard";
import SwiperComponent from "@/components/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { togglewishlist } from "@/store/features/wishlistSlice";
export default function ProductDetails (){

    const dispatch = useDispatch()
    let activeId = useSelector((state:any) => state.tab.active)
    useEffect(()=>{ dispatch(activetab('details'))},[])

    const [btn , setBtn] = useState(false)
    useEffect(()=>{
        const infodiv = document.querySelector('#info')
        const btn = document.querySelector('.see-more')
        // if(infodiv?.clientHeight > 600){

        //     btn?.classList.add('block')
        //     btn?.classList.remove('hidden')            
        //     infodiv.style.height = '600px'
        //     infodiv.style.overflow = 'hidden'
        // }
        // else{
        //     btn?.classList.add('hidden')
        //     btn?.classList.remove('block')
        // }
        console.log(infodiv?.clientHeight )
    },[activeId])

    return (
        <>
        {/* <!--===============================
              PRODUCT VARIATION PART START    
        =================================--> */}
        <section className="container mb-8 sm:mb-12 md:mb-20">
            <div className="mb-3 sm:mb-4 md:mb-8">
                <ul className="flex flex-wrap items-center">
                    <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                        <Link href={''} className="text-base font-medium capitalize transition-all duration-500 hover:text-primary">Home</Link>
                    </li>
                    <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                        <Link href={''} className="text-base font-medium capitalize transition-all duration-500 hover:text-primary">Men</Link>
                    </li>
                    <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                        <Link href={''} className="text-base font-medium capitalize transition-all duration-500 hover:text-primary">Clothing</Link>
                    </li>
                    <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                        <Link href={''} className="text-base font-medium capitalize transition-all duration-500 hover:text-primary">Hoodies & Sweatshirts</Link>
                    </li>
                    <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                        <span className="text-base font-medium capitalize text-text text-paragraph">Polar Full-Zip Up Sweatshirt</span>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-12 gap-y-6">
                <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                    <ProductSwiper/>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-7 sm:pl-7 md:pl-20">
                    <h1 className="text-xl sm:text-4xl font-bold mb-3 sm:mb-6">Polar Full-Zip Up Sweatshirt</h1>
                    <h3 className="flex items-center gap-4 mb-4 sm:mb-5">
                        <span className="text-lg sm:text-2xl font-bold">$80.00</span>
                        <del className="text-xs sm:text-lg font-bold text-red-500">$160.00</del>
                    </h3>
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-1 items-center">
                            <i className="icon-fill-star text-xl text-[#FFBC1F]"></i>
                            <i className="icon-fill-star text-xl text-[#FFBC1F]"></i>
                            <i className="icon-fill-star text-xl text-[#FFBC1F]"></i>
                            <i className="icon-fill-star text-xl text-[#FFBC1F]"></i>
                            <i className="icon-fill-star text-xl text-[#FFBC1F]"></i>
                        </div>
                        <span className="text-base font-medium text-paragraph">4.2 (32 Reviews)</span>
                    </div>
                    <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#EFF0F6]">
                        <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                            <dt className="capitalize text-lg font-semibold">Choose Size:</dt>
                            <dd className="flex flex-wrap items-center gap-3">
                                <button className="w-8 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">S</button>
                                <button className="w-8 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">M</button>
                                <button className="w-8 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">L</button>
                                <button className="w-8 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">XL</button>
                                <button className="w-8 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">XXL</button>
                            </dd>
                        </dl>
                        <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                            <dt className="capitalize text-lg font-semibold">Choose Color:</dt>
                            <dd className="flex flex-wrap items-center gap-3">
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Black</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Blue</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Red</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Yellow</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Pink</button>
                            </dd>
                        </dl>
                        <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                            <dt className="capitalize text-lg font-semibold">Quantity:</dt>
                            <dd className="flex flex-wrap items-center gap-3">
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Black</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Blue</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Red</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Yellow</button>
                                <button className="px-3 h-8 leading-8 text-center rounded-full text-sm font-medium capitalize flex-shrink-0 cursor-pointer text-secondary bg-[#F7F7FC]" type="button">Pink</button>
                            </dd>
                        </dl>
                        <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                            <dt className="capitalize text-lg font-semibold">Choose Color:</dt>
                            <dd className="flex flex-wrap items-center gap-3"></dd>
                        </dl>
                        <div className="flex gap-6 sm:gap-8 flex-wrap">
                            <button className="px-8 py-3 rounded-full bg-primary text-white text-base font-bold flex gap-2 items-center shadow-cartBtn">
                                <i className="icon-cart text-2xl"></i>
                                <span>Add to Cart</span>
                            </button>
                            <button onClick={()=>dispatch(togglewishlist('produt'))} className="px-8 py-3 rounded-full bg-white text-black text-base font-bold flex gap-2 items-center shadow-btn">
                                <i className="icon-heart text-2xl"></i>
                                <span>Favorite</span>
                            </button>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
        {/* <!--===============================
              PRODUCT VARIATION PART END    
        =================================--> */}

        {/* <!--===============================
              PRODUCT DETAILS PART START    
        =================================--> */}
        <section className="container my-10">
            <div id="info" className="border border-[#D9DBE9] rounded-4xl relative">
                <div className="border-b border-[#D9DBE9] p-4 sm:p-8 py-4 sm:py-6 flex flex-wrap gap-y-4 gap-x-6">
                   <SwiperComponent slidesPerView={4} pagination={false}spaceBetween={24}autoplay={false}navigation={false} className="!ml-0"
                    breakpoints={{
                         0: {
                            slidesPerView: "auto",
                            spaceBetween: 8,
                        },
                        900: {
                            slidesPerView: "auto",
                            spaceBetween: 8,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 24, 
                        }
                    }}>
                       <SwiperSlide className="!w-fit">
                            <button onClick={()=>dispatch(activetab('details'))} className={`${activeId=='details'? 'bg-black text-white':'bg-white text-black'} text-xs sm:text-base font-bold px-4 sm:px-8 h-7.5 sm:h-12 border rounded-full border-[#D9DBE9]`}>Details</button>
                       </SwiperSlide>
                       <SwiperSlide className="!w-fit">
                            <button onClick={()=>dispatch(activetab('videos'))} className={`${activeId=='videos'? 'bg-black text-white':'bg-white text-black'} text-xs sm:text-base font-bold px-4 sm:px-8 h-7.5 sm:h-12 border rounded-full border-[#D9DBE9]`}>Videos</button>
                       </SwiperSlide>
                       <SwiperSlide className="!w-fit">
                           <button onClick={()=>dispatch(activetab('reviews'))} className={`${activeId=='reviews'? 'bg-black text-white':'bg-white text-black'} text-xs sm:text-base font-bold px-4 sm:px-8 h-7.5 sm:h-12 border rounded-full border-[#D9DBE9]`}>Reviews</button>
                       </SwiperSlide>
                       <SwiperSlide className="!w-fit">
                            <button onClick={()=>dispatch(activetab('shipping'))} className={`${activeId=='shipping'? 'bg-black text-white':'bg-white text-black'} text-xs sm:text-base font-bold px-4 sm:px-8 h-7.5 sm:h-12 border rounded-full border-[#D9DBE9]`}>Shipping & Return</button>
                       </SwiperSlide>
                   </SwiperComponent>
                </div>
                <div id="details" className={`p-4 sm:p-8 pt-4 sm:pt-6 ${activeId =='details'? 'active':''}`}>
                    <h2 className="text-xl sm:text-4xl font-bold mb-4">Product Details</h2>
                    <p className="text-base font-normal mb-6">Lorem ipsum dolor sit amet consectetur. Varius orci ut nulla convallis nisi blandit in. Enim mauris adipiscing sed amet. Ornare est amet lectus feugiat quisque vulputate sollicitudin ut donec. Ac sagittis egestas sed arcu et ac amet. Gravida varius vel morbi augue augue nulla consectetur gravida. Metus amet ut turpis accumsan in. Nisl pellentesque id ut non arcu risus nisi et. Diam eget mi dignissim pretium sed congue quis ultrices. Sed ipsum malesuada.</p>
                    <ul className="list-disc space-y-4 ltr:pl-8 rtl:pr-8"> 
                        <li>Regular fit</li>
                        <li>Full zip with hood</li>
                        <li>100% recycled polyester polar fleece</li>
                        <li>Kangaroo pockets</li>
                        <li>Ribbed cuffs and hem</li>
                        <li>Imported</li>
                        <li>Product color: Silver Dawn</li>
                        <li>Product code: HN1946</li>
                    </ul>                    
                </div>
                <div id="videos" className={`p-4 sm:p-8 pt-4 sm:pt-6 ${activeId =='videos'? 'active':''}`}>
                    <h2 className="text-xl sm:text-4xl font-bold mb-6">Product Videos</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <iframe className="aspect-video" src="https://www.youtube.com/embed/4reAD2pfYCw?si=dNwlzWRYtFzARJlr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="aspect-video" src="https://www.youtube.com/embed/4reAD2pfYCw?si=dNwlzWRYtFzARJlr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="aspect-video" src="https://www.youtube.com/embed/4reAD2pfYCw?si=dNwlzWRYtFzARJlr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>                  
                </div>
                <div id="reviews" className={`p-4 sm:p-8 pt-4 sm:pt-6 ${activeId =='reviews'? 'active':''}`}>
                    <h2 className="text-xl sm:text-4xl font-bold mb-4">Product Reviews</h2>
                    <div className="mb-8">
                        <h6 className="text-lg font-semibold">Jonathon Doe</h6>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex gap-1 items-center">
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-gray-300 text-xs"></i>
                            </div>
                            <span className="text-sm font-normal text-paragraph">20 February, 2022</span>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Varius orci ut nulla convallis nisi blandit in. Enim mauris adipiscing sed amet. Ornare est amet lectus feugiat quisque vulputate sollicitudin ut donec. Ac sagittis egestas sed arcu et ac amet. Gravida varius vel morbi augue augue nulla consectetur gravida. Metus amet ut turpis accumsan in. Nisl pellentesque id ut non arcu risus nisi et.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                        </div>
                    </div>             
                    <div className="mb-8">
                        <h6 className="text-lg font-semibold">Jonathon Doe</h6>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex gap-1 items-center">
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-gray-300 text-xs"></i>
                            </div>
                            <span className="text-sm font-normal text-paragraph">20 February, 2022</span>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Varius orci ut nulla convallis nisi blandit in. Enim mauris adipiscing sed amet. Ornare est amet lectus feugiat quisque vulputate sollicitudin ut donec. Ac sagittis egestas sed arcu et ac amet. Gravida varius vel morbi augue augue nulla consectetur gravida. Metus amet ut turpis accumsan in. Nisl pellentesque id ut non arcu risus nisi et.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                        </div>
                    </div>             
                    <div className="mb-8">
                        <h6 className="text-lg font-semibold">Jonathon Doe</h6>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex gap-1 items-center">
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-gray-300 text-xs"></i>
                            </div>
                            <span className="text-sm font-normal text-paragraph">20 February, 2022</span>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Varius orci ut nulla convallis nisi blandit in. Enim mauris adipiscing sed amet. Ornare est amet lectus feugiat quisque vulputate sollicitudin ut donec. Ac sagittis egestas sed arcu et ac amet. Gravida varius vel morbi augue augue nulla consectetur gravida. Metus amet ut turpis accumsan in. Nisl pellentesque id ut non arcu risus nisi et.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                        </div>
                    </div>             
                    <div className="mb-8">
                        <h6 className="text-lg font-semibold">Jonathon Doe</h6>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex gap-1 items-center">
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-[#FFBC1F] text-xs"></i>
                                <i className="icon-fill-star text-gray-300 text-xs"></i>
                            </div>
                            <span className="text-sm font-normal text-paragraph">20 February, 2022</span>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Varius orci ut nulla convallis nisi blandit in. Enim mauris adipiscing sed amet. Ornare est amet lectus feugiat quisque vulputate sollicitudin ut donec. Ac sagittis egestas sed arcu et ac amet. Gravida varius vel morbi augue augue nulla consectetur gravida. Metus amet ut turpis accumsan in. Nisl pellentesque id ut non arcu risus nisi et.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                            <img className="w-20 h-20" src="/images/productDetails/cover.png" alt="" />
                        </div>
                    </div>             
                </div>
                <div id="shipping" className={`p-4 sm:p-8 pt-4 sm:pt-6 ${activeId =='shipping'? 'active':''}`}>
                    <h2 className="text-xl sm:text-4xl font-bold mb-4">Product Shipping & Return</h2>
                    <ul className="list-disc space-y-2 ltr:pl-8 rtl:pr-8"> 
                        <li>We offer extended returns throughout the holiday season. All purchases made between November 6, 2023, through January 7, 2024, can be returned until Jan 31, 2024. Returns are accepted by mail and in-store. Items must be unworn and tags must be attached.</li>
                        <li>A flat rate of $4.95 USD will be deducted from your refund for returns.</li>
                        <li>Once a return is received, please allow 7-14 business days to process and 3-5 business days for the refund to be credited to the payment method used at the time of purchase.</li>
                        <li>We do not offer item exchanges for online orders at this time. To exchange an item for a new size or color you must return the unwanted item(s) and place a new web order for the desired item(s). Your returned item will be processed and a refund will be granted to the original form of payment as long as the item meets our return policy terms. Availability of replacement items is not guaranteed.</li>
                    </ul>                    
                </div>
                <div className="see-more absolute z-10 h-20 bottom-0 w-full left-1/2 -translate-x-1/2 flex justify-center bg-white/90 rounded-4xl">
                    <button className="text-red-500 ">See more</button>
                </div>
            </div>
        </section>
        {/* <!--===============================
              PRODUCT DETAILS PART END    
        =================================--> */}

        {/* <!--===============================
              RELATED PRODUCTS PART START    
        =================================--> */}
        <section className="container my-10">
            <h2 className="text-xl sm:text-4xl font-bold mb-6">
               Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {products.slice(0,8).map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
        {/* <!--===============================
              RELATED PRODUCTS PART END    
        =================================--> */}
        </>
    )
}