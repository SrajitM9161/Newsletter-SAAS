"use client";
import { useUser } from '@clerk/nextjs';
import React from 'react';
import { Home } from 'lucide-react';
import DashboardItem from '@/app/Common/dashboard.item';
import Userplan from '@/app/Common/Userplan';
import Link from 'next/link';
const DashboardSidebar = () => {
  const { user } = useUser();

  return (
    <div className='p-2'>
      <div className='p-2 flex items-center rounded'>
        <span className='text-2xl'>
        <Link href="/" passHref> {/* Wrap Home icon in Link for / route */}
          <span className='text-2xl cursor-pointer'><Home /></span>
        </Link>
        </span>
        <h5 className='ml-2 text-xl capitalize' style={{ color: '#654ea3' }}>
          {user?.username}
        </h5>
      </div>
      <div>
        {/* Render main section items */}
        <DashboardItem bottomContent={false} />
        <Userplan/>
        {/* Render bottom section items */}
        <DashboardItem bottomContent={true} />
      </div>
    </div>
  );
};

export default DashboardSidebar;
