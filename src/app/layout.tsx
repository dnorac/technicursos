import type { Metadata } from "next";

import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import { fontFamily } from "@/fonts";
import { cn } from "@/utils";

import Footer from "@/components/footer";
import Header from "@/components/header";
import config from "@/config";
import { dark } from "@clerk/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: config.APP_NAME,
  description: config.APP_DESCRIPTION,
};

const bodyClasses = cn(
  fontFamily.variable,
  "antialiased dark:bg-black dark:text-white min-h-screen flex flex-col"
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
          <div className="container mx-auto flex-1">
            <div className="py-4 max-sm:px-4">{children}</div>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
