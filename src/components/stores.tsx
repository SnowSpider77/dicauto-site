import { hqPhone, mapsEmbed, mapsUrl, stores } from "@/lib/site";
import { PhoneIcon, PinIcon } from "@/components/icons";

export function Stores() {
  const [hq, ...others] = stores;

  return (
    <section id="lojas" className="scroll-mt-24 bg-paper pb-8 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-steel">
            Nossas lojas
          </p>
          <h2 className="font-display mt-3 text-5xl leading-none text-navy lg:text-7xl">
            Perto de quem precisa
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Três endereços no Planalto Norte. Ligue, peça a peça e retire na
            loja mais próxima.
          </p>
        </div>

        <article
          id={hq.id}
          className="mt-12 grid scroll-mt-24 overflow-hidden bg-white lg:grid-cols-2"
        >
          <div className="min-h-[260px] lg:min-h-[420px]">
            <iframe
              title={`Mapa da loja Dicauto em ${hq.city}`}
              src={mapsEmbed(hq.mapsQuery)}
              className="h-full min-h-[260px] w-full border-0 lg:min-h-[420px]"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center border-t-4 border-red px-6 py-10 lg:px-12">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-red">
              {hq.role}
            </p>
            <h3 className="font-display mt-2 text-5xl text-navy">{hq.city}</h3>
            <p className="mt-5 text-base leading-7 text-ink/80">
              {hq.address}
              <br />
              {hq.complement}
              {hq.cep ? (
                <>
                  <br />
                  CEP {hq.cep}
                </>
              ) : null}
            </p>
            {hq.phone ? (
              <a
                href={`tel:${hq.phone.tel}`}
                className="mt-6 inline-flex items-center gap-2 font-display text-3xl text-navy hover:text-red"
              >
                <PhoneIcon className="h-6 w-6" />
                {hq.phone.display}
              </a>
            ) : null}
            <a
              href={mapsUrl(hq.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <PinIcon className="h-4 w-4" />
              Como chegar
            </a>
          </div>
        </article>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          {others.map((store) => (
            <article
              key={store.id}
              id={store.id}
              className="scroll-mt-24 border-l-4 border-navy bg-white px-6 py-8 lg:px-10"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-steel">
                {store.role}
              </p>
              <h3 className="font-display mt-1 text-4xl text-navy">{store.city}</h3>
              <p className="mt-4 text-[0.95rem] leading-7 text-ink/80">
                {store.address}
                <br />
                {store.complement}
                {store.cep ? (
                  <>
                    <br />
                    CEP {store.cep}
                  </>
                ) : null}
              </p>
              {store.hours ? (
                <ul className="mt-4 space-y-1 text-sm text-ink/70">
                  {store.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
              {store.phone ? (
                <a
                  href={`tel:${store.phone.tel}`}
                  className="mt-5 inline-flex items-center gap-2 font-display text-2xl text-navy hover:text-red"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {store.phone.display}
                </a>
              ) : (
                <p className="mt-5 text-sm leading-6 text-ink/70">
                  Para consultar peças, ligue para a matriz:{" "}
                  <a
                    href={`tel:${hqPhone.tel}`}
                    className="font-semibold text-navy"
                  >
                    {hqPhone.display}
                  </a>
                </p>
              )}
              <a
                href={mapsUrl(store.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy"
              >
                <PinIcon className="h-4 w-4" />
                Como chegar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
