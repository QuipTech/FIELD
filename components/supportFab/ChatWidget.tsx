"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { LeadForm } from "@/components/supportFab/LeadForm";
import { useTurnstile } from "@/components/common/useTurnstile";
import {
  MAX_MESSAGE_LENGTH,
  sendChatMessage,
  submitLead,
  type ChatApiMessage,
  type ChatAuth,
  type LeadDetails,
} from "@/lib/chatApi";

type Message = {
  role: "bot" | "user";
  text: string;
  // Local messages (greeting, errors, confirmations) are shown but never sent to the API.
  local?: boolean;
};

const INITIAL_MESSAGE: Message = {
  role: "bot",
  text: "Hi, I'm the FIELD support assistant. Ask about pricing, security, a demo, or anything else — I'll point you in the right direction.",
  local: true,
};

const UNAVAILABLE_REPLY =
  "Sorry, I can't connect right now. Please try again in a moment, or reach the team on our contact page.";

const toApiMessages = (messages: Message[]): ChatApiMessage[] =>
  messages
    .filter((message) => !message.local)
    .map((message) => ({ role: message.role === "bot" ? "assistant" : "user", text: message.text }));

export const ChatWidget = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const turnstile = useTurnstile();

  const isVerified = Boolean(sessionToken || turnstile.token);
  const canSend = Boolean(input.trim()) && !isTyping && isVerified;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, showLeadForm]);

  // The first request of a session carries a Turnstile token; the API answers with
  // a session token that's used from then on.
  const takeAuth = (): ChatAuth =>
    sessionToken ? { sessionToken } : { turnstileToken: turnstile.consumeToken() };

  const handleAuthResult = (status: number, newSessionToken?: string) => {
    if (newSessionToken) setSessionToken(newSessionToken);
    if (status === 401) setSessionToken(null);
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || !canSend) return;

    const nextMessages: Message[] = [...messages, { role: "user", text: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsTyping(true);

    try {
      const { ok, status, data } = await sendChatMessage(toApiMessages(nextMessages), takeAuth());
      handleAuthResult(status, data.sessionToken);

      if (ok && data.reply) {
        setMessages((prev) => [...prev, { role: "bot", text: data.reply as string }]);
        if (data.showLeadForm) setShowLeadForm(true);
      } else {
        setMessages((prev) => [...prev, { role: "bot", text: data.reply ?? UNAVAILABLE_REPLY, local: true }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: UNAVAILABLE_REPLY, local: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  const sendLead = async (lead: LeadDetails): Promise<string | null> => {
    const auth = takeAuth();
    if (!auth.sessionToken && !auth.turnstileToken) {
      return "We're still verifying your browser — please try again in a moment.";
    }

    try {
      const { ok, status, data } = await submitLead(lead, toApiMessages(messages), auth);
      handleAuthResult(status, data.sessionToken);
      if (!ok) {
        if (data.error === "invalid_email") return "Please check your email address.";
        if (data.error === "invalid_lead") return "Please fill in your name and company.";
        return data.reply ?? UNAVAILABLE_REPLY;
      }
    } catch {
      return UNAVAILABLE_REPLY;
    }

    setShowLeadForm(false);
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        text: `Thanks, ${lead.name}! I've passed your details to the FIELD team — they'll be in touch at ${lead.email}.`,
        local: true,
      },
    ]);
    return null;
  };

  return (
    <div className="fixed bottom-[100px] right-7 z-50 flex h-[460px] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-borderGray bg-white shadow-[0_24px_60px_rgba(30,32,36,0.22)]">
      <div className="flex items-center justify-between gap-3 bg-primary px-4 py-3.5 text-white">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <Icon name="life" size={17} strokeWidth={1.8} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold">FIELD Support</span>
            <span className="flex items-center gap-1 text-[11px] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-successText" />
              Typically replies right away
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" style={{ fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div ref={scrollRef} aria-live="polite" className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[85%] whitespace-pre-line rounded-xl px-3.5 py-2.5 text-[13px] leading-[1.5] ${
              message.role === "bot"
                ? "self-start rounded-tl-sm bg-surfaceGray text-ink"
                : "self-end rounded-tr-sm bg-primary text-white"
            }`}
          >
            {message.text}
          </div>
        ))}
        {isTyping && (
          <div className="flex w-fit items-center gap-1 self-start rounded-xl rounded-tl-sm bg-surfaceGray px-3.5 py-3">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-mutedGray [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-mutedGray [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-mutedGray" />
          </div>
        )}
        {showLeadForm && <LeadForm onSubmit={sendLead} onCancel={() => setShowLeadForm(false)} />}
      </div>

      <div className="flex flex-col gap-2 border-t border-borderGray p-3">
        <div ref={turnstile.containerRef} />
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            maxLength={MAX_MESSAGE_LENGTH}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") sendMessage();
            }}
            placeholder="Type a message…"
            aria-label="Message"
            className="flex-1 rounded-full border border-borderGray bg-white px-4 py-2 text-[13px] text-ink placeholder:text-mutedGray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primaryTint"
          />
          <button
            type="button"
            onClick={sendMessage}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primaryHover disabled:opacity-40"
            disabled={!canSend}
          >
            <Icon name="arrow" size={15} strokeWidth={2.2} />
          </button>
        </div>
        <p className="text-center text-[11px] text-mutedGray">
          {!isVerified && turnstile.failed ? (
            <>
              Chat is unavailable right now —{" "}
              <a href="/contact" className="text-primary hover:text-primaryHover">
                contact us
              </a>
              .
            </>
          ) : input.length > MAX_MESSAGE_LENGTH - 100 ? (
            `${input.length}/${MAX_MESSAGE_LENGTH} characters`
          ) : (
            <>
              AI assistant, answers may be imperfect —{" "}
              <button
                type="button"
                onClick={() => setShowLeadForm(true)}
                className="text-primary hover:text-primaryHover"
              >
                talk to a person
              </button>
              .
            </>
          )}
        </p>
      </div>
    </div>
  );
};
