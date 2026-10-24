"use client";

import { useEffect, useState } from "react";

// Renders the current time in a timezone, client-side only (mount-gated so
// SSR output is a stable placeholder and hydration never mismatches).
export default function LocalTime({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // First tick is deferred a frame (lint: no sync setState in effects)
    const first = setTimeout(() => setNow(new Date()), 0);
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  if (!now) {
    return <span className="tabular-nums">--:--</span>;
  }

  const formatted = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  })
    .format(now)
    .replace(/\s/g, "")
    .toLowerCase();

  return <span className="tabular-nums">{formatted}</span>;
}
