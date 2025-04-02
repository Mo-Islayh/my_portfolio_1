import type { Metadata } from "next";
import "./globals.css";
import PageContainer from "@/components/PageContainer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Mo Islayh",
  description: "Mo Islayh's portfolio website",
  openGraph: {
    title: "Mo Islayh",
    description: "Mo Islayh's portfolio website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Mo Islayh",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Mo Islayh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
