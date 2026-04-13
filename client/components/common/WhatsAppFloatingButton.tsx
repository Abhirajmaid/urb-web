"use client";

import { WhatsAppGlyph } from "@/components/icons/ContactGlyphIcons";

const WHATSAPP_CHAT_URL = "https://wa.me/919004162157";

/**
 * Renders a fixed link; layout + styles are in globals.css (`#whatsapp-floating-cta`)
 * so Tailwind layers never override position/z-index. Placed outside EnquiryModalProvider
 * in layout so no parent transform traps `position: fixed`.
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      id="whatsapp-floating-cta"
      href={WHATSAPP_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-float-glow relative flex shrink-0 items-center justify-center rounded-full text-white"
    >
      <span
        className="whatsapp-float-pulse pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/40"
        aria-hidden
      />
      <WhatsAppGlyph className="whatsapp-float-icon relative z-10 h-8 w-8 shrink-0" />
    </a>
  );
}
