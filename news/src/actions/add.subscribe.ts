"use server";

import { connectDb } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs/server";
import type { User } from "@clerk/clerk-sdk-node";
import Subscriber from "@/models/subscriber.model";

interface SubscribeParams {
  email: string;
  username: string;
}

interface SubscribeResponse {
  error?: string;
}

export const subscribe = async ({ email, username }: SubscribeParams): Promise<SubscribeResponse> => {
  try {
    await connectDb();

    // Fetch all users
    const paginatedUsers = await clerkClient.users.getUserList();
    const allUsers: User[] = paginatedUsers.data; // Extracting the users from the paginated response

    // Find the newsletter owner
    const newsletterOwner = allUsers.find((user: User) => user.username === username);

    if (!newsletterOwner) {
      console.log(`Username ${username} is not valid!`);
      return { error: "Username is not valid!" };
    }

    console.log(`Newsletter owner ID: ${newsletterOwner.id}`);

    // Check if subscriber exists
    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsletterOwnerId: newsletterOwner.id,
    });

    if (isSubscriberExist) {
      console.log(`Email ${email} already exists for newsletter owner ${newsletterOwner.id}!`);
      return { error: "Email already exists!" };
    }

    await Subscriber.create({
      email,
      newsletterOwnerId: newsletterOwner.id,
    });

    return {};
  } catch (error) {
    console.error("Error in subscribe function:", error);
    return { error: "Failed to subscribe user. Please try again later." };
  }
};
