import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { Header } from "@/components/header";
import { MobileDock } from "@/components/mobile-dock";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dicauto Autopeças | Rio Negrinho, Mafra e Itaiópolis",
    template: "%s | Dicauto Autopeças",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Dicauto",
    "autopeças",
    "Rio Negrinho",
    "Mafra",
    "Itaiópolis",
    "peças automotivas",
    "Santa Catarina",
  ],
  openGraph: {
    title: "Dicauto Autopeças",
    description: site.description,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2D5B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className={`${montserrat.className} min-h-full bg-ink text-ink`}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
        >
          Ir para o conteúdo
        </a>
        <Header />
        {children}
        <MobileDock />
      </body>
    </html>
  );
}
