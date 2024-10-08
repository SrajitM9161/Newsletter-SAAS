import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/shared/utils/provider";
import Notification from "@/shared/utils/Notification";
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsWave",
  description: "Your Personal Newsletter Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
            <Notification/>
            {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
  );
}
