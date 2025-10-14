'use client'
import MultiStepperComponent from "@/components/MultiStepperComponent";
import OrderSummaryComponent from "@/components/OrderSummaryComponent";
import PhoneInput from "@/components/PhoneInput";
import useModal from "@/hooks/useModal";
import Link from "next/link";
import { useState } from "react";

export default function Checkout (){
    const {openModal , closeModal} = useModal()
    const [shippingtype , setShippingType] = useState('delivery')
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
        <>
        <section className="container mb-20">
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
                <MultiStepperComponent currentstep="checkout" steps={steps}/>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-8">
                <div className="col-span-12 md:col-span-8">
                    <div className="flex mb-4 gap-4 shipping-type">
                        <button onClick={()=>setShippingType('delivery')} className={`delivery pl-4 transition-all duration-300 ${shippingtype=='delivery'? 'active ':''}`}>
                            Delivery
                        </button>
                        <button onClick={()=>setShippingType('pickup')} className={`pickup pr-4 transition-all duration-300 ${shippingtype=='pickup'? 'active ':''}`}>
                            Pick Up
                        </button>
                    </div>
                    <div className="mb-6 rounded-2xl shadow-card">
                        <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-gray-100">
                            <h4 className="font-bold capitalize">Shipping Address</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button type="button" className="px-3 h-8 leading-8 rounded-full flex items-center gap-2 bg-[#E7FFF0] text-[#1AB759]">
                                    <i className="icon-edit"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Edit</span>
                                </button>
                                <button onClick={()=>openModal('address-form')} type="button" className="px-3 h-8 leading-8 rounded-full flex items-center gap-2 bg-[#FFF4F1] text-primary">
                                    <i className="icon-circle-plus"></i>
                                    <span className="text-sm font-medium capitalize whitespace-nowrap">Add New</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
                            <label htmlFor="address1" className=" border border-[#F7F7F7] bg-[#F7F7F7] py-3 px-4 flex items-baseline gap-3 rounded-lg cursor-pointer transition-all duration-300">
                                <input type="radio" name="address" id="address1" className="custom-radio p-3"/>
                                <div>
                                    <span className="text-base font-medium capitalize mb-1">Will Smith</span>
                                    <span className="block text-sm leading-6">+880 125333344,</span>
                                    <span className="block text-sm leading-6">customer@example.com,</span>
                                    <span className="block text-sm leading-6">House :3, Road: 1, Block: C, Mirpur 2,1216</span>
                                    <span className="block text-sm leading-6">Dhaka,</span>
                                    <span className="block text-sm leading-6">Bangladesh,</span>
                                </div>
                            </label>
                            <label htmlFor="address2" className=" border border-[#F7F7F7] bg-[#F7F7F7] py-3 px-4 flex items-baseline gap-3 rounded-lg cursor-pointer transition-all duration-300">
                                <input type="radio" name="address" id="address2" className="custom-radio p-3"/>
                                <div>
                                    <span className="text-base font-medium capitalize mb-1">Will Smith</span>
                                    <span className="block text-sm leading-6">+880 125333344,</span>
                                    <span className="block text-sm leading-6">customer@example.com,</span>
                                    <span className="block text-sm leading-6">House :3, Road: 1, Block: C, Mirpur 2,1216</span>
                                    <span className="block text-sm leading-6">Dhaka,</span>
                                    <span className="block text-sm leading-6">Bangladesh,</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <input type="checkbox" name="address" id="address" className="custom-checkbox" />
                        <label htmlFor="address">Save shipping address as a billing address.</label>
                    </div>
                     <div className="hidden md:flex justify-between">
                        <button className="h-12 px-6 rounded-full text-base font-bold bg-[#F7F7FC]">Back to Cart</button>
                        <button className="h-12 px-6 rounded-full text-base font-bold text-white bg-primary">Confirm Order</button>
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
            </div>
            <div className="md:hidden flex justify-between">
                <button className="h-12 px-6 rounded-full text-base font-bold bg-[#F7F7FC]">Back to Cart</button>
                <button className="h-12 px-6 rounded-full text-base font-bold text-white bg-primary">Confirm Order</button>
            </div>
        </section>

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

        <div className="modal" id="address-form">
            <div className="modal-content !max-w-[743px] relative px-4 py-6">
                <form>
                    <h3 className="text-[22px] font-bold mb-6">Add New Address</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-sm font-medium required">Full Name</label>
                            <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-sm font-medium required">Email</label>
                            <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-sm font-medium required">Phone</label>
                            <PhoneInput/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-sm font-medium required">State</label>
                            <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-sm font-medium required">City</label>
                            <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                        </div>
                        <div className="flex flex-col mb-">
                            <label htmlFor="name" className="text-sm font-medium required">Zip Code</label>
                            <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="name" className="text-sm font-medium required">Street Address</label>
                        <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                    </div>
                </form>
                <div className="flex justify-start gap-6">
                    <button className="h-12 px-6 rounded-full text-base font-bold text-white bg-primary">Add Address</button>
                    <button className="h-12 px-6 rounded-full text-base font-bold bg-[#F7F7FC]">Cancel</button>
                </div>
            </div>
        </div>
        </>
    )
}