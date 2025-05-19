import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { aeonik } from './fonts'
import "./globals.css";
import LenisProvider from "@/components/animated/LenisProvider";
import MetaPixelTracker from "@/components/tracking/MetaPixelTracker";
import { ReactNode, Suspense } from "react";
import nextI18nextConfig from "../../../next-i18next.config";
import ClientLocaleProvider from "./client-provider";



export function generateStaticParams() {
  return nextI18nextConfig.i18n.locales.map((locale) => ({ locale }));
}


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Expert",
  description: "Fit Expert is your ultimate fitness companion, offering expert guidance, personalized workouts, and health tips to help you achieve your wellness goals.",
  metadataBase: new URL('https://fit.expert'),
  openGraph: {
    title: "Fit Expert",
    description: "Fit Expert is your ultimate fitness companion, offering expert guidance, personalized workouts, and health tips to help you achieve your wellness goals.",
    images: [
      {
        url: "/Og_Image.webp",
        width: 1200,
        height: 630,
        alt: "Fit Expert OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit Expert",
    description: "Fit Expert is your ultimate fitness companion, offering expert guidance, personalized workouts, and health tips to help you achieve your wellness goals.",
    images: ["/Og_Image.webp"],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1246882013819821');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${aeonik.className} antialiased`} >
        <Suspense fallback={null}>
          <MetaPixelTracker />
        </Suspense>
        <LenisProvider>
          <ClientLocaleProvider locale={locale}>
            {children}
          </ClientLocaleProvider>
        </LenisProvider>
      </body>
    </html>
  );
}