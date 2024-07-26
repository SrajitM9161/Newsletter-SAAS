"use client"

import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import DashboardSidebar from "@/components/global/sidebar";
import { Toaster } from "react-hot-toast";
interface ProviderProps{
    children:React.ReactNode
}


export default function Providers({children}:ProviderProps){
    const pathname=usePathname();
     const {isLoaded} = useUser();

     if(!isLoaded){
        return null;
     }
    return(
        <NextUIProvider>
            {pathname !=="/dashboard/new-email" && pathname !=="/" && pathname !=="/sign-up" && pathname !=="/subscribe" && pathname !=="/sign-in" ?(
            <div className=" w-full flex">
              <div className=" w-[200px] h-screen overflow-y-scroll">
                <DashboardSidebar/>
              </div>
              {children}
            </div>
            ):(
                <>
                {children}
                </>
            )}
            <Toaster position="top-center" reverseOrder={false}/>
        </NextUIProvider>
    )
}