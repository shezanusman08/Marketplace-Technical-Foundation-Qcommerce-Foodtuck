import Image from "next/image";
import { Star, Share2, Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { fullProduct } from "@/app/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AddToCart from "@/app/components/addtocart";


async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
    image,
    currentPrice,
    name,
    description,
    "slug": slug.current
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const data: fullProduct = await getData(slug);
  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Header with Cart */}
        <div className="w-full lg:hidden flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>All Menu</span>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex md:flex-col gap-4 md:w-24 overflow-x-auto md:overflow-visible whitespace-nowrap">
          {data.image.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square w-20 md:w-full border rounded-lg overflow-hidden cursor-pointer hover:border-orange-500"
            >
              <Image
                src={urlFor(img).url()}
                alt={`${data.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 relative">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
            <Image
              src={urlFor(data.image[0]).url()}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>
          {/* Mobile Navigation Arrows */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>All Menu</span>
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Prev
                </Button>
                <Button variant="ghost" size="sm">
                  Next <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold">{data.name}</h1>

          <p className="text-muted-foreground text-sm md:text-base">
            {data.description}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">5.0 Rating</span>
            <span className="text-sm text-muted-foreground">22 Reviews</span>
          </div>

          <div className="text-xl md:text-2xl font-bold text-orange-500">
            ${data.currentPrice.toFixed(2)}
          </div>

          <AddToCart
            name={data.name}
            description={data.description}
            price={data.currentPrice}
            image={urlFor(data.image[0]).url()}
            price_id={data._id}
            currency="USD"
          />

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </Button>
            <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>

          <div className="space-y-2 pt-4 border-t text-sm">
            <div className="flex gap-2">
              <span className="text-muted-foreground">Category:</span>
              <span>Pizza</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Tag:</span>
              <span>Our Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

