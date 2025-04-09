import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) { // No 'res' parameter
  try {
    const { email, subject, message } = await req.json(); // Ensure correct parsing
    console.log("Received:", email, subject, message);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [email], // Send only to the user
      subject: subject,
      html: `<h1>${subject}</h1>
             <p>Thank you for contacting us!</p>
             <p>New message submitted:</p>
             <p>${message}</p>`, // Use 'html' instead of 'react'
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
