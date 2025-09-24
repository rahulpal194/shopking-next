
import PhoneInput from "@/components/PhoneInput";
import Image from "next/image";
import Link from "next/link";

export default function Signup (){
    return (
        <section className="container my-10">
            <div className="max-w-[742px] w-full mx-auto">
                <div className="flex shadow-card rounded-2xl">
                    <div className="max-w-[360px] w-full hidden lg:block">
                        <Image className="w-full h-full" src={'/images/login.png'} width={500} height={500} alt="login_img"></Image>
                    </div>
                    <form className="p-4 sm:p-6 flex-1">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-primary text-center mb-3">Sign Up</h2>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <div className="flex justify-between">
                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                <button className="text-sm font-medium underline text-primary">*Use Email Instead</button>
                            </div>
                            <PhoneInput/>
                            {/* <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/> */}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                            <input type="password" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                        </div>
                        <button className="mt-2 w-full h-12 bg-primary rounded-full text-white mb-6">
                            Sign in
                        </button>
                        <p className="text-paragraph text-base font-medium text-center">Already have an account? <Link href={'/login'} className="text-primary font-bold">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </section>
    )
}