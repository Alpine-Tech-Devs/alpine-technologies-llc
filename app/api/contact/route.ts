import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = (body.company ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return Response.json(
        { error: "Please provide a little more detail in your message." },
        { status: 400 }
      );
    }

    if (!resend || !contactToEmail || !contactFromEmail) {
      return Response.json(
        {
          error:
            "Email service is not configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    const subject = `New contact form submission from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[resend-send-error]", error);
      return Response.json(
        { error: "Unable to send message right now. Please try again." },
        { status: 500 }
      );
    }

    console.log("[resend-send-ok]", { id: data?.id, to: contactToEmail });

    return Response.json({ ok: true, id: data?.id ?? null }, { status: 200 });
  } catch {
    return Response.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
