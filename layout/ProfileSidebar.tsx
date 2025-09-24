'use client'
import useCanvas from "@/hooks/useCanvas";
import Link from "next/link";

export default function ProfileSidebar (){
    const { closeCanvas, closeBackdrop } = useCanvas()
    return (
        <aside onClick={closeBackdrop} className="drawer" id="profile">
            <div className="drawer-content !max-w-xs">
                <button onClick={()=>closeCanvas('profile')} type="button" className="absolute top-2 right-2">
                    <i className="icon-close-circle text-xl text-red-500"></i>
                </button>
                <div className="flex flex-col items-center justify-center gap-3 p-4 border-b border-[#EFF0F6] mt-4">
                    <img src="https://demo.shopking.dev/images/required/profile.png" alt="avatar" className="w-18 h-18 rounded-full object-cover flex-shrink-0"/>
                    <dl className="w-full">
                        <dt className="font-semibold capitalize whitespace-nowrap mb-0.5 text-center">Will Smith</dt>
                        <dd className="text-sm font-medium whitespace-nowrap text-center">
                            <span dir="ltr">+880125333344</span>
                        </dd>
                    </dl>
                </div>
                <nav className="flex flex-col gap-y-1 py-2">
                    <a href="/account/dashboard" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                        <i className="text-base text-[#A0A3BD] icon-fill-category"></i>
                        <span className="text-base font-medium capitalize whitespace-nowrap">Dashboard</span>
                    </a>
                    <a href="/account/order-history" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                        <i className="text-base text-[#A0A3BD] icon-fill-bag"></i>
                        <span className="text-base font-medium capitalize whitespace-nowrap">Order History</span>
                    </a>
                    <a href="/account/return-orders" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                        <i className="text-base text-[#A0A3BD] icon-fill-refresh"></i>
                        <span className="text-base font-medium capitalize whitespace-nowrap">Return Orders</span>
                    </a>
                    <a href="/account/account-info" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                        <i className="text-base text-[#A0A3BD] icon-fill-user"></i>
                        <span className="text-base font-medium capitalize whitespace-nowrap">Account info</span>
                    </a>
                    <a href="/account/address" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                        <i className="text-base text-[#A0A3BD] icon-fill-location"></i>
                        <span className="text-base font-medium capitalize whitespace-nowrap">Address</span>
                    </a>
                    <button className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                        <i className="text-base text-[#A0A3BD] icon-fill-logout"></i>
                        <span className="text-base font-medium capitalize whitespace-nowrap">Logout</span>
                    </button>
                </nav>
            </div>
        </aside>
    )
}