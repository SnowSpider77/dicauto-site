import Image from "next/image";
import { hqPhone, images } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="bg-navy text-white">
      <div className="lg:relative lg:min-h-[calc(100svh-5.5rem)]">
        <div className="relative h-[36vh] min-h-[220px] sm:h-[42vh] lg:absolute lg:inset-0 lg:h-auto">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-ink/25 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/55 lg:to-transparent" />
        </div>

        <div className="relative px-4 py-10 pb-28 sm:px-6 lg:flex lg:min-h-[calc(100svh-5.5rem)] lg:items-end lg:px-8 lg:pb-16 lg:pt-28">
          <div className="hero-copy mx-auto w-full max-w-7xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/70">
              Planalto Norte · Santa Catarina
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-[3.35rem] leading-[0.9] sm:text-6xl lg:text-[6.4rem]">
              A peça certa
              <span className="block text-red">para o seu carro.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              Desde 2003 no trevo da BR-280. Três lojas para oficinas e
              motoristas em Rio Negrinho, Mafra e Itaiópolis.
            </p>
            <div className="mt-8 hidden gap-3 lg:flex">
              <a
                href={`tel:${hqPhone.tel}`}
                className="inline-flex items-center justify-center bg-red px-6 py-3.5 font-display text-xl tracking-[0.14em] text-white transition-colors hover:bg-red-soft"
              >
                Pedir uma peça
              </a>
              <a
                href="#lojas"
                className="inline-flex items-center justify-center border border-white/30 px-6 py-3.5 font-display text-xl tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Encontrar loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
