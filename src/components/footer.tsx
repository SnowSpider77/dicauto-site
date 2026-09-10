import { hqPhone, site, stores } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-white lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-5">
          <p className="font-display text-4xl">Dicauto Autopeças</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            {site.legalName}
            <br />
            CNPJ {site.cnpj}
          </p>
        </div>
        <div className="lg:col-span-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-steel">
            Lojas
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
            {stores.map((store) => (
              <li key={store.id}>
                <a href={`#${store.id}`} className="hover:text-white">
                  {store.city} — {store.address}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-steel">
            Contato
          </p>
          <a
            href={`tel:${hqPhone.tel}`}
            className="font-display mt-4 block text-2xl text-white hover:text-red"
          >
            {hqPhone.display}
          </a>
          <p className="mt-2 text-sm text-white/65">Rio Negrinho · Matriz</p>
        </div>
      </div>
      <div className="flex h-2">
        <div className="flex-1 bg-navy" />
        <div className="flex-1 bg-red" />
        <div className="w-24 checker" />
      </div>
    </footer>
  );
}
