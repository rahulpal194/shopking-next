'use client'
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useSelector } from "react-redux";
import useModal from "@/hooks/useModal";
export default function wishlist (){
    const { list } = useSelector((state:any)=>state.wishlist)
    const { openModal} = useModal()
    return (
        <section className="container mb-20">
             <div className="mb-3 sm:mb-4 md:mb-8">
                 <ul className="flex flex-wrap items-center">
                     <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                         <Link href={''} className="text-base font-medium capitalize transition-all duration-500 hover:text-primary">Home</Link>
                     </li>
                     <li className="after:content-['\e00a'] after:font-icon after:text-sm after:mx-2 last:after:hidden">
                         <span className="text-base font-medium capitalize text-text text-paragraph">Wishlist</span>
                     </li>
                 </ul>
             </div>
             <div>
                <div className="flex flex-wrap items-center gap-x-2 mb-3 sm:mb-6">
                    <h2 className="text-xl sm:text-4xl font-bold">My Wishlist</h2>
                    <span className="text-[22px] font-medium">({list.length} Products Found)</span>
                </div> 
                <div className={`${list.length < 1 ? 'hidden':'block'} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 border-t border-[#EFF0F6] pt-3 sm:pt-6`}>
                    {list.map((product:any)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
             </div>
        </section>
    )
}