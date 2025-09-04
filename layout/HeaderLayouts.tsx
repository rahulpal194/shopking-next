import Link from "next/link";
import Image from "next/image";
export default function HeaderLayouts (){
    return (
      <header className="shadow-header bg-white">
          <div className="py-4 flex gap-2 justify-between items-center container">
              <div className="flex gap-2 justify-between items-center">
                   <button className="lg:hidden flex items-center"><i className="icon-hum-burger text-2xl"></i></button>
                   <Link href="/"> 
                       <Image className="h-6 w-auto" src={'/images/logo.png'} width={100} height={100} alt="logo"></Image>
                   </Link>
              </div>
              <nav className="hidden lg:flex items-center gap-9">
                  <Link href={'/'} className="text-base font-semibold">Home</Link> 
                  <Link href={'/'} className="text-base font-semibold">Categories</Link> 
                  <Link href={'/'} className="text-base font-semibold">Offers</Link> 
              </nav>
              <form className="py-2 px-4 w-full lg:w-80 h-10.5 hidden lg:flex items-center gap-2 bg-[#EFF0F6] rounded-full">
                  <button><i className="icon-search"></i></button>
                  <input type="text" className="w-full h-full outline-none"/>
              </form>
              <div className="hidden lg:flex items-center gap-8">
                  <button>
                      <i className="icon-heart text-black text-xl"></i>
                  </button>
                  <button>
                      <i className="icon-user text-black text-xl"></i>
                  </button>
                  <button className="w-10.5 h-10.5 rounded-full bg-black">
                      <i className="icon-cart text-white text-xl"></i>
                  </button>
              </div>
          </div>
      </header>
    )
}