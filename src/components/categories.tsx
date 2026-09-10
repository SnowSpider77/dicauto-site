import Image from "next/image";
import { categories, hqPhone } from "@/lib/site";

export function Categories() {
  const featured = categories.filter((item) => "image" in item && item.image);
  const rest = categories.filter((item) => !("image" in item && item.image));

  return (
    <section id="pecas" className="scroll-mt-24 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-steel">
            Linha de peças
          </p>
          <h2 className="font-display mt-3 text-5xl leading-none lg:text-7xl">
            Do motor ao pneu
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
            Motor, câmbio, suspensão, freios, injeção eletrônica, pneus e
            lubrificantes. Consulte a peça na loja — a gente localiza.
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-12 lg:gap-4">
          {featured.map((item, index) => (
            <article
              key={item.id}
              className={`relative min-h-[280px] overflow-hidden lg:min-h-[400px] ${
                index === 0
                  ? "lg:col-span-7"
                  : index === 1
                    ? "lg:col-span-5"
                    : "lg:col-span-12 lg:min-h-[280px]"
              }`}
            >
              {"image" in item && item.image ? (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <h3 className="font-display text-4xl lg:text-5xl">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 grid gap-px bg-white/10 lg:grid-cols-3">
          {rest.map((item, index) => (
            <article key={item.id} className="bg-ink px-5 py-8 lg:px-8">
              <span className="font-display text-red text-2xl">
                0{index + 4}
              </span>
              <h3 className="font-display mt-3 text-3xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{item.copy}</p>
            </article>
          ))}
        </div>

        <a
          href={`tel:${hqPhone.tel}`}
          className="mt-10 inline-flex items-center gap-2 font-display text-xl tracking-[0.12em] text-red hover:text-red-soft"
        >
          Consultar uma peça
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
