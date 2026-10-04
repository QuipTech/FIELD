"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons/Icon";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-[34px] right-[104px] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-borderGray bg-white text-ink shadow-[0_8px_24px_rgba(30,32,36,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
      }`}
    >
      <Icon name="arrow" size={18} strokeWidth={2} className="-rotate-90" />
    </button>
  );
};
