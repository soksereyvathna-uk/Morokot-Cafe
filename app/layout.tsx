import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morokot Cafe — Open 24 Hours",
  description: "Morokot Cafe — your neighbourhood cafe, snack bar, and fuel station. Open 24 hours, 7 days a week.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f7f3ee", color: "#2d2015", margin: 0, padding: 0, fontFamily: "'Nunito', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
