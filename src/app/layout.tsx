import type { Metadata } from "next";

import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import { fontFamily } from "@/fonts";
import { cn } from "@/utils";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import config from "@/config";
import { dark } from "@clerk/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: config.APP_NAME,
  description: config.APP_DESCRIPTION,
};

const bodyClasses = cn(
  fontFamily.variable,
  "antialiased grid-container min-h-screen dark:bg-black dark:text-white"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="pt-br" suppressHydrationWarning>
        <body className={bodyClasses}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
