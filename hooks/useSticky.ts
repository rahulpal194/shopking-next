
'use client'
import { useEffect, useState } from "react";

export default function useSticky(){

    const [isSticky, setIsSticky] = useState(false)
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 0){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    },[])

    return {isSticky}
}