
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { SimplifiedProduct } from "../interface";

export default function ProductCard({ product }: { product: SimplifiedProduct }) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg">
      <Link href={`/shop/${product.slug}`}>
        <div className="relative w-full aspect-square overflow-hidden cursor-pointer">
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-lg text-orange-500 font-semibold">
              ${product.currentPrice}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
                <div className="text-sm text-green-500">
                  {product.available ? "In Stock" : "Out of Stock"}
                </div>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}