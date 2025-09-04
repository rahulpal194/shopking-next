import Link from "next/link";
import Image from "next/image";
export default function FooterLayout (){
    return (
    <footer className="footer-part pt-12 mb-12 lg:mb-0 bg-black">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                <div>
                    <Link href={""}><Image width={125} height={40} className="mb-6 w-auto h-6" src={'/images/logo.png'} alt="logo"/></Link>
                    <p className="text-base mb-3 text-white">Subscribe to our newsletter</p>
                    <form className="flex items-center rounded-full w-full h-10 p-1 mb-6 bg-white">
                        <input type="email" placeholder="Your email address" className="outline-none w-full h-full pl-2"/>
                        <button type="submit" className="capitalize text-xs font-medium rounded-full flex-shrink-0 py-2 px-2.5 text-white bg-primary">Subscribe</button>
                    </form>
                    <nav className="flex items-center gap-3 w-full max-w-[265px]">
                        <Link href={"#"}><Image width={130} height={44} className="rounded-lg w-full" src="/images/play-store.png" alt="app"/></Link>
                        <Link href={"#"}><Image width={121} height={44} className="rounded-lg w-full" src="/images/app-store.png" alt="app"/></Link>
                    </nav>
                </div>
                <div>
                    <div className="sm:w-fit sm:mx-auto">
                        <h3 className="capitalize text-lg font-semibold mb-4 text-white">Support</h3>
                        <nav className="flex flex-col items-start gap-3 [&_a]:text-sm">
                            <Link href={"#"} className="capitalize text-white hover:underline">Cookie setting</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">Terms & conditions</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">Privacy policy</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">About Us</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">contact Us</Link>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className="sm:w-fit md:mx-auto">
                        <h3 className="capitalize text-lg font-semibold mb-4 text-white">Legal</h3>
                        <nav className="flex flex-col items-start gap-3 [&_a]:text-sm">
                            <Link href={"#"} className="capitalize text-white hover:underline">Cookie setting</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">Terms & conditions</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">Privacy policy</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">About Us</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">contact Us</Link>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className="sm:w-fit sm:mx-auto">
                        <h3 className="capitalize text-lg font-semibold mb-4 text-white">Contact</h3>
                        <nav className="flex flex-col items-start gap-3 [&_a]:text-sm">
                            <Link href={"#"} className="capitalize text-white hover:underline">Cookie setting</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">Terms & conditions</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">Privacy policy</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">About Us</Link>
                            <Link href={"#"} className="capitalize text-white hover:underline">contact Us</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="py-6 mt-8 border-t border-[#A0A3BD]">
                <div className="container flex sm:flex-row flex-col gap-4 justify-between items-center">
                    <p className="text-sm text-center text-white">&copy; Tomato by <Link target="_blank" href={"https://inilabs.net/"}>iNiLabs</Link> 2025, All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
    )
}