'use client'
import MultiStepperComponent from "@/components/MultiStepperComponent";
import OrderSummaryComponent from "@/components/OrderSummaryComponent";
import useModal from "@/hooks/useModal";
import Link from "next/link";

export default function Cart (){
    const {openModal , closeModal} = useModal()
    const steps = [
        {
           step:1,
           title:"cart" 
        },
        {
           step:2,
           title:"checkout" 
        },
        {
           step:3,
           title:"payment" 
        }]
    return (
        <section className="container">
            <div className="flex items-start gap-2 mb-12">
                <button>
                    <i className="icon-undo text-2xl text-primary"></i>
                </button>
                <div>
                    <p className="text-base font-semibold leading-5">Your Shopping Cart</p>
                    <span className="text-paragraph text-xs font-normal">2 Items</span>
                </div>
            </div>
            <div className="mb-12 mx-4">
                <MultiStepperComponent currentstep="cart" steps={steps}/>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8">
                    <div className="shadow-card mb-6">
                        <ul className="px-4 pt-4 pb-10 sm:pb-4 overflow-y-auto">
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
                    </div>
                    <div className="flex justify-end">     
                        <Link href={'/checkout'} className="h-12 px-6 flex items-center rounded-full text-base font-bold text-white bg-primary">Procced to Checkout</Link>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <div onClick={()=>openModal("coupon")} className="mb-6 rounded-2xl border border-[#006CC0] flex items-center gap-3 p-4 cursor-pointer">
                        <div className="flex-shrink-0">
                            <i className="icon-fill-coupon text-2xl text-[#006CC0]"></i>
                        </div>
                        <div className="flex-auto overflow-hidden">
                            <h4 className="font-semibold leading-5 whitespace-nowrap overflow-hidden text-ellipsis capitalize text-[#006CC0]">Apply Promo, Coupon or Voucher</h4>
                            <h5 className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis">Get discount with your order</h5>
                        </div>
                        <i className="icon-chevron-right text-xl text-[#006CC0]"></i>
                    </div>
                    <OrderSummaryComponent/>
                </div>
                <div className="modal" id="coupon">
                    <div className="modal-content !max-w-[360px] relative">
                        <button onClick={()=>closeModal('coupon')} className="absolute top-2 right-2"><i className="icon-close-circle text-xl text-red-500"></i></button>
                        <form className="p-4 pb-0 w-full mt-6">
                            <label htmlFor="" className="text-base font-semibold mb-2">Enter Code</label>
                            <div className=" flex">
                                <input type="text" className="p-3 h-11 w-full border border-[#D9DBE9] rounded-tl-lg rounded-bl-lg" placeholder="Promo, Coupon or Voucher" />
                                <button className="bg-[#007FE3] px-4 py-2.5 rounded-tr-lg rounded-br-lg text-white">Apply</button>
                            </div>
                        </form>
                        <div className="p-4 pt-4">
                            <p className="text-base font-semibold mb-2">Coupon & Vouchers for you</p>
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#EEF7FF] p-4 relative rounded-xl">
                                    <h3 className="text-sm font-medium mb-2">Enjoy 25% Off at total value of items worth $3000 or more</h3>
                                    <p className="text-xs text-paragraph">05.04.2023 - 10.04.2023</p>
                                    <button type="button" className="absolute bottom-0 ltr:right-0 rtl:left-0 text-sm font-semibold capitalize py-1.5 px-3 rounded-br-xl rounded-tl-xl text-white bg-primary">Apply</button>
                                </div>
                                <div className="bg-[#FFF1EE] p-4 relative rounded-xl">
                                    <h3 className="text-sm font-medium mb-2">Enjoy 25% Off at total value of items worth $3000 or more</h3>
                                    <p className="text-xs text-paragraph">05.04.2023 - 10.04.2023</p>
                                    <button type="button" className="absolute bottom-0 ltr:right-0 rtl:left-0 text-sm font-semibold capitalize py-1.5 px-3 rounded-br-xl rounded-tl-xl text-white bg-primary">Apply</button>
                                </div>
                                <div className="bg-[#EFFFEE] p-4 relative rounded-xl">
                                    <h3 className="text-sm font-medium mb-2">Enjoy 25% Off at total value of items worth $3000 or more</h3>
                                    <p className="text-xs text-paragraph">05.04.2023 - 10.04.2023</p>
                                    <button type="button" className="absolute bottom-0 ltr:right-0 rtl:left-0 text-sm font-semibold capitalize py-1.5 px-3 rounded-br-xl rounded-tl-xl text-white bg-primary">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}