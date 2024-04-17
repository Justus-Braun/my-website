import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";
import Providers from "@/common/Provider";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Justus Website",
  description: "Click here to see Justus' website",
};

export default function RootLayout({
  children,
  params: { session, ...params},
}: {
  children: React.ReactNode;
  params: { session: any };
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-WZLL92ML0R" />
    </html>
  );
}
