import "server-only";
import { Resend } from "resend";
import { emailTemplate } from "./templete";

type Props = {
  name: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export async function sendemail({ name, email, message }: Props) {
  if (!process.env.RESEND_EMAIL_API_KEY) {
    throw new Error("RESEND_EMAIL_API_KEY missing");
  }

  if (!process.env.SENDER_EMAIL || !process.env.RECEIVING_EMAIL) {
    throw new Error("Email environment variables are not configured");
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL as string,
      to: process.env.RECEIVING_EMAIL as string,
      subject: `Message from ${name} from Portfolio Website`,
      html: emailTemplate({ name, email, message }),
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
