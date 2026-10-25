import { sendemail } from "@/lib/mail";
import { parseContactForm } from "@/lib/validators";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = parseContactForm(body);

    if (!result.success) {
      return NextResponse.json(
        { message: result.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const { email, message } = result.output;

    const sendResult = await sendemail({ email, message });

    if (!sendResult.success) {
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Thanks for messaging!" }, { status: 200 });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
