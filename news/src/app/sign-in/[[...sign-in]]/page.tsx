"use client"
import { SignIn } from "@clerk/nextjs";

export default function Page() {
   return(
    <div className=" w-full h-screen items-center justify-center ">
        <SignIn/>
    </div>
   )
}
