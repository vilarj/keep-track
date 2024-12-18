import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KeepTrack",
  icons: {
    icon: "../../public/favicon.ico",
  },
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
