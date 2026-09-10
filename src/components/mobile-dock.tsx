import { hqPhone } from "@/lib/site";
import { PhoneIcon, PinIcon } from "@/components/icons";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${hqPhone.tel}`}
          className="inline-flex items-center justify-center gap-2 bg-red py-3.5 font-display text-lg tracking-[0.14em] text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Ligar
        </a>
        <a
          href="#lojas"
          className="inline-flex items-center justify-center gap-2 border border-white/20 py-3.5 font-display text-lg tracking-[0.14em] text-white"
        >
          <PinIcon className="h-4 w-4" />
          Lojas
        </a>
      </div>
    </div>
  );
}
