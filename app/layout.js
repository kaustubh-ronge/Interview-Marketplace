import { ClerkProvider } from "@clerk/nextjs";
import { DM_Sans, Geist, Geist_Mono, Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});


export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      theme: dark
    }}>
      <html
        lang="en"
        className={inter.className}
        suppressHydrationWarning
      >
        <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen"> {children} </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}