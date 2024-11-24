import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Header from "./components/Header";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "tooodooo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={roboto.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
