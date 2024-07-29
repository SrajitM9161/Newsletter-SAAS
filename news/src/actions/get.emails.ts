"use server";

import { connectDb } from "@/lib/db";
import Email from "@/models/email.model";

// Function to get emails
export const getEmails = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const emails = await Email.find({ newsLetterOwnerId }).lean();
    return emails;
  } catch (error) {
    console.log(error);
  }
};

// Function to delete an email
export const deleteEmail = async ({
  emailId,
}: {
  emailId: string;
}) => {
  try {
    await connectDb();
    const result = await Email.deleteOne({ _id: emailId });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete email");
  }
};
