'use client'
import useCanvas from "@/hooks/useCanvas";
import { toggleCart } from "@/store/features/cartSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function MobileLayout (){
    const dispatch = useDispatch()
    const {openCanvas} = useCanvas()
    return (
        <section className="lg:hidden block bg-white px-5 py-2.5 fixed z-[100] bottom-0 left-0 w-full drop-shadow-mobile">
            <nav className="flex items-center justify-between text-paragraph">
                <Link href={'/'} className="flex gap-1 flex-col items-center">
                    <i className="icon-home text-lg"></i>
                    <span className="text-xs font-medium">Home</span>
                </Link>
                <Link href={''} className="flex gap-1 flex-col items-center">
                    <i className="icon-category text-lg"></i>
                    <span className="text-xs font-medium">Category</span>
                </Link>
                <Link onClick={()=>dispatch(toggleCart(true))} href={''} className="-mt-12 w-12 h-12 rounded-full bg-primary drop-shadow-cart flex justify-center items-center text-white">
                    <i className="icon-cart text-xl"></i>
                </Link>
                <Link href={'/wishlist'} className="flex gap-1 flex-col items-center">
                    <i className="icon-heart text-lg"></i>
                    <span className="text-xs font-medium">Wishlist</span>
                </Link>
                <Link href={''} onClick={()=>openCanvas('profile')} className="flex gap-1 flex-col items-center">
                    <i className="icon-user text-lg"></i>
                    <span className="text-xs font-medium">Profile</span>
                </Link>
            </nav>
        </section>
    )
}