import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { SimplifiedProduct } from "../interface";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == "product"][0...30] {
    _id,
    currentPrice,
    name,
    originalPrice,
    available,
    tags,
    "slug": slug.current,
    "imageUrl": image[0].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function ShopPage() {
  const data: SimplifiedProduct[] = await getData();

  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-56 bg-black">
        <div className="absolute inset-0">
          <Image
            src="/hero2.png"
            height={200}
            width={200}
            alt="Shopping Header Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Our Shop</h1>
          <p className="mt-6 text-sm md:text-base text-gray-300">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>{" "}
            <span className="mx-2">&gt;</span>{" "}
            <span className="text-yellow-400">Shop</span> 
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-6 lg:px-12 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
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
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                      >
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
          ))}
        </div>
      </div>
    </div>
  );
}