"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { DemoRequestFields } from "@/components/demoRequest/DemoRequestFields";

export const DemoRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative rounded-2xl border border-borderGray bg-white p-6 shadow-[0_16px_40px_rgba(30,32,36,0.08)] min-[900px]:p-8">
      <div role="status">
        {submitted && (
          <div className="flex flex-col items-start gap-4 rounded-xl bg-successBg p-6 text-successText">
            <Icon name="check" size={24} strokeWidth={2} />
            <p className="text-base font-medium">
              Thanks! Our team will contact you shortly to arrange a time.
            </p>
          </div>
        )}
      </div>
      {!submitted && <DemoRequestFields onSuccess={() => setSubmitted(true)} />}
    </div>
  );
};
