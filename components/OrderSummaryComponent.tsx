export default function OrderSummaryComponent (){
    return (
        <div className="shadow-card rounded-2xl">
            <h6 className="text-lg font-semibold p-4">Order Summery</h6>
            <ul className="border-t border-[#EFF0F6] p-4 flex flex-col gap-4">
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
            <h6 className="border-t border-[#EFF0F6] text-lg font-semibold p-4 pt-3 flex justify-between"><span>Total</span><span>$132.00</span></h6>
        </div>
    )
}