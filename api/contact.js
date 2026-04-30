import { Resend } from "resend";
import rateLimit from "express-rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limit (2 requests per minute per IP)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 2,
  standardHeaders: true,
  legacyHeaders: false,
});

export default async function handler(req, res) {
  // Apply rate limit
  await new Promise((resolve, reject) =>
    limiter(req, res, (err) => (err ? reject(err) : resolve()))
  );

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, company } = req.body;

  // Honeypot bot protection
  if (company) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({ success: false });
  }
}
