"use client";

import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { getSubscribers } from "@/actions/get.subscriber";

const useSubscriberData = () => {
  const [data, setData] = useState<any[]>([]);
  const { user } = useClerk();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      getSubscribersData();
    }
  }, [user]);

  const getSubscribersData = async () => {
    try {
      if (user?.id) {
        console.log("Fetching subscribers for user ID: ", user.id);
        const res = await getSubscribers({ newsLetterOwnerId: user.id });
        if (res) {
          console.log("Fetched Subscribers: ", res); // Log fetched data
          setData(res);
        } else {
          console.log("No data fetched");
        }
      }
    } catch (error) {
      console.error("Error fetching subscribers: ", error);
    } finally {
      setLoading(false); // Ensure loading state is set to false after the request completes
    }
  };

  return { data, loading };
};

export default useSubscriberData;
