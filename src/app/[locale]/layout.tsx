import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import Providers from "./providers";

import { locales } from "@/lib/i18n/i18n";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISS tracker",
  description: "Website to track current ISS position",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  unstable_setRequestLocale(locale);
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();
  return (
    <html lang={locale} className={cn("scroll-smooth", montserrat.className)}>
      <body className="mx-auto flex h-full min-h-screen w-full flex-col items-center justify-center bg-background text-[1.25rem] font-medium antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
