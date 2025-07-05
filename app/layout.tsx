import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ModernFooter from "@/components/layout/footer";
import WhatsAppWidget from "@/components/widgets/whatsapp-widget";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { ThemeProvider } from "next-themes";
import ScrollToTopButton from "@/components/home/utils/slideup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ECOMAS DEV",
  description:
    "Ecomas Dev es una empresa enfocada al desarrollo de software a medida para empresas y organizaciones. Ofrecemos soluciones tecnologicas innovadoras y personalizadas para ayudar a nuestros clientes a alcanzar sus objetivos de negocio. ",
  keywords:
    "Ecomas Dev es una empresa enfocada al desarrollo de software a medida para empresas y organizaciones. Ofrecemos soluciones tecnologicas innovadoras y personalizadas para ayudar a nuestros clientes a alcanzar sus objetivos de negocio.",
  openGraph: {
    title: "Ecomas Dev",
    description:
      "Ecomas Dev es una empresa enfocada al desarrollo de software a medida para empresas y organizaciones. Ofrecemos soluciones tecnologicas innovadoras y personalizadas para ayudar a nuestros clientes a alcanzar sus objetivos de negocio.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`font-sans ${poppins.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <GoogleAnalytics />
          <Header />
          <main>{children}</main>
          <ModernFooter />
          <WhatsAppWidget />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
