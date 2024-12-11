import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/login.module.css";
import "./styles/page.module.css";

export const metadata: Metadata = {
  title: "Keep Track",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
