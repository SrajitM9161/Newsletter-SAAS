"use server"

import { connectDb } from "@/lib/db";
import Email from "@/models/email.model";

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
