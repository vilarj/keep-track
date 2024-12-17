import type { Metadata } from "next";
import Footer from "./components/Footer";
import "./styles/globals.css";

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
      <body>
        <div className="layout">
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
