import SubscriberData from '@/shared/components/dashboard/data/subscriber.data'
import React from 'react'

const Page = () => {
  return (
    <div className=' w-full p-5 h-screen overflow-hidden'>
      <h1 className=' text-2xl font-medium'>
         Your Subscribers
      </h1>
      <p className=' pt-1 text-lg'> View and manage your Subscribers</p>
      <SubscriberData/>
    </div>
  )
}

export default Page
