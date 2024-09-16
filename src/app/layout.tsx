import type { Metadata } from "next";
import { Vazirmatn, Poppins } from "next/font/google"
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "InfoVerse - homepage",
  description: "minified of Wikipedai but more cute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={vazir.className} >
        {children}
      </body>
    </html>
  );
}
