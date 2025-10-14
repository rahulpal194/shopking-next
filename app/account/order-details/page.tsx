import MultiStepperComponent from "@/components/MultiStepperComponent";
import Link from "next/link";

export default function OrderDetails (){
    const steps = [
        {
           step:1,
           title:"Order Pending" 
        },
        {
           step:2,
           title:"Order Confirmed" 
        },
        {
           step:3,
           title:"Order Onway" 
        },
        {
           step:4,
           title:"Order Delivered" 
        }
    ]

    return (
        <section>
            <h3 className="text-primary text-lg font-bold mb-6 leading-tight flex items-center gap-4">
                <Link href={""}><i className="icon-undo text-2xl"></i> </Link>Request Return</h3>
            <div className="shadow-card p-4 sm:p-6 rounded-2xl mb-6">
                <div className="text-center mb-6">
                    <h3 className="text-[22px] font-semibold mb-4 leading-tight">Thank You</h3>
                    <p className="text-sm font-medium mb-3">Your Order status is as follows</p>
                    <p className="text-sm font-semibold">Order ID: <span className="">#16532478965</span></p>
                </div>
                <MultiStepperComponent currentstep="Order Confirmed" steps={steps} completed={"true"}/>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
                        <div className="border border-[#EFF0F6] rounded-2xl p-4">
                        <ul className="flex flex-col gap-2.5">
                            <li className="flex gap-2">
                                <span className="text-sm font-semibold capitalize w-28 flex-shrink-0">Order ID:</span>
                                <span className="text-sm font-semibold capitalize">#2107253</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sm font-semibold capitalize w-28 flex-shrink-0">Order Date:</span>
                                <span className="text-sm font-normal capitalize">04:41 PM, 21-07-2025</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sm font-semibold capitalize w-28 flex-shrink-0">Order Type:</span>
                                <span className="text-sm font-normal capitalize">Delivery</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sm font-semibold capitalize w-28 flex-shrink-0">Order Status:</span>
                                <span className="text-sm font-normal capitalize text-red-500">Canceled</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sm font-semibold capitalize w-28 flex-shrink-0">Payment Status:</span>
                                <span className="text-sm font-normal capitalize px-2 rounded-3xl text-[#FB4E4E] bg-[#FFE8E8]">Unpaid</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sm font-semibold capitalize w-28 flex-shrink-0">Payment Method:</span>
                                <span className="text-sm font-normal capitalize">Cash On Delivery</span>
                            </li>
                        </ul>
                        </div>
                        <div className="border border-[#EFF0F6] rounded-2xl p-4">
                            <ul className="flex flex-col gap-2.5">
                            <li className="flex flex-wrap sm:flex-nowrap gap-2">
                                <span className="text-sm font-semibold capitalize w-20 flex-shrink-0">Name:</span>
                                <span className="text-sm font-normal capitalize">Jonathon Doe</span>
                            </li>
                            <li className="flex flex-wrap sm:flex-nowrap gap-2">
                                <span className="text-sm font-semibold capitalize w-20 flex-shrink-0">Phone:</span>
                                <span className="text-sm font-normal capitalize">012365478963</span>
                            </li>
                            <li className="flex flex-wrap sm:flex-nowrap gap-2">
                                <span className="text-sm font-semibold capitalize w-20 flex-shrink-0">Email:</span>
                                <span className="text-sm font-normal capitalize">jonathon.doe@gmail.com</span>
                            </li>
                            <li className="flex flex-wrap sm:flex-nowrap gap-2">
                                <span className="text-sm font-semibold capitalize w-20 flex-shrink-0">Shipping Address:</span>
                                <span className="text-sm font-normal capitalize">House:30, Road:17, Rupnagar Residential Area, Mirpur-2 Dhaka District - Dhaka City - Bangladesh</span>
                            </li>
                            </ul>
                        </div>                  
                    </div>
                    <div className="col-span-12 md:col-span-7">
                        <div className="border border-[#EFF0F6] rounded-2xl">
                            <h6 className="text-lg font-semibold p-4 text-center border-b border-[#EFF0F6]">Order Summery</h6>
                            <ul className="border-b border-[#EFF0F6] flex flex-col">
                                <li className="py-4 mx-4 flex gap-3 border-b last:border-0 border-dashed border-gray-100">
                                    <img src="https://d91ztyz4qy326.cloudfront.net/shopking/536/conversions/1-thumb.png" alt="product" className="w-14 h-14 object-cover rounded-md flex-shrink-0"/>
                                    <div className="flex-auto overflow-hidden">
                                        <h4 className="text-sm capitalize whitespace-nowrap overflow-hidden text-ellipsis">Essential Hat</h4>
                                        <p className="text-sm overflow-hidden">Black | S</p>
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex items-center gap-8">
                                                <span className="text-sm font-semibold">$60.00</span>
                                                <span className="text-sm font-medium">Quantity: 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-4 mx-4 flex gap-3 border-b last:border-0 border-dashed border-gray-100">
                                    <img src="https://d91ztyz4qy326.cloudfront.net/shopking/536/conversions/1-thumb.png" alt="product" className="w-14 h-14 object-cover rounded-md flex-shrink-0"/>
                                    <div className="flex-auto overflow-hidden">
                                        <h4 className="text-sm capitalize whitespace-nowrap overflow-hidden text-ellipsis">Essential Hat</h4>
                                        <p className="text-sm overflow-hidden">Black | S</p>
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex items-center gap-8">
                                                <span className="text-sm font-semibold">$60.00</span>
                                                <span className="text-sm font-medium">Quantity: 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="border-b border-[#EFF0F6] p-4 flex flex-col gap-4">
                                <li className="flex items-center justify-between">
                                    <span>Subtotal</span>
                                    <span>$240.00</span>
                                </li >
                                <li className="flex items-center justify-between">
                                    <span>Tax</span>
                                    <span>$12.00</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Shipping Charge</span>
                                    <span>$0.00</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Discount</span>
                                    <span>$0.00</span>
                                </li>
                            </ul>
                            <div className="text-lg font-semibold p-4 pt-3 flex justify-between"><span>Total</span><span>$132.00</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start gap-6">
                <button className="px-6 h-12 rounded-full bg-[#1AB759] text-base font-bold text-white">Pay Now</button>
                <button className="px-6 h-12 rounded-full bg-primary text-base font-bold text-white">Download Receipt</button>
            </div>
        </section>
    )
}