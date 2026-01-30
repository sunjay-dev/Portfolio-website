import { sendemail } from "@/lib/mail";
import { isValidEmail } from "@/lib/validators";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All three fields are required" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a Valid email" }, { status: 400 });
    }

    const result = await sendemail({ name, email, message });

    if (!result.success) {
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Thanks for messaging!" }, { status: 200 });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
