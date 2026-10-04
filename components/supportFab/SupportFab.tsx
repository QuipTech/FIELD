"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { ChatWidget } from "@/components/supportFab/ChatWidget";

export const SupportFab = () => {
  const [open, setOpen] = useState(false);
  // Once opened, the chat stays mounted (just hidden) so history survives closing it.
  const [hasOpened, setHasOpened] = useState(false);

  const toggle = () => {
    setOpen((value) => !value);
    setHasOpened(true);
  };

  return (
    <>
      <div className="fixed bottom-7 right-7 z-40 flex flex-row-reverse items-center gap-2.5">
        <div className="relative h-14 w-14">
          {!open && (
            <span className="fab-ring absolute -inset-1.5 animate-fabRing rounded-full border-[1.5px] border-primary/45" />
          )}
          <button
            type="button"
            onClick={toggle}
            aria-label={open ? "Close support chat" : "Talk to support"}
            aria-expanded={open}
            className={`fab relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(74,52,199,0.3)] transition-transform hover:scale-105 hover:-translate-y-0.5 ${open ? "" : "animate-fabFloat"}`}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" style={{ fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <Icon name="life" size={26} strokeWidth={1.6} />
            )}
          </button>
        </div>
        {!open && (
          <span className="fabtip translate-x-2 rounded-lg bg-ink px-3 py-2 text-[13px] text-white opacity-0 shadow-[0_6px_18px_rgba(30,32,36,0.18)] transition-all">
            Talk to a support engineer
          </span>
        )}
      </div>
      {hasOpened && (
        <div hidden={!open}>
          <ChatWidget onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
};
