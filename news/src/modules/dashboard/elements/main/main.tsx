"use client"

import DashboardOverViewCard from '@/app/Common/DashBoardOverviewCard'
import SubscribersChart from '@/Charts/Chart'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { Pen, Link as LinkIcon, Copy } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Main = () => {
    const { user } = useUser()
    const [copied, setCopied] = useState(false)

    const handleCopyClick = () => {
        const smallText = document.querySelector(".copy-text") as HTMLElement
        if (smallText) {
            const textToCopy = smallText.innerText
            navigator.clipboard.writeText(textToCopy).then(() => {
                setCopied(true)
                toast.success("Copied")
                setTimeout(() => {
                    setCopied(false)
                }, 2000)
            })
        }
    }

    return (
        <div className='relative p-5 w-full min-h-screen bg-gray-900'>
            <div className="text-2xl text-white font-medium">
                🌟 Hiiii... <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#654ea3] to-[#eaafc8]">{user?.fullName}</span> 🌟
            </div>
            <p className="text-sm text-white mt-4">
                📬 Welcome to our newswave! Stay tuned for the latest updates, tips, and exclusive content right here. 🌐 Sign up and never miss a thing! 🚀
            </p>

            <div className='w-full flex mt-5'>
                <div className='w-[65%] min-h-[88vh] pr-5'>
                    <DashboardOverViewCard />
                    <SubscribersChart />
                </div>
                <div className='w-[35%] flex flex-col items-end'>
                    {/* Other content can go here if needed */}
                </div>
            </div>

            {/* Newsletter button and resources outside the main container */}
            <div className='fixed top-5 right-5 flex flex-col items-end space-y-5'>
                <Button className='bg-black text-white text-lg rounded px-6 mt-4 hover:bg-[#463bbd]'>
                    <Pen className='mr-1 ml-[-5px]' />
                    Start Writing
                </Button>

                <div className="bg-gradient-to-r from-[#654ea3] to-[#eaafc8] p-5 rounded">
                    <h5 className="text-xl font-medium text-black">Resources</h5>
                    <div className="border rounded p-5 my-3 bg-white">
                        {/* home page url */}
                        <div>
                            <h4 className="font-medium text-black">Home page</h4>
                            <div
                                className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer"
                                onClick={handleCopyClick}
                            >
                                <small
                                    className={`w-[70%] text-sm text-black overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                                        copied ? "bg-blue-200" : "bg-transparent"
                                    }`}
                                >
                                    {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username=
                                    {user?.username}
                                </small>
                                <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                                    <Copy className="text-lg" />
                                    <span className="pl-1 text-black">copy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
