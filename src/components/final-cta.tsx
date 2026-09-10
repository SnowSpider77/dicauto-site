import { hqPhone } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 bg-red text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 pb-28 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/80">
            Peça agora
          </p>
          <h2 className="font-display mt-3 text-5xl leading-[0.92] lg:text-7xl">
            Diga o carro.
            <span className="block">A gente acha a peça.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/90">
            Informe modelo, ano e o que você precisa. A Dicauto consulta o
            estoque e aponta a loja mais próxima.
          </p>
        </div>
        <a
          href={`tel:${hqPhone.tel}`}
          className="inline-flex items-center justify-center bg-navy px-8 py-4 font-display text-2xl tracking-[0.14em] text-white transition-colors hover:bg-navy-deep"
        >
          Ligar {hqPhone.display}
        </a>
      </div>
    </section>
  );
}
