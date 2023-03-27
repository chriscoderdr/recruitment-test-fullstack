import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Chris Gomez - Recruitment Test for Full Stack Position",
  description: "Recruitment Test for Full Stack Position",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={inter.style}>{children}</body>
    </html>
  );
}
