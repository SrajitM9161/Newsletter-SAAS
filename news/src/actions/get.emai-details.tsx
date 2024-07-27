"use server"
import { connectDb } from "@/lib/db";
import Email from "@/models/email.model";

export const GetEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    }).lean(); // This returns a plain JavaScript object instead of a Mongoose document
    return email;
  } catch (error) {
    console.log(error);
  }
};
