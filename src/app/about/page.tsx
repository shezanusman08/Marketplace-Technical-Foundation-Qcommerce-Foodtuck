import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  { name: 'Mark Young', role: 'Chef', image: '/mem.png' },
  { name: 'Lucky Moore', role: 'Chef', image: '/mem.png' },
  { name: 'Barry Henry', role: 'Chef', image: '/mem.png' },
  { name: 'Ron Morrison', role: 'Chef', image: '/mem.png' },
]

const menuItems = [
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
  { name: 'Akter Grilled Chicken Salmon', price: '$32', description: 'Served fresh from today with special sauce.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Food Importance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/blog1.png"
                width={250}
                height={300}
                alt="Food collage 1"
                className="rounded-lg mt-12"
              />
              <Image
                src="/maincourse.png"
                width={250}
                height={300}
                alt="Food collage 2"
                className="rounded-lg mt-8"
              />
              <Image
                src="/about.png"
                width={250}
                height={300}
                alt="Food collage 3"
                className="rounded-lg mb-11"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Food is an important part Of a balanced Diet</h2>
              <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <Link
                href="/menu"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-orange-600 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              
              <h3 className="font-semibold mb-2">Best Chef</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">100% Fresh food</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Clean Environment</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="relative w-full">
  <div className="absolute inset-0 mx-10"></div>
  <Image
    src="/choose.png" 
    width={1386}
    height={386} 
    alt="Banner Image"
    className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg"
  />
</section>

      {/* Team Members */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Team Member</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  width={250}
                  height={300}
                  alt={member.name}
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-orange-200">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <h3 className='text-orange-500 font-mono gap-14'>
          Testimonal
        </h3>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Image
              src="/client.png"
              width={100}
              height={100}
              alt="Client"
              className="mx-auto mb-6"
            />
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="font-semibold">Albert Hogan</h3>
            <p className="text-gray-500">Food Critic</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Food Menu</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-orange-500 font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/menu"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-orange-600 transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
