"use server";

import { connectDb } from "@/lib/db";
import Subscriber from "@/models/subscriber.model";

interface GetSubscribersParams {
  newsLetterOwnerId: string;
}

export const getSubscribers = async ({ newsLetterOwnerId }: GetSubscribersParams): Promise<any[]> => {
  try {
    await connectDb();
    console.log("DB connected");

    // Log the query parameters
    console.log("Querying subscribers with newsLetterOwnerId: ", newsLetterOwnerId);

    // Explicitly match the `newsLetterOwnerId` field
    const subscribers = await Subscriber.find({ newsLetterOwnerId: { $eq: newsLetterOwnerId } });
    
    // Log the results of the query
    console.log("Subscribers fetched: ", subscribers);

    return subscribers;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Error fetching subscribers");
  }
};
