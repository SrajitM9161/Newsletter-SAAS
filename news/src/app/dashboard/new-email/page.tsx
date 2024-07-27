"use client"


import Link from "next/link";
import {  useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react";
import Emaileditor from "@/shared/components/editor/email.editor";
const Page = () => {
  const searchParams=useSearchParams();
  const Subject:string =searchParams.get("subject")!;
  const subjectTitle=Subject.replace(/-/g," ")
  return (
    <div className=" w-full flex bg-white">
      <div className=" w-full p-5 bg-white rounded-r-xl">
        {/* back arrow */}

        <Link
        href={"/dashboard/write"}
        className=" opacity-[.7] w-min flex text-xl items-center"
        >
        <span className=" text-black"><ArrowLeft/> </span>
        <span className=" text-black"> Exit</span>
        </Link>
        {/* email workspace */}
        <div className=" my-5">
        <Emaileditor subjectTitle={subjectTitle}/>
        </div>
      </div>
      
    </div>
  )
}

export default Page
