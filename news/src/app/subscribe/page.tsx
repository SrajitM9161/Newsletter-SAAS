"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { DogIcon } from "lucide-react";
import { subscribe } from "@/actions/add.subscribe";

const Page = () => {
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await subscribe({ email: value, username });
      setLoading(false);

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("You are subscribed. 😎😎");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("An unexpected error occurred.");
    }

    setValue("");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="flex items-center space-x-2 pb-8">
        <h1 className="text-7xl capitalize text-[#ad5389]">{username}</h1>
        <h1 className="text-6xl font-bold text-[#C33764]">News</h1>
        <DogIcon size={32} />
        <h1 className="text-6xl font-bold text-[#1D2671]">Wave</h1>
      </div>

      <form
        className="flex w-full max-w-md border rounded-md overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your email"
          className="px-3 py-2 w-full text-gray-700 leading-tight focus:outline-none rounded-l-md"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-black text-white text-lg rounded-r-md hover:bg-[#463bbd] focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Page;
