'use client'
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleCart } from "@/store/features/cartSlice";
import useSticky from "@/hooks/useSticky"
import Categoryomponent from "@/components/Categoryomponent";
import useCanvas from "@/hooks/useCanvas";

export default function HeaderLayouts (){
   const {isSticky} = useSticky()
   const dispatch = useDispatch()
   const handleCart =(open:boolean)=>{
     dispatch(toggleCart(open))
   }
   const { openCanvas } = useCanvas()
    return (
        <header className={`shadow-header bg-white mb-5 sm:mb-8 ${isSticky? 'fixed top-0 w-full z-40':''}`}>
            <div className="py-4 flex gap-2 justify-between items-center container">  
                <div className="flex gap-2 justify-between items-center">
                     <button onClick={()=>openCanvas('menu')} className="lg:hidden flex items-center"><i className="icon-hum-burger text-2xl"></i></button>
                     <Link href="/"> 
                         <Image className="h-6 w-auto" src={'/images/logo.png'} width={500} height={500} alt="logo"></Image>
                     </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-9">
                    <Link href={'/'} className="text-base font-semibold">Home</Link> 
                    <div className="text-base font-semibold relative group category-group">
                        <button className=" flex gap-2 items-center">Categories <i className="icon-chevron-down"></i></button>
                        <Categoryomponent/>
                    </div> 
                    <Link href={'/offers'} className="text-base font-semibold">Offers</Link> 
                </nav>
                <form className="hidden lg:flex py-2 px-4 w-full lg:w-80 h-10.5  items-center gap-2 bg-[#EFF0F6] rounded-full">
                    <button><i className="icon-search"></i></button>
                    <input type="text" className="w-full h-full outline-none"/>
                </form>
                <div className="hidden lg:flex items-center gap-8">
                    <div className="dropdown-group relative group">
                        <button className="dropdown-btn flex gap-2 items-center">
                            <img className="flex-shrink-0" src="/images/flag/uk.png" alt="" />
                            <span className="text-base font-semibold">English</span>
                            <i className="icon-chevron-down rotate-0 group-hover:rotate-180 transition-all duration-300"></i>
                        </button>
                        <ul className="dropdown-list w-40">
                            <li className="flex items-center gap-2 cursor-pointer py-1.5 px-2">
                                <img className="flex-shrink-0" src="/images/flag/uk.png" alt="" />
                                <span className="text-base font-semibold">English</span>
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer py-1.5 px-2">
                                <img className="flex-shrink-0" src="/images/flag/uk.png" alt="" />
                                <span className="text-base font-semibold">English</span>
                            </li>
                        </ul>
                    </div>

                    <Link href={'/wishlist'}>
                        <i className="icon-heart text-black text-xl"></i>
                    </Link>


                    <div className="dropdown-group relative group">
                        <button className="dropdown-btn flex gap-2 items-center">
                            <i className="icon-user text-black text-xl"></i>
                        </button>
                        <div className="w-60 absolute top-15 ltr:-right-10 rtl:-left-10 z-10 rounded-2xl overflow-hidden shadow-card bg-white transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                            <div className="flex items-center gap-3 p-4 border-b border-[#EFF0F6]">
                                <img src="https://demo.shopking.dev/images/required/profile.png" alt="avatar" className="w-11 h-11 rounded-full object-cover flex-shrink-0"/>
                                <dl className="w-full">
                                    <dt className="font-semibold capitalize whitespace-nowrap mb-0.5">Will Smith</dt>
                                    <dd className="text-sm font-medium whitespace-nowrap text-text">
                                        <span dir="ltr">+880125333344</span>
                                    </dd>
                                </dl>
                            </div>
                            <nav className="flex flex-col py-2">
                                <a href="/account/order-history" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-gray-100">
                                    <i className="text-sm text-[#A0A3BD] lab-fill-bag"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Order History</span>
                                </a>
                                <a href="/account/return-orders" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-gray-100">
                                    <i className="text-sm text-[#A0A3BD] lab-fill-refresh"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Return Orders</span>
                                </a>
                                <a href="/account/account-info" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-gray-100">
                                    <i className="text-sm text-[#A0A3BD] lab-fill-user"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Account info</span>
                                </a>
                                <a href="/account/change-password" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-gray-100">
                                    <i className="text-sm text-[#A0A3BD] lab-fill-key"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Change Password</span>
                                </a>
                                <a href="/account/address" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-gray-100">
                                    <i className="text-sm text-[#A0A3BD] lab-fill-location"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Address</span>
                                </a>
                                <button className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-gray-100">
                                    <i className="text-sm text-[#A0A3BD] lab-fill-logout"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Logout</span>
                                </button>
                            </nav>
                        </div>
                    </div>

                    <button onClick={()=>handleCart(true)} className="w-10.5 h-10.5 rounded-full bg-black">
                        <i className="icon-cart text-white text-xl"></i>
                    </button>
                </div>

                <div className="relative group lg:hidden block">
                    <button className="">
                        <i className="icon-search"></i>
                    </button>
                    <div className="fixed top-[64px] z-10 left-1/2 w-full -translate-x-1/2 origin-top group-hover:scale-y-100 scale-y-0 transition-all duration-300">
                       <div className="container">
                        <ul className="w-full rounded-b-2xl shadow-paper bg-white">

                        <li className="flex items-center justify-between gap-2 cursor-pointer py-1.5 px-2">
                            <span className="text-sm font-medium flex-1">title</span>
                            <i className="icon-chevron-right text-base"></i>
                        </li>
                        <li className="flex items-center justify-between gap-2 cursor-pointer py-1.5 px-2">
                            <span className="text-sm font-medium flex-1">title</span>
                            <i className="icon-chevron-right text-base"></i>
                        </li>
                        <li className="flex items-center justify-between gap-2 cursor-pointer py-1.5 px-2">
                            <span className="text-sm font-medium flex-1">title</span>
                            <i className="icon-chevron-right text-base"></i>
                        </li>
                        <li className="flex items-center justify-between gap-2 cursor-pointer py-1.5 px-2">
                            <span className="text-sm font-medium flex-1">title</span>
                            <i className="icon-chevron-right text-base"></i>
                        </li>
                        <li className="flex items-center justify-between gap-2 cursor-pointer py-1.5 px-2">
                            <span className="text-sm font-medium flex-1">title</span>
                            <i className="icon-chevron-right text-base"></i>
                        </li>
                        </ul>
                        </div> 
                    </div>
                </div>

            </div>
        </header>
    )
}