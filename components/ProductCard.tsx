'use client'
import Link from "next/link";
import { productType } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { togglewishlist } from "@/store/features/wishlistSlice";

export default function ProductCard ({product}:{product:productType}){
    const {name,cover,currency_price, discounted_price,id,rating_star_count, rating_star, flash_sale, wishlist} = product
    
    const dispatch = useDispatch()
    return (
    <div className="p-2 rounded-xl sm:rounded-2xl flex flex-col transition-all duration-300 shadow-card sm:hover:shadow-productcard group">
        <figure className="relative overflow-hidden rounded-xl flex-shrink-0 isolate">
            <img src={cover} alt="product" className="w-full rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"/>
            <span className={`${flash_sale? 'block':'hidden'} absolute top-2 left-2 z-10 text-xs text-white font-semibold py-1 sm:py-1.5 px-2 rounded-full bg-black`}>Flash Sale</span>
            <button onClick={()=>dispatch(togglewishlist(product))} className="w-5 h-5 leading-5 sm:w-7 sm:h-7 sm:leading-7 rounded-full text-center text-xs sm:text-base shadow-badge absolute top-2 right-2 z-10 text-[#E93C3C] bg-white">
                <i className="icon-heart"></i>
            </button>
        </figure>
        <div className="pt-4 h-full flex flex-col gap-3 justify-between">
            <h3 className="capitalize text-sm sm:text-base font-semibold group-hover:text-primary"><Link href={`/product/${id}`} >{name}</Link></h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-2">
                <div className="flex gap-1 items-center">
                    <i className="icon-fill-star text-[#FFBC1F] text-base"></i>
                    <i className="icon-fill-star text-[#FFBC1F] text-base"></i>
                    <i className="icon-fill-star text-[#FFBC1F] text-base"></i>
                    <i className="icon-fill-star text-[#FFBC1F] text-base"></i>
                    <i className="icon-fill-star text-gray-300 text-base"></i>
                </div>
                <p className="text-sm font-medium text-paragraph">{rating_star} ({rating_star_count == null ? 0 : `${rating_star_count} Reviews`})</p>
           </div>
            <h4 className="flex flex-wrap items-center gap-x-2 sm:gap-x-3">
                <span className={`${discounted_price? 'block':'hidden'} text-lg sm:text-xl font-bold`}>{discounted_price}</span>
                <span className={`${discounted_price? 'line-through text-red-500':''} text-sm sm:text-base font-bold `}>{currency_price}</span>
            </h4>
        </div>
    </div>
    )
}