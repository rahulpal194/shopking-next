'use client'
import useCanvas from "@/hooks/useCanvas";
import Link from "next/link";

export default function MenuSidebar (){
     const { closeCanvas, closeBackdrop } = useCanvas()
    return (
        <aside onClick={closeBackdrop} className="drawer" id="menu">
            <div className="drawer-content thin-scrolling">
                <div className="py-4 flex items-center justify-between px-4 border-b border-slate-100">
                    <Link href={"/"} className="active router-link-exact-active router-link-active router-link-exact-active flex-shrink-0" aria-current="page">
                        <img className="w-28 sm:w-32" alt="logo" src="/images/logo.png"/>
                    </Link>
                    <button onClick={()=>closeCanvas('menu')} type="button">
                        <i className="icon-close-circle text-xl text-red-500"></i>
                    </button>
                </div>
                <div className="px-4 pb-10">
                    <nav className="flex flex-col">
                        <Link href={"/home"} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Home</Link>
                        <Link href={"/offers"} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Offers</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">FAQ</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Return &amp; Exchange</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Shipping</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Size Charts</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Cookies Policy</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Terms &amp; Conditions</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Privacy Policy</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">About Us</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Contact Us</Link>
                    </nav>
                    <div>
                        <button type="button" className="language-toggle flex items-center justify-start text-left gap-2 py-3 w-full border-b border-slate-100">
                            <img alt="language" className="w-4 h-4 rounded-full" src="https://d91ztyz4qy326.cloudfront.net/shopking/1/english.png"/>
                            <span className="font-medium capitalize flex-auto text-left text-heading">English</span>
                            <i className="lab-fill-arrow-down text-sm font-bold transition-all duration-500"></i>
                        </button>
                        <ul id="mobile-language-colspan" className="w-full flex flex-col gap-2 mb-3 transition-all duration-500 h-0 overflow-hidden">
                            <li className="flex items-center gap-3 px-2.5 py-2 rounded-lg w-full cursor-pointer bg-slate-100">
                                <img src="https://d91ztyz4qy326.cloudfront.net/shopking/1/english.png" alt="flags" className="w-4 flex-shrink-0"/>
                                <span className="text-sm font-medium capitalize flex-auto text-heading">English</span>
                            </li>
                            <li className="flex items-center gap-3 px-2.5 py-2 rounded-lg w-full cursor-pointer bg-slate-100">
                                <img src="https://d91ztyz4qy326.cloudfront.net/shopking/2/bangla.png" alt="flags" className="w-4 flex-shrink-0"/>
                                <span className="text-sm font-medium capitalize flex-auto text-heading">Bangla</span>
                            </li>
                            <li className="flex items-center gap-3 px-2.5 py-2 rounded-lg w-full cursor-pointer bg-slate-100">
                                <img src="https://d91ztyz4qy326.cloudfront.net/shopking/3/arabic.png" alt="flags" className="w-4 flex-shrink-0"/>
                                <span className="text-sm font-medium capitalize flex-auto text-heading">Arabic</span>
                            </li>
                        </ul>
                    </div>
                    <h4 className="text-base font-bold capitalize mb-3 !text-heading">Contact</h4>
                    <ul className="flex flex-col gap-5">
                        <li className="flex gap-3">
                            <i className="lab-fill-location text-sm flex-shrink-0 !text-heading"></i>
                            <span className="text-sm font-medium !text-heading">House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216</span>
                        </li>
                        <li className="flex gap-3">
                            <i className="lab-fill-mail text-sm flex-shrink-0 !text-heading"></i>
                            <span className="text-sm font-medium !text-heading">info@inilabs.net</span>
                        </li>
                        <li className="flex gap-3">
                            <i className="lab-fill-calling text-sm flex-shrink-0 !text-heading"></i>
                            <span className="text-sm font-medium !text-heading">13333846282</span>
                        </li>
                    </ul>
                    <h4 className="text-base font-bold capitalize mt-3 mb-3 !text-heading">Follow Us</h4>
                    <nav className="flex flex-wrap items-center gap-6 mb-7">
                        <a target="_blank" href="https://www.facebook.com/inilabs/" className="lab-fill-facebook w-7 h-7 !leading-7 text-center rounded-full text-sm !text-heading bg-slate-200 transition-all duration-300 hover:text-white hover:bg-primary"></a>
                        <a target="_blank" href="https://twitter.com/inilabsn?lang=en" className="lab-fill-x w-7 h-7 !leading-7 text-center rounded-full text-sm !text-heading bg-slate-200 transition-all duration-300 hover:text-white hover:bg-primary"></a>
                        <a target="_blank" href="https://www.instagram.com/inilabsn" className="lab-fill-instagram w-7 h-7 !leading-7 text-center rounded-full text-sm !text-heading bg-slate-200 transition-all duration-300 hover:text-white hover:bg-primary"></a>
                        <a target="_blank" href="https://www.youtube.com/@inilabs3830" className="lab-fill-youtube w-7 h-7 !leading-7 text-center rounded-full text-sm !text-heading bg-slate-200 transition-all duration-300 hover:text-white hover:bg-primary"></a>
                    </nav>
                    <p className="text-xs font-medium !text-heading">© ShopKing by iNiLabs 2025, All Rights Reserved</p>
                </div>
            </div>
        </aside>
    )
}