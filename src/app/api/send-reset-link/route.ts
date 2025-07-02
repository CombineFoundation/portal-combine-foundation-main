// app/api/send-reset-link/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const resetLink = `https://portalcombine-foundation.vercel.app/reset-password?email=${email}`;

  try {
    await resend.emails.send({
      from: 'Combine Foundation <onboarding@resend.dev>',
      to: email,
      subject: '🔐 Reset Your Password',
      html: `
        <p>Hello,</p>
        <p>Click <a href="${resetLink}">here</a> to reset your password.</p>
        <p>If you did not request this, please ignore this email.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}