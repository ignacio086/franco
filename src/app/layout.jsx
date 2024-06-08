import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"],weight:['300'] });

export const metadata = {
  title: "Creado por ignacio Gomez",
  description: "Franco Ponce",
};

export default function RootLayout({ children }) {
  return (
    <html className="overflow-x-hidden bg-slate-50 scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
