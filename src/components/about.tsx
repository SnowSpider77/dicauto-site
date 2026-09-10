import Image from "next/image";
import { images, site } from "@/lib/site";

export function About() {
  const years = new Date().getFullYear() - site.foundedYear;

  return (
    <section id="sobre" className="scroll-mt-20 bg-navy text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[640px]">
          <Image
            src={images.about.src}
            alt={images.about.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/60">
            Desde {site.foundedYear}
          </p>
          <h2 className="font-display mt-3 text-5xl leading-none lg:text-7xl">
            Uma casa de autopeças
            <span className="block">do Planalto Norte.</span>
          </h2>
          <div className="mt-8 h-1 w-16 bg-red" />
          <p className="mt-8 max-w-xl text-base leading-7 text-white/80">
            A Dicauto Autopeças nasceu em Rio Negrinho, no trevo da BR-280.
            São {years} anos no comércio de peças e acessórios novos para
            veículos — e uma rede de lojas que cobre Rio Negrinho, Mafra e
            Itaiópolis.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
            O trabalho é direto: oficina ou motorista chega com o modelo, o
            ano e o que precisa. A loja consulta e aponta o caminho.
          </p>
          <p className="font-display mt-10 text-2xl tracking-[0.18em] text-white/90">
            Qualidade · Agilidade · Confiança · Sempre
          </p>
        </div>
      </div>
    </section>
  );
}
