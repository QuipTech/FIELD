import type { Metadata } from "next";
import { PageShell } from "@/components/common/PageShell";

export const metadata: Metadata = {
  title: "Release Notes — QuipTech FIELD",
  description: "What's new in QuipTech FIELD.",
};

type ChangeTag = "New" | "Improved" | "Fixed";

const tagClasses: Record<ChangeTag, string> = {
  New: "bg-primaryTint text-primaryTintText",
  Improved: "bg-successBg text-successText",
  Fixed: "bg-surfaceGray text-bodyGray",
};

const releases = [
  {
    version: "Placeholder release",
    date: "Example entry",
    changes: [
      { tag: "New" as ChangeTag, text: "FIELD Vision: point the camera and ask what's wrong." },
      { tag: "New" as ChangeTag, text: "Configuration history diffs on the machine record." },
      { tag: "Improved" as ChangeTag, text: "Faster search across the knowledge centre." },
    ],
  },
  {
    version: "Placeholder release",
    date: "Example entry",
    changes: [
      { tag: "New" as ChangeTag, text: "Remote expert sessions launch directly from a machine record." },
      { tag: "Fixed" as ChangeTag, text: "Offline queue occasionally dropped photos on poor connections." },
    ],
  },
];

const ReleaseNotesPage = () => {
  return (
    <PageShell>
      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            Release notes
          </span>
          <h1 className="max-w-[24ch] text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            What&rsquo;s new in FIELD
          </h1>
          <p className="max-w-[60ch] text-base leading-[1.6] text-bodyGray">
            The entries below are placeholders showing the intended format — real entries
            should be added at each release.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex max-w-[70ch] flex-col gap-10">
            {releases.map((release) => (
              <div key={release.version} className="flex flex-col gap-4 border-b border-borderGray pb-10 last:border-b-0">
                <div className="flex items-baseline gap-3">
                  <h2 className="text-xl font-semibold tracking-[-0.01em] text-ink">
                    {release.version}
                  </h2>
                  <span className="text-[13px] text-mutedGray">{release.date}</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {release.changes.map((change) => (
                    <li key={change.text} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] ${tagClasses[change.tag]}`}
                      >
                        {change.tag}
                      </span>
                      <span className="text-[15px] leading-[1.6] text-bodyGray">{change.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ReleaseNotesPage;
