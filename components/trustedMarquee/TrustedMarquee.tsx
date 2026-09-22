import { Icon } from "@/components/icons/Icon";
import { trustedLogos, type TrustedLogo } from "@/lib/trustedLogos";

const weightClass: Record<NonNullable<TrustedLogo["weight"]>, string> = {
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const trackingClass: Record<NonNullable<TrustedLogo["tracking"]>, string> = {
  tight: "tracking-tight",
  normal: "",
  wide: "tracking-wide",
};

const LogoItem = ({ logo }: { logo: TrustedLogo }) => (
  <span
    className={`flex shrink-0 items-center gap-2 whitespace-nowrap text-lg text-marqueeGray min-[900px]:text-xl ${weightClass[logo.weight ?? "bold"]} ${trackingClass[logo.tracking ?? "normal"]} ${logo.italic ? "italic" : ""}`}
  >
    {logo.icon && <Icon name={logo.icon} size={18} strokeWidth={2} />}
    {logo.name}
  </span>
);

export const TrustedMarquee = () => {
  return (
    <section className="overflow-hidden border-b border-borderGray bg-surfaceGrayAlt px-6 py-10 min-[900px]:px-16">
      <span className="mb-6 block text-center text-xs font-semibold uppercase tracking-[0.08em] text-mutedGray">
        Trusted by teams running critical fleets
      </span>
      <div className="relative [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex w-max animate-marquee items-center gap-[72px]">
          {[...trustedLogos, ...trustedLogos].map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};
