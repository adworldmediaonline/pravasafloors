import InquiryForm from './components/InquiryForm';
import Navbar from './components/Navbar';
import MobileInquiryButton from './components/MobileInquiryButton';
import HeroButton from './components/HeroButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      {/* Mobile Inquiry Button and Form */}
      <MobileInquiryButton />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-4">
              ROF Group &ldquo;PRAVASA&rdquo; ULTRA Luxury Low RISE Independent
              Floors Township
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              at Sector 88A, Gurgaon. 3 BHK+3T starting from INR 2.4 Cr*
            </p>
            <HeroButton />
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-12">
            Project Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mb-4">🔰</div>
              <h3 className="font-bold text-xl mb-2">Land Parcel</h3>
              <p>12 Acres approx</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mb-4">🔰</div>
              <h3 className="font-bold text-xl mb-2">
                Total Independent Floors
              </h3>
              <p>816 units</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mb-4">🔰</div>
              <h3 className="font-bold text-xl mb-2">Greenery & Open Space</h3>
              <p>Around 3.5 Acres</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mb-4">🔰</div>
              <h3 className="font-bold text-xl mb-2">Club House</h3>
              <p>Around 75k sq.ft. with all luxury amenities within</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 Launch */}
      <section id="phase1" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Phase 1 Launching
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="text-amber-500 text-4xl mr-4">🔰</div>
              <div>
                <h3 className="font-bold text-xl">Total units in Phase 1</h3>
                <p className="text-lg">250 units</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="font-bold text-2xl mb-4">Tentative Sizes:</h3>
              <div className="flex items-center mb-6">
                <div className="text-amber-500 text-4xl mr-4">🔰</div>
                <div>
                  <p className="text-lg">3 BHK+3T - 1850 - 1970 sq.ft approx</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-amber-500 text-4xl mr-4">💵</div>
                <div>
                  <p className="text-lg font-semibold">
                    Tentative Box Price ₹ 2.4 Cr + GST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">🏭</div>
              <div>
                <p className="text-lg">Basement + Stilt + 4 Floors</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">🧱</div>
              <div>
                <p className="text-lg">4th Floor With Roof Rights</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">⚡️</div>
              <div>
                <p className="text-lg">Energy-efficient Walls</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">👮</div>
              <div>
                <p className="text-lg">3 Tier security system</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">⛩️</div>
              <div>
                <p className="text-lg">
                  Grand entrance with High-Tech amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Location Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mr-4">🛣️</div>
              <div>
                <p className="text-lg">
                  2 minutes drive from Dwarka Expressway
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mr-4">🚗</div>
              <div>
                <p className="text-lg">
                  7 minutes drive from Manesar Toll Plaza
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mr-4">🌇</div>
              <div>
                <p className="text-lg">NH-8 & KMP Expressway - 10 minutes</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mr-4">🛣️</div>
              <div>
                <p className="text-lg">20 minutes drive from IFFCO Chowk</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <div className="text-amber-500 text-4xl mr-4">🛩️</div>
              <div>
                <p className="text-lg">
                  20 minutes Distance from Indira Gandhi International Airport
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plan */}
      <section id="payment" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Payment Plan - 40:60
          </h2>
          <div className="max-w-md mx-auto bg-amber-50 p-8 rounded-lg shadow-lg border-2 border-amber-200">
            <div className="flex items-center mb-6">
              <div className="text-amber-500 text-4xl mr-4">📝</div>
              <div>
                <h3 className="font-bold text-xl">Booking AMOUNT</h3>
                <p className="text-lg">10 Lakh along with the KYC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Inquiry Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Interested in PRAVASA?
              </h2>
              <p className="text-lg mb-6">
                Fill out the form to get detailed information about PRAVASA
                Independent Floors. Our team will get back to you within 24
                hours.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500 shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  Special Pre-Launch Offer
                </h3>
                <p>
                  Register now to get exclusive pre-launch benefits and priority
                  booking options!
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            For More Details
          </h2>
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-block bg-white text-amber-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 text-xl"
          >
            Call ROF: +91 XXXX XXXX XX
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 ROF Group. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            RERA Registration No: XXXXX | HRERA XXXX
          </p>
        </div>
      </footer>
    </main>
  );
}
