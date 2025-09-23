// src/routes/api/contact/+server.js
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

//import fetch from 'node-fetch'; // in Node runtimes this may be global

const BREVO_API_KEY = env.BREVO_API_KEY;
const FROM_EMAIL = env.BREVO_FROM_EMAIL;
const FROM_NAME = env.BREVO_FROM_NAME || 'GMillsWeb';
const TO_EMAIL = env.CONTACT_TO_EMAIL;

function validate(body) {
  if (!body) return 'Missing payload';
  const { name, email, subject, message } = body;
  if (!name || name.length < 2) return 'Please enter your name';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email';
  if (!subject || subject.length < 3) return 'Subject is too short';
  if (!message || message.length < 10) return 'Message is too short';
  return null;
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: 'This endpoint accepts POST requests only. Use POST to submit the contact form.' }),
    { status: 405, headers: { 'Content-Type': 'application/json', 'Allow': 'POST' } }
  );
}


export async function POST({ request }) {
  const body = await request.json();
  const err = validate(body);
  if (err) return json({ error: err }, { status: 400 });

  // Basic rate-limiting by IP (in-memory) — for production use Redis or similar
  // omitted here for brevity; implement as needed.

   const emailPayload = {
    sender: { email: FROM_EMAIL, name: FROM_NAME },
    to: [{ email: TO_EMAIL }],
    subject: `[Website] ${body.subject}`,
    htmlContent: `<p>${body.message}</p>`,
    textContent: body.message
  };


  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY
    },
    body: JSON.stringify(emailPayload)
  });


    if (!res.ok) {
      const errText = await res.text();
      console.error('Brevo error', res.status, errText);
      return json({ error: 'Failed to send message' }, { status: 502 });
    }

    return json({ success: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return json({ error: 'Server error' }, { status: 500 });
  }
}

// simple helpers
function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function nl2br(str = '') {
  return str.replace(/\n/g, '<br/>');
}