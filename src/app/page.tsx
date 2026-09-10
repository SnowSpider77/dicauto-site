import { About } from "@/components/about";
import { Categories } from "@/components/categories";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Stores } from "@/components/stores";
import { Trust } from "@/components/trust";
import { site, stores } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: site.name,
    legalName: site.legalName,
    foundingDate: String(site.foundedYear),
    telephone: stores[0].phone?.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: stores[0].address,
      addressLocality: stores[0].city,
      addressRegion: "SC",
      addressCountry: "BR",
      postalCode: stores[0].cep,
    },
  };

  return (
    <main id="conteudo" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Trust />
      <Categories />
      <About />
      <Stores />
      <FinalCta />
      <Footer />
    </main>
  );
}
