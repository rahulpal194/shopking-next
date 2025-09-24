'use client'
import MultiStepperComponent from "@/components/MultiStepperComponent";
import OrderSummaryComponent from "@/components/OrderSummaryComponent";
import paymentMethods from "@/json/payment.json"
import useModal from "@/hooks/useModal";
import { useState } from "react";

export default function Payment (){
    const {openModal , closeModal} = useModal()
    const [paymentMethod, setPaymentMethod] = useState('')
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
        <section className="container">
            <div className="flex items-start gap-2 mb-12">
                <button>
                    <i className="icon-undo text-2xl text-primary"></i>
                </button>
                <div>
                    <p className="text-base font-semibold leading-5">Payment Information</p>
                    <span className="text-paragraph text-xs font-normal">Select your payment method</span>
                </div>
            </div>
            <div className="mb-12 mx-4">
                <MultiStepperComponent currentstep="payment" steps={steps}/>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8">
                    <div className="mb-6 p-4 rounded-2xl shadow-card">
                        <h6 className="text-base font-semibold mb-4">Select Payment Method</h6>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                            { paymentMethods.map((payment)=>(
                                <div key={payment.id} onClick={()=>setPaymentMethod(payment.title)} className={`payment-method ${paymentMethod== payment.title? 'active':''}`}>
                                    <img className="w-auto h-6 mb-2.5 mx-auto" src={payment.img} alt="" />
                                    <p className="text-xs font-medium capitalize">{payment.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className="h-12 px-6 rounded-full text-base font-bold bg-[#F7F7FC]">Back to Checkout</button>
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
        </section>

        <div className="modal" id="coupon">
            <div className="modal-content !max-w-[360px]">
                <button onClick={()=>closeModal('coupon')} className="absolute top-4 right-4"><i className="icon-close-circle text-xl text-red-500"></i></button>
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

        <div className="modal" id="payment-success">
            <div className="modal-content !max-w-[360px] p-4">
                <button onClick={()=>closeModal('payment-success')} className="absolute top-4 right-4"><i className="icon-close-circle text-xl text-red-500"></i></button>
                <h6 className="text-center mb-6 mt-4">Thank you for your order!</h6>
                <div className="max-w-[120px] w-full mx-auto aspect-square mb-6">
                    <img className="w-full h-full object-cover" src="/images/gif/success.gif" alt="" />
                </div>
                <p className="text-base text-center font-semibold mb-4">Your order is confirmed</p>
                <button className="h-12 w-full rounded-full text-base font-bold bg-primary text-white">Go to order detials</button>
            </div>
        </div>
        </>
    )
}