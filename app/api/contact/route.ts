type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    console.log("[contact-submission]", {
      name,
      email,
      company,
      message,
      receivedAt: new Date().toISOString(),
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
