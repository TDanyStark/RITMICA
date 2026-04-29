export type CategoriaInfo = {
  num: number;
  desc: string;
  color: string;
};

export const categorias: CategoriaInfo[] = [
  { num: 1, desc: "Use el método en cualquier circunstancia.", color: "bg-[#009A44]" },
  { num: 2, desc: "En general, use el método.", color: "bg-[#8BC53F]" },
  { num: 3, desc: "El uso del método generalmente no se recomienda a menos que otros métodos más adecuados no estén disponibles o no sean aceptados.", color: "bg-[#FDB913]" },
  { num: 4, desc: "No use el método.", color: "bg-[#E30613]" },
];

export function getCategoriaInfo(num: number): CategoriaInfo | undefined {
  return categorias.find(c => c.num === num);
}
