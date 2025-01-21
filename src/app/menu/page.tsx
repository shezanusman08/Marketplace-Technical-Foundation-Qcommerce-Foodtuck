import React from "react";
import Image from "next/image";

const OtherHeader = () => {
  const menuSections = [
    {
      title: "Starter Menu",
      image: "/mainmenu.png",
      items: [
        {
          name: "Alder Grilled Chinook Salmon",
          description: "Toasted French bread topped with romaine, cheddar",
          calories: "580 CAL",
          price: "$32",
        },
        {
          name: "Berries and creme tart",
          description: "Gooseberries, ricotta, rosewater, taleggio",
          calories: "700 CAL",
          price: "$43",
        },
      ],
    },
    {
      title: "Main Course",
      image: "/maincourse.png",
      items: [
        {
          name: "Roasted Herb Chicken",
          description: "Served with sautéed greens and garlic mashed potatoes",
          calories: "870 CAL",
          price: "$45",
        },
        {
          name: "Classic Beef Wellington",
          description: "Wrapped in a flaky puff pastry with mushroom duxelles",
          calories: "950 CAL",
          price: "$60",
        },
      ],
    },
    {
      title: "Desserts",
      image: "/desserts.png",
      items: [
        {
          name: "Triple Chocolate Cake",
          description: "Rich chocolate layers with ganache frosting",
          calories: "650 CAL",
          price: "$25",
        },
        {
          name: "Lemon Meringue Tart",
          description: "Zesty lemon filling with a fluffy meringue topping",
          calories: "540 CAL",
          price: "$18",
        },
      ],
    },
    {
      title: "Drinks",
      image: "/drinks.png",
      items: [
        {
          name: "Freshly Squeezed Orange Juice",
          description: "100% pure and natural orange juice",
          calories: "120 CAL",
          price: "$8",
        },
        {
          name: "Cold Brew Coffee",
          description: "Smooth, bold, and served over ice",
          calories: "5 CAL",
          price: "$6",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-56 bg-black">
        <div className="absolute inset-0">
          <Image
            src="/hero2.png"
            alt="Shopping Header Background"
            layout="fill" // Ensures the image covers the entire container
            objectFit="cover" // Maintains aspect ratio while filling the container
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Our Menu</h1>
          <p className="mt-6 text-sm md:text-base text-gray-300">
            <span className="text-gray-400">Home</span> &gt;{" "}
            <span className="text-yellow-400 gap-3">Menu</span>
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section, index) => (
        <section
          key={index}
          className={`container mx-auto px-4 py-16 ${
            index % 2 === 0
              ? "flex flex-col md:flex-row items-center justify-center gap-8"
              : "flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-8"
          }`}
        >
          {/* Image Section */}
          <div className="relative w-64 h-96 md:w-64 md:h-[450px] rounded-[10%] overflow-hidden">
            <Image
              src={section.image}
              alt={section.title}
              layout="fill" // Allows the image to fill the entire container
              objectFit="cover" // Ensures the image fits nicely within the container
              className="rounded-[10%]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex justify-between items-start border-b pb-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-black hover:text-orange-500 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    <span className="text-sm text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="text-orange-500 text-lg font-bold">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OtherHeader;
