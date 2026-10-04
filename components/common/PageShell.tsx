import type { ReactNode } from "react";
import { NavBar } from "@/components/navBar/NavBar";
import { Footer } from "@/components/footer/Footer";
import { SupportFab } from "@/components/supportFab/SupportFab";
import { BackToTop } from "@/components/backToTop/BackToTop";

export const PageShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative mx-auto w-full overflow-x-clip bg-white">
      <NavBar />
      <main className="pt-32 min-[900px]:pt-36">{children}</main>
      <Footer />
      <SupportFab />
      <BackToTop />
    </div>
  );
};
