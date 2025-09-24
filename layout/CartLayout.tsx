'use client'
import { toggleCart } from "@/store/features/cartSlice"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

export default function CartLayout (){
   const { isCartOpen}= useSelector((state:any)=>state.cart)
   const dispatch = useDispatch()
   const handleCart =(close:boolean)=>{
     dispatch(toggleCart(close))
   }
    return (
        <aside className={`drawer ${isCartOpen ? 'active' : ''}`}>
            <div className="drawer-content">
                <div className="py-5 flex items-center justify-between px-4 border-b border-slate-100">
                    <h3 className="text-[22px] font-bold capitalize">Shopping Cart</h3>
                    <button onClick={()=>handleCart(false)} type="button" className="icon-close-circle text-lg text-red-500"></button>
                </div>
                <ul className="px-4 pt-4 pb-10 sm:pb-4 h-[calc(100dvh_-_218px)] overflow-y-auto">
                    <li className="flex items-start gap-3 pb-4 mb-4 border-b last:mb-0 last:pb-0 last:border-none border-gray-100">
                        <img src="https://d91ztyz4qy326.cloudfront.net/shopking/106/conversions/1-cover.png" alt="products" className="w-28 rounded-lg flex-shrink-0"/>
                        <div className="relative w-full overflow-hidden">
                            <h4 className="font-semibold capitalize whitespace-nowrap overflow-hidden text-ellipsis mb-1">Black Jacket</h4>
                            <div className="flex flex-wrap mb-2">
                                <span className="text-xs capitalize inline-flex items-center">White | M</span>
                            </div>
                            <div className="flex flex-wrap gap-3 mb-3">
                                <span className="font-semibold font-sans">$130.00</span>
                            </div>
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-1 w-20 p-1 rounded-full bg-[#F7F7FC]">
                                    <button type="button" className="cursor-not-allowed icon-circle-minus text-lg leading-none transition-all duration-300 hover:text-primary"></button>
                                    <input type="number" className="text-center w-full h-5 text-sm font-medium"/>
                                    <button className="icon-circle-plus text-lg leading-none transition-all duration-300 hover:text-primary" type="button"></button>
                                </div>
                                <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF4F4] text-[#E93C3C] transition-all duration-300 hover:bg-[#E93C3C] hover:text-white">
                                    <i className="icon-line-trash text-sm"></i>
                                    <span className="text-xs font-medium capitalize hidden sm:block">Remove</span>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold capitalize">Subtotal</h3>
                        <h4 className="font-semibold capitalize font-sans">$130.00</h4>
                    </div>
                    <Link href={"/checkout"} className="text-center block w-full mb-3 h-12 leading-12 px-12 font-semibold tracking-wide rounded-full whitespace-nowrap text-white bg-primary">Process to Checkout</Link>
                    <p className="pb-12 sm:pb-0 capitalize text-xs text-center font-medium">Shipping, Taxes &amp; Discount Calculate At Checkout</p>
                </div>
            </div>
        </aside>
    )
}