import { Resend } from "resend";

let resendClient: Resend | null = null;
function getResendClient(): Resend | null {
  if (!resendClient && process.env.RESEND_API_KEY) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

const SENDER_EMAIL = process.env.SENDER_EMAIL || "Elogbook Team <onboarding@resend.dev>";

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const client = getResendClient();
    if (!client) {
      console.warn("RESEND_API_KEY not configured. Email skipped:", { to, subject });
      return { success: false, error: "RESEND_API_KEY is not configured" };
    }

    const { data, error } = await client.emails.send({
      from: SENDER_EMAIL,
      to,
      subject,
      html
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Unexpected error sending email:", error);
    return { success: false, error };
  }
}