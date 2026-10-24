import "server-only";
import { Resend } from "resend";
import { emailTemplate } from "./templete";

type Props = {
  email: string;
  message: string;
};

// Created lazily so a missing API key doesn't crash the build;
// requests are rejected with a clear error in sendemail instead.
let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_EMAIL_API_KEY);
  return _resend;
}

export async function sendemail({ email, message }: Props) {
  if (!process.env.RESEND_EMAIL_API_KEY) {
    throw new Error("RESEND_EMAIL_API_KEY missing");
  }

  if (!process.env.SENDER_EMAIL || !process.env.RECEIVING_EMAIL) {
    throw new Error("Email environment variables are not configured");
  }

  try {
    const { error } = await getResend().emails.send({
      from: process.env.SENDER_EMAIL as string,
      to: process.env.RECEIVING_EMAIL as string,
      replyTo: email,
      subject: `Portfolio — new message`,
      html: emailTemplate({ email, message }),
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
