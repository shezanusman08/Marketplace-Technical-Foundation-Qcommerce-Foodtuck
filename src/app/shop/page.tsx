import { client } from "@/sanity/lib/client";
import { SimplifiedProduct } from "../interface";
import ShopPageClient from "../components/Searchbar";
import Image from "next/image";
import Link from "next/link";

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
      <ShopPageClient initialData={data} />
    </div>
  );
}