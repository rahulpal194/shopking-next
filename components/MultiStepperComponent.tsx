import Link from "next/link";

export default function MultiStepperComponent ({currentstep,steps}:any){
     const getCurrentStepIndex = () => {
     return steps.findIndex((step:any) => step.title.toLowerCase() === currentstep.toLowerCase());
    };
    const currentIndex = getCurrentStepIndex()
  
    return (
        <section className="max-w-[480px] w-full mx-auto pb-10">
            <ul className="flex items-center justify-center multi-step">
                { steps.map((step:any,index:any)=>(
                <li key={index} className={`w-full flex items-center after:w-full after:content-[''] after:h-1 last:w-fit ${index < currentIndex ? 'after:bg-[#2AC769]' : 'after:bg-gray-200'}`}>
                    <Link href={`/${step.title}`} className={`${index < currentIndex ? 'bg-[#2AC769] border-[#2AC769]' : index === currentIndex  ? 'bg-white border-[#2AC769]'  : 'bg-[#D9DBE9] border-gray-300'}  border-4  step w-7.5 h-7.5 rounded-full flex justify-center items-center flex-shrink-0 relative`}>
                        <i className={`${index < currentIndex ? '!block':'!hidden'} icon-fill-check text-xl text-white`}></i>
                        <span className="absolute -bottom-8 sm:whitespace-nowrap">{step.title}</span>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    )
}