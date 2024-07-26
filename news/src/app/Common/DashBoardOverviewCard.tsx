"use client";
import { ArrowUpNarrowWide } from 'lucide-react'; // Assuming lucide-react is installed

const DashboardOverViewCard = () => {
  const loading = false; // For demonstration purposes
  const lastMonthSubscribers = 100; // Example static data
  const previousLastMonthSubscribers = 50; // Example static data

  let comparePercentage = 0;

  if (previousLastMonthSubscribers > 0) {
    comparePercentage =
      ((lastMonthSubscribers - previousLastMonthSubscribers) /
        previousLastMonthSubscribers) *
      100;
  } else {
    comparePercentage = 100;
  }

  return (
    <div className="w-full xl:py-4 flex bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4">
      {/* Subscribers */}
      <div className="w-[33.33%] border-r border-white p-5 text-lg">
        <h5 className="text-lg font-semibold text-white">Subscribers</h5>
        <div className="w-full flex items-center justify-between mt-2">
          <span className="font-medium text-xl text-black">
            {loading ? "..." : lastMonthSubscribers}
          </span>
          <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
            <ArrowUpNarrowWide name="arrow-up" className="text-[#21C55D]" />
            <span className="text-sm pl-1 text-black">{comparePercentage}%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] mt-2 text-white">
          from {previousLastMonthSubscribers} (last 4 weeks)
        </small>
      </div>
      {/* Open Rate */}
      <div className="w-[33.33%] border-r border-white p-5 text-lg mx-2">
        <h5 className="text-lg font-semibold text-white">Open Rate</h5>
        <div className="w-full flex items-center justify-between mt-2">
          <span className="font-medium text-xl text-black">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <ArrowUpNarrowWide name="minus" className="text-xl text-black" />
            <span className="text-sm pl-1 text-black">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] mt-2 text-white">
          from 0 (last 4 weeks)
        </small>
      </div>
      {/* Click Rate */}
      <div className="w-[33.33%] p-5 text-lg">
        <h5 className="text-lg font-semibold text-white">Click Rate</h5>
        <div className="w-full flex items-center justify-between mt-2">
          <span className="font-medium text-xl text-black">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <ArrowUpNarrowWide name="minus" className="text-xl text-black" />
            <span className="text-sm pl-1 text-black">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] mt-2 text-white">
          from 0 (last 4 weeks)
        </small>
      </div>
    </div>
  );
};

export default DashboardOverViewCard;
