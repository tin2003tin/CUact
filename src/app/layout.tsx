import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import "@/app/globals.css";

const inter = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CUact",
  description: "Owner CU activity Enjoyment",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen"}>{children}</body>
    </html>
  );
}
