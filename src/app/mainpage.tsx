import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-yellow-400 italic font-semibold">About us</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We Create the best foody product
          </h2>
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
            elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>

          {/* List Items */}
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-yellow-400 text-xl mr-2">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 text-xl mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 text-xl mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>

          {/* Button */}
          <Link href="/blog">

          <button className="px-6 py-3 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-600 transition">
            Read More
          </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2">
            <Image
              src="/main1.png" 
              height={200}
              width={200}
              alt="Large food image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <Image
              src="/main2.png" 
              height={200}
              width={200}
              alt="Small food image 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <Image
              src="/main3.png" 
              height={200}
              width={200}
              alt="Small food image 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default MainPage;
