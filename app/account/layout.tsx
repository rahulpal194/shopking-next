import useCanvas from "@/hooks/useCanvas"
import Link from "next/link";
import React from "react"
export default function AccountLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <section className="container mb-20">
            <div className="grid grid-cols-12 gap-6">
                <div className="hidden md:block col-span-3">
                    <div className="rounded-2xl overflow-hidden shadow-card bg-white">
                        <div className="flex flex-col items-center justify-center gap-3 p-4 border-b border-[#EFF0F6]">
                            <img src="https://demo.shopking.dev/images/required/profile.png" alt="avatar" className="w-18 h-18 rounded-full object-cover flex-shrink-0"/>
                            <dl className="w-full">
                                <dt className="font-semibold capitalize whitespace-nowrap mb-0.5 text-center">Will Smith</dt>
                                <dd className="text-sm font-medium whitespace-nowrap text-center">
                                    <span dir="ltr">+880125333344</span>
                                </dd>
                            </dl>
                        </div>
                        <nav className="flex flex-col gap-y-1 py-2">
                            <Link href="/account/dashboard" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                                <i className="text-base text-[#A0A3BD] icon-fill-category"></i>
                                <span className="text-base font-medium capitalize whitespace-nowrap">Dashboard</span>
                            </Link>
                            <Link href="/account/order-history" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                                <i className="text-base text-[#A0A3BD] icon-fill-bag"></i>
                                <span className="text-base font-medium capitalize whitespace-nowrap">Order History</span>
                            </Link>
                            <Link href="/account/return-orders" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                                <i className="text-base text-[#A0A3BD] icon-fill-refresh"></i>
                                <span className="text-base font-medium capitalize whitespace-nowrap">Return Orders</span>
                            </Link>
                            <Link href="/account/account-info" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                                <i className="text-base text-[#A0A3BD] icon-fill-user"></i>
                                <span className="text-base font-medium capitalize whitespace-nowrap">Account info</span>
                            </Link>
                            <Link href="/account/address" className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                                <i className="text-base text-[#A0A3BD] icon-fill-location"></i>
                                <span className="text-base font-medium capitalize whitespace-nowrap">Address</span>
                            </Link>
                            <button className="flex items-center gap-3 px-4 py-2 transition-all duration-500 hover:bg-[#FFF4F1]">
                                <i className="text-base text-[#A0A3BD] icon-fill-logout"></i>
                                <span className="text-base font-medium capitalize whitespace-nowrap">Logout</span>
                            </button>
                        </nav>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                    {children}
                </div>
            </div>
        </section>
    )
}