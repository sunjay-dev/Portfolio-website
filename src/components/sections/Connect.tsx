"use client";

import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { toast } from "sonner";
import SectionHeading from "@/components/ui/SectionHeading";
import User from "@/data/user.json";

const CAL_URL = "https://cal.com/sunjay-kumar/15min";
const TWITTER_DM_URL = `https://twitter.com/messages/compose?recipient_id=sunjay_dev`;
const BACKEND_URL = "/api/email";

export default function Connect() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSend = async () => {
    if (!email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setSending(true);
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Portfolio Visitor", email, message }),
      });

      if (!res.ok) throw new Error("Server error");

      toast.success("Message sent! I'll get back to you soon.");
      setEmail("");
      setMessage("");
      if (textareaRef.current) textareaRef.current.style.height = "auto";
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="connect">
      <div className="flex flex-col gap-4">
        <SectionHeading>Connect with me</SectionHeading>

        {/* Quick-action buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => window.open(CAL_URL, "_blank")}
            id="schedule-meeting-btn"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-500 px-4 text-sm font-medium text-white transition-opacity hover:bg-emerald-500/90"
          >
            <Icon icon="lucide:calendar" className="h-4 w-4" />
            Schedule a Meeting
          </button>

          <button
            onClick={() => window.open(TWITTER_DM_URL, "_blank")}
            id="chat-twitter-btn"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-sky-500 px-4 text-sm font-medium text-white transition-opacity hover:bg-sky-500/90"
          >
            <Icon icon="fa6-brands:x-twitter" className="h-4 w-4" />
            Chat on Twitter
          </button>
        </div>

        {/* Email form */}
        <div className="flex flex-col gap-3 mt-1">
          <div className="flex flex-col gap-1">
            <label htmlFor="connect-email" className="text-sm font-medium text-muted-foreground">
              Email
            </label>
            <input
              id="connect-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={User.contact.email}
              className="h-10 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="connect-message" className="text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="connect-message"
              ref={textareaRef}
              value={message}
              onInput={autoResize}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hey, I have this cool idea, could you help me build it?"
              rows={3}
              className="w-full resize-none rounded-md border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            id="send-message-btn"
            onClick={handleSend}
            disabled={sending}
            className="h-10 w-full rounded-md bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
}
