"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-md p-8  rounded shadow-md">
        <SignIn />
      </div>
    </div>
  );
}
