import MultiStepperComponent from "@/components/MultiStepperComponent";

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
           title:"On the way" 
        },
        {
           step:4,
           title:"Order Delivered" 
        }
    ]

    return (
        <section>
            <MultiStepperComponent currentstep="Order Delivered" steps={steps} completed={"true"}/>
        </section>
    )
}