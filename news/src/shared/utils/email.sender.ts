"use server"
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";

interface Props {
  userEmail: string[];
  subject: string;
  content: string;
}

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_SECRET_ID,
  secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
  region: "ap-south-1", // Adjust as per your AWS region
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const adminMail = "srajitmishra121@gmail.com"; // Replace with your admin email

// Creating nodemailer transporter
const transporter = nodemailer.createTransport({
  SES: ses,
});

export const sendEmail = async ({ userEmail, subject, content }: Props) => {
  try {
    const res = await transporter.sendMail({
      from: adminMail,
      to: userEmail,
      subject: subject,
      html: content,
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
