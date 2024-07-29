"use client";
import React, { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const DocsPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    toast(
      (t) => (
        <span>
          We are working on docs that will help you create your own Newsletter website!
          <Button
            className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => {
              toast.dismiss(t.id);
              router.push("/");
            }}
          >
            OK
          </Button>
        </span>
      ),
      { duration: 5000 }
    );
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Toaster />
      <h1 className="text-4xl font-bold mb-4">Docs</h1>
      <p className="text-lg mb-4">We are currently working on this page. Stay tuned!</p>
      <p> We are working on docs that will help you create your own Newsletter website!</p>
      <div className="minion-hammering text-6xl">🔨</div>
      <Link href="/" >
       <Button className=" bg-black hover text-white hover:bg-[#463bbd]">
        Back To main
       </Button>
       </Link>
      <style jsx>{`
        .minion-hammering {
          animation: hammering 1s infinite;
        }

        @keyframes hammering {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-30deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DocsPage;
