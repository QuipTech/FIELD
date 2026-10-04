import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { config } from "./config";
import type { Lead } from "./validate";

const ses = new SESv2Client({});

export const sendLeadEmail = async (lead: Lead): Promise<void> => {
  const transcript = lead.transcript.length
    ? lead.transcript.map((message) => `${message.role === "user" ? "Visitor" : "Assistant"}: ${message.text}`).join("\n\n")
    : "(no chat transcript)";

  const body = [
    "New lead from the FIELD website chat.",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company}`,
    "",
    "Message:",
    lead.message || "(none)",
    "",
    "Chat transcript:",
    transcript,
  ].join("\n");

  await ses.send(
    new SendEmailCommand({
      FromEmailAddress: config.sesFromEmail,
      Destination: { ToAddresses: [config.leadNotifyEmail] },
      ReplyToAddresses: [lead.email],
      Content: {
        Simple: {
          Subject: { Data: `Website chat lead: ${lead.name} (${lead.company})`, Charset: "UTF-8" },
          Body: { Text: { Data: body, Charset: "UTF-8" } },
        },
      },
    }),
  );
};
