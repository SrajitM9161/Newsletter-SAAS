"user server"

import { connectDb } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs/server";

interface SubscribeParams {
  email: string;
  username: string;
}

export const subscribe = async ({ email, username }: SubscribeParams) => {
  try {
    await connectDb();

    // Fetch all users
    const allUsers = await clerkClient.users.getUserList();

    // Find the newsletter owner
    // const newsletterOwner = allUsers.find((i) => i.username === username);
  } catch (error) {
    console.error("Error in subscribe function:", error);
    // Handle the error appropriately (logging, returning a specific error message, etc.)
    throw new Error("Failed to subscribe user. Please try again later.");
  }
};
