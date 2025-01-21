import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Chef } from "../interface";
import { urlFor } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == "chef"][0...30] {
    _id,
    name,
    description,
    tags,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function ChefsPage() {
  const data: Chef[] = await getData();

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
          <h1 className="text-3xl md:text-5xl font-bold">Our Team</h1>
          <p className="mt-6 text-sm md:text-base text-gray-300">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>{" "}
            <span className="mx-2">&gt;</span>{" "}
            <span className="text-yellow-400">team</span> 
          </p>
        </div>
      </div>

      {/* Chefs Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Chefs</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((chef) => (
            <div
              key={chef._id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative w-full aspect-square overflow-hidden cursor-pointer">
                <Image
                  src={urlFor(chef.imageUrl).url() || "/placeholder.svg"}
                  alt={chef.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3">
                <h2 className="text-base font-semibold mb-1">{chef.name}</h2>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{chef.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}