import { personalInfo } from "../data/portfolioData";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${personalInfo.email}`;

// Optional WhatsApp instant alert via CallMeBot (free for personal use).
// Setup: https://www.callmebot.com/blog/free-api-whatsapp-messages/
// 1. Add +34 644 44 71 67 on WhatsApp and send: "I allow callmebot to send me messages"
// 2. Copy your API key and add to .env → VITE_CALLMEBOT_API_KEY=your_key
const CALLMEBOT_API_KEY = import.meta.env.VITE_CALLMEBOT_API_KEY ?? "";
const WHATSAPP_PHONE = personalInfo.whatsapp;

function buildWhatsAppAlertText({ name, email, message }) {
  return [
    "📩 New Portfolio Message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

async function sendEmailNotification({ name, email, message }) {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfolio Contact: ${name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    throw new Error("Email delivery failed");
  }

  const data = await response.json();
  if (data.success !== "true" && data.success !== true) {
    throw new Error(data.message || "Email delivery failed");
  }
}

async function sendWhatsAppNotification({ name, email, message }) {
  if (!CALLMEBOT_API_KEY) return;

  const text = encodeURIComponent(buildWhatsAppAlertText({ name, email, message }));
  const url = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${text}&apikey=${CALLMEBOT_API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("WhatsApp alert failed");
  }
}

export async function submitContactForm(formData) {
  await sendEmailNotification(formData);

  try {
    await sendWhatsAppNotification(formData);
  } catch {
    // Email succeeded — WhatsApp is optional; don't fail the whole submission.
  }
}

export function getWhatsAppChatLink(name = "", message = "") {
  const text = encodeURIComponent(
    message.trim()
      ? `Hi Badhusha, I'm ${name}. ${message}`
      : "Hi Badhusha, I found your portfolio and would like to connect!"
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export const isWhatsAppAlertConfigured = Boolean(CALLMEBOT_API_KEY);
