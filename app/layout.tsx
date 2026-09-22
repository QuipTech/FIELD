import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { IconSprite } from "@/components/icons/IconSprite";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuipTech FIELD — AI technical intelligence for critical assets",
  description:
    "FIELD gives field technicians AI-powered answers, complete machine history and live expert support in one place, not three separate tools.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="bg-white font-sans text-[16px] leading-[1.55] text-ink">
        <IconSprite />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
