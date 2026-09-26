import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  if (!transporter && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

const SENDER_EMAIL = process.env.SENDER_EMAIL || "Elogbook Team <no-reply@elogbook.com>";

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const client = getTransporter();
    if (!client) {
      console.warn("SMTP credentials not configured. Email skipped:", { to, subject });
      return { success: false, error: "SMTP credentials are not configured" };
    }

    const info = await client.sendMail({
      from: SENDER_EMAIL,
      to,
      subject,
      html,
    });

    return { success: true, data: info };
  } catch (error) {
    console.error("Unexpected error sending email:", error);
    return { success: false, error };
  }
}