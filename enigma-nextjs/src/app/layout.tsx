import type { Metadata } from "next";

import "./globals.css";
import ThemeProvider from "../providers/ThemeProvider";
import LayoutProvider from "@/providers/LayoutProvider";
import StoreProvider from "@/providers/StoreProvider";

export const metadata: Metadata = {
  title: "Enigma",
  description: "An E commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <StoreProvider>
          <ThemeProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
