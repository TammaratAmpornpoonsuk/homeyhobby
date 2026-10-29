import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

type ProductCardProps = {
  name: string;
  category?: string;
  price: number;
  image: string;
  instagramUrl: string;
  isNew?: boolean;
};

export function ProductCard({
  name,
  category,
  price,
  image,
  instagramUrl,
  isNew,
}: ProductCardProps) {
  return (
    <div className="flex flex-col p-3 border border-foreground rounded-3xl shadow-sm">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover rounded-2xl"
        />
        {isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-background px-3 py-1 text-xs font-bold text-primary tracking-wide shadow">
            NEW
          </span>
        )}
      </div>
      <div className="px-1 pt-3">
        {category && <p className="text-xs text-neutral-400">{category}</p>}
        <h3 className="mt-0.5 font-bold">{name}</h3>
        <div className="flex mt-3 items-center justify-between gap-2">
          <span className="text-lg font-bold text-foreground">
            ฿{price.toLocaleString("th-TH")}
          </span>
          <a
            href={instagramUrl}
            target="_blank"
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm text-background transition hover:bg-muted"
          >
            <FaInstagram className="size-4" />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
