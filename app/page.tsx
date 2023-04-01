import Image from 'next/image'
import Banner from '../assets/kadak-chai-banner.png'

export default function Home() {
  return (
    <div className='bg-yellow-100 min-h-screen'>
      <div className='container mx-auto px-4'>
        <div className='py-10'>
          <Image
            src={Banner}
            alt="Kadak Chai Banner"
            className="mx-auto h-72 w-auto rounded-3xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl pt-8 text-center font-bold text-gray-800 leading-tight">
          <span className="block text-yellow-500 text-5xl md:text-6xl">Kadak Chai</span>
          <span className="block text-3xl md:text-5xl">Coming Soon in Lucknow!</span>
        </h1>
        <p className="text-lg text-gray-700 mt-6 text-center">
          Experience the taste of authentic chai at our new location in Lucknow. Follow us on social media for updates and exclusive offers.
        </p>
        <div className="flex justify-center mt-8 pb-5">
          <a href="#" className="bg-yellow-500 hover:bg-yellow-600 py-3 px-6 text-white rounded-full font-bold text-lg shadow-lg ">
            Follow Us
          </a>
        </div>
      </div>
      <div className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 leading-tight mb-8'>
            Why Choose Kadak Chai?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center'>
              <div className='rounded-full bg-yellow-500 h-16 w-16 flex items-center justify-center mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.66 5.66A4 4 0 0 1 13.34 10a4 4 0 1 1-6.68-4.32L6 5l.66.66zM10 18a6 6 0 0 0 6-6H4a6 6 0 0 0 6 6z" />
                </svg>
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center'>Authentic Flavor</h3>
              <p className='text-gray-700 text-center'>
                Our chai is made from traditional ingredients and recipes, ensuring an authentic taste that can't be beat.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full bg-yellow-500 h-16 w-16 flex items-center justify-center mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 4a4 4 0 1 0 0 8c-.74 0-1.44-.2-2.04-.55l-.84.84A5.96 5.96 0 0 1 10 14a6 6 0 1 1 0-12z" />
                  <path fillRule="evenodd" d="M4.93 6.93a8 8 0 0 1 0 6.14l.84-.84a5.96 5.96 0 0 0 0-4.46l-.84-.84zM18.07 6.93l-.84.84a5.96 5.96 0 0 0 0 4.46l.84.84a8 8 0 0 1 0-6.14z" />
                </svg>
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center'>Relaxing Atmosphere</h3>
              <p className='text-gray-700 text-center'>
                Our cafe provides a comfortable and calming space to enjoy your chai, whether alone or with friends.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full bg-yellow-500 h-16 w-16 flex items-center justify-center mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4z" />
                </svg>
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center'>Friendly Service</h3>
              <p className='text-gray-700 text-center'>
                Our staff are dedicated to providing excellent service and making sure you have a great experience at Kadak Chai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

