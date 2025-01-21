import Image from 'next/image'

export default function FoodExperienceSection() {
  return (
    <div className="bg-black text-white p-6 md:p-8 font-sans flex flex-col md:flex-row gap-8">

      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center order-1 md:order-1">
        <h2 className="text-orange-400 text-2xl md:text-3xl font-serif mb-2">Why Choose Us</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-orange-400">Ex</span>rta ordinary taste
          <br />And Experienced
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        
        <div className="flex space-x-4 mb-6">
          {['Fast Food', 'Lunch', 'Dinner'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                {item === 'Fast Food' && (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                )}
                {item === 'Lunch' && (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {item === 'Dinner' && (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
              </div>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg">
          <span className="text-orange-400 text-3xl md:text-4xl font-bold mr-2">30+</span>
          <span className="text-sm md:text-base">
            Years of
            <br />
            Experienced
          </span>
        </div>
      </div>

      {/* Images Gallery Section */}
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 order-2 md:order-2">
        <div className="h-48 relative">
          <Image
            src="/food1.png"
            alt="Tacos"
            layout='fill'
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="h-48 relative">
          <Image
            src="/burger.png"
            alt="Burger"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="h-48 relative">
          <Image
            src="/burger2.png"
            alt="Fried food"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="h-48 relative">
          <Image
            src="/salad.png"
            alt="Another burger"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="h-48 relative">
          <Image
            src="/salad2.png"
            alt="Salad"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      
    </div>
    
  )
}
