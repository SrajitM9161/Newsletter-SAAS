"use client";
import { useEffect, useState } from "react";
import { ArrowUpNarrowWide } from "lucide-react";
import { SubscribersAnalytics } from "@/actions/subscriber.analytics";
import { Loader2 } from "lucide-react";

const DashboardOverViewCard = () => {
  const [loading, setLoading] = useState(true);
  const [lastMonthSubscribers, setLastMonthSubscribers] = useState(0);
  const [previousLastMonthSubscribers, setPreviousLastMonthSubscribers] =
    useState(0);
  const [comparePercentage, setComparePercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SubscribersAnalytics();
        if (response) {
          const lastMonthData = response.last7Months[11]; // Assuming the 6th month is the last complete month
          const previousLastMonthData = response.last7Months[11]; // Assuming the 5th month is the previous complete month
          setLastMonthSubscribers(lastMonthData.count);
          setPreviousLastMonthSubscribers(previousLastMonthData.count);

          if (previousLastMonthData.count > 0) {
            setComparePercentage(
              ((lastMonthData.count - previousLastMonthData.count) /
                previousLastMonthData.count) *
                100
            );
          } else {
            setComparePercentage(100);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subscribers analytics data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full xl:py-4 flex bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4">
      {/* Subscribers */}
      <div className="w-[33.33%] border-r border-white p-5 text-lg">
        <h5 className="text-lg font-semibold text-white">Subscribers</h5>
        <div className="w-full flex items-center justify-between mt-2">
          <span className="font-medium text-xl text-black">
            {loading ? <Loader2 className="animate-spin" /> : lastMonthSubscribers}
          </span>
          <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
            <ArrowUpNarrowWide name="arrow-up" className="text-[#21C55D]" />
            <span className="text-sm pl-1 text-black">{loading ? "..." : `${comparePercentage.toFixed(2)}%`}</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] mt-2 text-white">
          from {loading ? "..." : previousLastMonthSubscribers} (last 4 weeks)
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
