import Image from 'next/image'
import { Playfair_Display, Poppins } from 'next/font/google'
import { FaUserTie, FaUtensils, FaPizzaSlice } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export default function RestaurantLandingPage() {
  return (
    <main className={`min-h-screen bg-black text-white ${poppins.className}`}>
      <StatisticsSection />
      <MenuSection />
      <ChefSection />
      <DocumentationSection />
      <BlogSection />
    </main>
  )
}

function StatisticsSection() {
  const stats = [
    { icon: <GiChefToque size={40} className="text-orange-500" />, label: 'Professional Chefs', value: 420 },
    { icon: <FaUtensils size={40} className="text-orange-500" />, label: 'Items Of Food', value: 320 },
    { icon: <FaUserTie size={40} className="text-orange-500" />, label: 'Years Of Experienced', value: '30+' },
    { icon: <FaPizzaSlice size={40} className="text-orange-500" />, label: 'Happy Customers', value: 220 },
  ];

  return (
    <section className="relative h-64 mb-16">
      {/* Background Image */}
      <Image
        src="/backhead.png" 
        alt="Statistics Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      {/* Stats Content */}
      <div className="absolute inset-0 flex justify-around items-center px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-white">
            {/* Icon */}
            <div className="mb-2">{stat.icon}</div>
            {/* Value */}
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            {/* Label */}
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
function MenuSection() {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups']
  const menuItems = [
    { name: 'Lettuce Leaf', price: 12.5, image: '/menu.png' },
    { name: 'Fresh Breakfast', price: 14.5, image: '/menu1.png' },
    { name: 'Mild Butter', price: 12.5, image: '/menu3.png' },
    { name: 'Fresh Bread', price: 12.5, image: '/menumashroom.png' },
    { name: 'Glow Cheese', price: 12.5, image: '/menu5.png' },
    { name: 'Italian Pizza', price: 14.5, image: '/menu6.png' },
    { name: 'Silice Beef', price: 12.5, image: '/menu7.png' },
    { name: 'Mushaom Pizza', price: 12.5, image: '/menupizza.png' },
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <h2 className={`text-center mb-2 text-orange-500 ${playfair.className}`}>Choose & Pick</h2>
      <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        <span className="text-orange-500">Fr</span>om Our Menu
      </h3>
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded text-sm sm:text-base ${
              index === 0 ? 'bg-orange-500 text-white' : 'text-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h4 className="font-semibold text-sm sm:text-base">{item.name}</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-500 font-semibold">{item.price.toFixed(2)}$</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


function ChefSection() {
  const chefs = [
    { name: 'D.Estwood', role: 'Chief Chef', image: '/chef.png' },
    { name: 'D.Scoriesh', role: 'Assistant Chef', image: '/chef2.png' },
    { name: 'M. William', role: 'Advertising Chef', image: '/chef3.png' },
    { name: 'W.Readfroad', role: 'Chef', image: '/chef4.png' },
  ];

  return (
    <section className="container mx-auto px-4 mb-16">
      <h2 className={`text-center mb-2 text-orange-500 ${playfair.className}`}>Chefs</h2>
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">
        <span className="text-orange-500">Me</span>et Our Chef
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div key={index} className="text-center">
            <Image
              src={chef.image}
              alt={chef.name}
              width={225}
              height={300}
              className="rounded-lg mb-4 mx-auto"
            />
            <h4 className="font-semibold text-lg">{chef.name}</h4>
            <p className="text-gray-400 text-sm md:text-base">{chef.role}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link className="px-6 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors" href={'/team'}>
          See More
        </Link>
      </div>
    </section>
  );
}


function DocumentationSection() {
  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="/backhead.png"
          alt="Food documentation"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end">
          <div className="mr-4 md:mr-16 max-w-full md:max-w-lg text-center md:text-right">
            <h2 className={`mb-2 text-orange-500 text-lg md:text-xl ${playfair.className}`}>
              Restaurant Video Process
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              We Document Every Food
              <br className="hidden md:block" />
              Bean Process until it is saved
            </h3>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
              bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-end">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                Read More
              </button>
              <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                <span className="mr-2">Play Video</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function BlogSection() {
  const blogPosts = [
    {
      title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
      date: '12 February 2022',
      image: '/burger.png',
    },
    {
      title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
      date: '10 February 2022',
      image: '/pizza.png',
    },
    {
      title: 'Curabitur rutrum velit ac congue malesuada',
      date: '8 February 2022',
      image: '/food1.png',
    },
  ];

  return (
    <section className="container mx-auto px-4 mb-16">
      <h2 className={`text-center mb-2 text-orange-500 ${playfair.className}`}>Blog Post</h2>
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">
        <span className="text-orange-500">La</span>test News & Blog
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-black rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-6 text-white">
              <p className="text-orange-500 mb-2">{post.date}</p>
              <h4 className="font-semibold mb-4">{post.title}</h4>
              <button className="text-orange-500 hover:underline">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

