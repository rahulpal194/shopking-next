"use client";
import { loginschema } from "@/features/schema/authschema";
import { useUserloginMutation } from "@/store/api/authapi";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Login (){
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: zodResolver(loginschema)})
    const [ userlogin,  ]  = useUserloginMutation()
    const router = useRouter()
    const onsubmit = async (data:any) => {
        
         try{
            const result = await userlogin(data).unwrap()
            toast.success(result.message)
            router.push("/")
        }
        catch(error){
            toast.error(error?.data?.errors?.validation)
        }
    }
    return (
        <section className="container my-10">
            <div className="max-w-[742px] w-full mx-auto">
                <div className="flex shadow-card rounded-2xl">
                    <div className="max-w-[360px] w-full hidden lg:block">
                        <Image className="w-full h-full" src={'/images/login.png'} width={500} height={500} alt="login_img"></Image>
                    </div>
                    <div className="p-4 sm:p-6 flex-1" >
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-primary text-center mb-3">Sign In</h2>
                            <p className="text-base font-medium text-center leading-none">Sign in to continue shopping</p>
                        </div>
                        <div className="flex flex-col mb-4">
                            <div className="flex justify-between">
                                <label htmlFor="email" className="text-sm font-medium">Phone</label>
                                <button className="text-sm font-medium underline text-primary">*Use Email Instead</button>
                            </div>
                            {/* <PhoneNumber register={register("phone")}/> */}
                            <input type="email" id="email" {...register("email")} className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                            {errors.email && <p className='text-[10px] text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col mb-3">
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                            <input type="password" id="password" {...register("password")} className="h-12 px-4 text-lg border border-[#D9DBE9] rounded-lg outline-none"/>
                            {errors.password && <p className='text-[10px] text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="remember" id="remember" className="custom-checkbox"/>
                                <label htmlFor="remember"  className="text-sm font-medium cursor-pointer">Remember me</label>
                            </div>
                            <Link href={''} className="text-sm font-semibold text-primary">Forgot Password</Link>
                        </div>
                        <button type="submit" className="w-full h-12 bg-primary rounded-full text-white mb-6">
                            Sign in
                        </button>
                    </form>
                    <p className="text-paragraph text-base font-medium text-center">Don’t have an account? <Link href={'/signup'} className="text-primary font-bold">Sign Up</Link></p>                
                    </div>
                </div>
            </div>
        </section>
    )
}