"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-md p-8 rounded shadow-md">
        <SignUp />
      </div>
    </div>
  );
}
