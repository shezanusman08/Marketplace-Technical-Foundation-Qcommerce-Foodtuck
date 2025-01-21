import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OtherHeader = () => {
  return (
    <div className="flex flex-col items-center">
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
          <h1 className="text-3xl md:text-5xl font-bold">404 Error</h1>
          <p className="mt-6 text-sm md:text-base text-gray-300">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>{" "}
            <span className="mx-2">&gt;</span>{" "}
            <span className="text-yellow-400">404</span>
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center py-16 px-4">
        <h2 className="text-[120px] font-bold text-orange-500 leading-none">
          404
        </h2>
        <h3 className="text-2xl font-semibold mt-6 mb-4">
          Oops! Look likes something going wrong
        </h3>
        <p className="text-gray-600 mb-8">
          Page Cannot be found. We&apos;ll have it figured out in no time.
          <br />
          Meanwhile, check out these fresh ideas:
        </p>
        <Link href="/">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-md">
            Go to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OtherHeader;

