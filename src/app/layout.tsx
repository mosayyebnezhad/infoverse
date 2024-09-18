import type { Metadata } from "next";
import { Vazirmatn, Poppins } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ChangeTheme } from "./components/changeColor";
import { Navbar } from "./components/navbar";
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
    <html lang="en" dir="rtl" suppressHydrationWarning >
      <body className={vazir.className + " bg-gray-100 dark:bg-gray-950 text-black dark:text-white"} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <Navbar />
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
