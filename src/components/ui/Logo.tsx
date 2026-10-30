import Link from "next/link";
import { asset } from "@/lib/asset";

type Props = { className?: string };

export function Logo({ className = "h-12 w-auto" }: Props) {
  return (
    <Link href="/" aria-label="Fênix Colchões e Cia, página inicial" className="shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element -- export estático sem otimização de imagem */}
      <img src={asset("/logo.webp")} alt="Fênix Colchões e Cia" width={560} height={263} className={className} />
    </Link>
  );
}
