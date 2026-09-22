import { navLinks } from "@/lib/navLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`${open ? "flex" : "hidden"} min-[1150px]:hidden flex-col gap-1 rounded-[20px] bg-white/[0.98] p-4 shadow-[0_12px_32px_rgba(30,32,36,0.14)] backdrop-blur-md mx-3 mt-2`}
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="rounded-[10px] px-3.5 py-3 text-[15px] font-medium text-navText"
        >
          {link.label}
        </a>
      ))}
      <div className="my-2 h-px bg-borderGray" />
      <a
        href="#demo"
        onClick={onClose}
        className="rounded-[10px] px-3.5 py-3 text-[15px] font-medium text-navText"
      >
        Book a demo
      </a>
      <a
        href="#portal-login"
        onClick={onClose}
        className="mt-1 flex h-11 items-center justify-center rounded-full bg-primary text-[15px] font-semibold text-white"
      >
        Log in / Sign up
      </a>
    </div>
  );
};
