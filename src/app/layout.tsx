import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment 8",
  description: "Assignment 8 project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
