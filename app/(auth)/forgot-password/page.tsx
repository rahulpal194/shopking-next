import PhoneInput from "@/components/PhoneInput";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword (){
    return (
        <section className="container my-10">
            <div className="max-w-[742px] w-full mx-auto">
                <div className="flex shadow-card rounded-2xl">
                    <div className="max-w-[360px] w-full hidden lg:block">
                        <Image className="w-full h-full" src={'/images/login.png'} width={500} height={500} alt="login_img"></Image>
                    </div>
                    <form className="p-4 sm:p-6 flex-1">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-primary text-center mb-3">Forgot Password</h2>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex justify-between">
                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                <button className="text-sm font-medium underline text-primary">*Use Email Instead</button>
                            </div>
                            <PhoneInput/>
                            {/* <input type="text" className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/> */}
                        </div>
                        <button className="w-full h-12 bg-primary rounded-full text-white mb-4 text-base font-bold ">
                            Get OTP
                        </button>
                        <p className="text-paragraph text-base font-medium text-center"><Link href={'/signup'} className="text-primary font-bold">Back to Sign in</Link></p>
                    </form>
                </div>
            </div>
        </section>
    )
}