const replacedItems = [
  { number: "01", label: "A remote support tool" },
  { number: "02", label: "A document repository" },
  { number: "03", label: "A maintenance log" },
];

export const ReplacesBar = () => {
  return (
    <section className="border-y border-borderGray bg-surfaceGray px-6 py-6 min-[900px]:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-5 min-[900px]:flex-row min-[900px]:items-center">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-bodyGray">
          One platform replaces
        </span>
        <div className="flex flex-wrap gap-8 min-[900px]:ml-auto">
          {replacedItems.map((item) => (
            <span
              key={item.number}
              className="flex items-center gap-2.5 text-[15px] text-bodyGray"
            >
              <span className="text-xs font-semibold text-primary">
                {item.number}
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
