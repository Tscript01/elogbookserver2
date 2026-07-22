"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const resend_1 = require("resend");
if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing from environment variables");
}
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL || "Elogbook Team <onboarding@resend.dev>";
async function sendEmail(to, subject, html) {
    try {
        const { data, error } = await resend.emails.send({
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
    }
    catch (error) {
        console.error("Unexpected error sending email:", error);
        return { success: false, error };
    }
}
//# sourceMappingURL=resend.js.map