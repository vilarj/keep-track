import type { Metadata } from "next";
import "./styles/dashboard.module.css";
import "./styles/globals.css";
import "./styles/login.module.css";
import "./styles/page.module.css";
import "./styles/records.module.css";

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
