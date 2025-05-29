// app/api/contact/route.ts

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional debug logs to help diagnose
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS length:", process.env.EMAIL_PASS?.length);

    await transporter.verify()
      .then(() => console.log(" Nodemailer is ready to send mail"))
      .catch((err) => console.error(" Transporter verification error:", err));

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(" Email send error:", error);
    return NextResponse.json(
      { success: false, message: 'Email could not be sent.' },
      { status: 500 }
    );
  }
}
