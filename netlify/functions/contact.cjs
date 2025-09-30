const fetch = globalThis.fetch;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST', 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'This endpoint only accepts POST requests.' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON payload.' })
    };
  }

  const { name, email, subject, message } = body;
  const error = validate({ name, email, subject, message });
  if (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error })
    };
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const FROM_EMAIL = process.env.BREVO_FROM_EMAIL;
  const FROM_NAME = process.env.BREVO_FROM_NAME || 'GMillsWeb';
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

  const emailPayload = {
    sender: { email: FROM_EMAIL, name: FROM_NAME },
    to: [{ email: TO_EMAIL }],
    subject: `[Website] ${subject}`,
    htmlContent: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong><br/>${nl2br(escapeHtml(message))}</p>
    `,
    textContent: `
Name: ${name}
Email: ${email}
Subject: ${subject}

${message}
    `
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

    const responseText = await res.text();
    if (!res.ok) {
      console.error('Brevo error:', res.status, responseText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Failed to send message.', details: responseText })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('Server error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' })
    };
  }
};

function validate({ name, email, subject, message }) {
  if (!name || name.trim().length < 2) return 'Please enter your name.';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email.';
  if (!subject || subject.trim().length < 3) return 'Subject is too short.';
  if (!message || message.trim().length < 10) return 'Message is too short.';
  return null;
}

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