import { stores } from "@/lib/site";

const values = [
  { title: "Qualidade", copy: "Peças novas para o que o carro realmente precisa." },
  { title: "Agilidade", copy: "Consulta direta. A peça certa, sem enrolação." },
  { title: "Confiança", copy: "Presença regional, atendimento de quem está perto." },
];

export function Trust() {
  return (
    <section className="scroll-mt-24 bg-white" aria-label="Por que a Dicauto">
      <div className="flex h-2">
        <div className="flex-1 bg-navy" />
        <div className="flex-1 bg-red" />
        <div className="w-20 checker sm:w-28" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex snap-x gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible">
          {stores.map((store) => (
            <a
              key={store.id}
              href={`#${store.id}`}
              className="min-w-[72%] shrink-0 snap-start border-l-2 border-red pl-4 lg:min-w-0"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-steel">
                {store.role}
              </p>
              <p className="font-display mt-1 text-4xl text-navy lg:text-5xl">
                {store.city}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-10 border-t border-mist pt-10 lg:mt-16 lg:grid-cols-3 lg:gap-16">
          {values.map((value) => (
            <div key={value.title}>
              <h2 className="font-display text-4xl text-navy">{value.title}</h2>
              <p className="mt-3 max-w-sm text-[0.95rem] leading-7 text-ink/70">
                {value.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
