import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        />
        <link
          rel="preload"
          href="fonts/HubotSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white" style={{ color: "#1944D0" }}>
        <div className="px-10">
          <NavBar />
          {children}
          <Analytics />
          <footer className="py-10 text-center bottom-0 space-y-2">
            <p className="font-space">
              Site built with Nextjs, Typescript & Tailwind CSS. © 2025.
            </p>
            <p className="font-hubot text-xs">Last update: 15/03/2025</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
