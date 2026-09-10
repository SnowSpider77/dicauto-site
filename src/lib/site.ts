export const site = {
  name: "Dicauto Autopeças",
  legalName: "Rio Comércio de Componentes Automotivos Ltda",
  cnpj: "05.793.903/0001-90",
  foundedYear: 2003,
  region: "Planalto Norte de Santa Catarina",
  description:
    "Autopeças em Rio Negrinho, Mafra e Itaiópolis. Peças para motor, câmbio, suspensão, freios e injeção eletrônica.",
} as const;

export const images = {
  hero: {
    src: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=2400",
    alt: "Oficina automotiva com veículo em manutenção",
  },
  about: {
    src: "https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=2000",
    alt: "Estoque de autopeças em ambiente de loja",
  },
  motor: {
    src: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Motor automotivo em detalhe",
  },
  freios: {
    src: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Disco de freio em atendimento técnico",
  },
  pneus: {
    src: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Pneus automotivos empilhados",
  },
} as const;

export type Store = {
  id: string;
  city: string;
  role: string;
  address: string;
  complement?: string;
  cep?: string;
  phone?: { display: string; tel: string };
  hours?: string[];
  mapsQuery: string;
};

export const stores: Store[] = [
  {
    id: "rio-negrinho",
    city: "Rio Negrinho",
    role: "Matriz",
    address: "Rodovia BR-280, nº 23",
    complement: "Trevo · Centro",
    cep: "89295-000",
    phone: { display: "(47) 3644-4100", tel: "+554736444100" },
    mapsQuery: "Rodovia BR-280, 23, Rio Negrinho, SC",
  },
  {
    id: "mafra",
    city: "Mafra",
    role: "Loja",
    address: "Rua Marechal Floriano Peixoto, 1319",
    complement: "Centro",
    cep: "89300-001",
    phone: { display: "(47) 3642-2077", tel: "+554736422077" },
    hours: [
      "Segunda a sexta: 8h–12h e 13h30–18h",
      "Sábado: 8h–11h45",
    ],
    mapsQuery: "Rua Marechal Floriano Peixoto, 1319, Mafra, SC",
  },
  {
    id: "itaiopolis",
    city: "Itaiópolis",
    role: "Loja",
    address: "Rua Nereu Ramos, 448",
    complement: "Centro",
    mapsQuery: "Rua Nereu Ramos, 448, Itaiópolis, SC",
  },
];

export const hqPhone = stores[0].phone!;

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbed(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}

export const categories = [
  {
    id: "motor",
    title: "Motor",
    copy: "Componentes para quem precisa manter o carro no ritmo.",
    image: images.motor,
  },
  {
    id: "freios",
    title: "Freios",
    copy: "Pastilhas, discos e o que o sistema de frenagem pede.",
    image: images.freios,
  },
  {
    id: "suspensao",
    title: "Suspensão",
    copy: "Amortecedores e peças de rolagem para o dia a dia da região.",
  },
  {
    id: "cambio",
    title: "Câmbio",
    copy: "Peças de transmissão para consulta e reposição.",
  },
  {
    id: "injecao",
    title: "Injeção eletrônica",
    copy: "Sensores e componentes do sistema de injeção.",
  },
  {
    id: "pneus",
    title: "Pneus e lubrificantes",
    copy: "Pneus, câmaras e lubrificantes para completar o atendimento.",
    image: images.pneus,
  },
] as const;
