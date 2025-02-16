import { SignInButton, SignUpButton, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoadingScreen } from './LoadingScreen';

export default function Landing() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isSignedIn) {
      navigate('/HomePage');
    }
  }, [isSignedIn, navigate]);

  return (
    <>  
    {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
    <div className={`min-h-screen bg-deepPurple/10 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Sticky Navigation */}
      <div className="fixed top-4 left-0 right-0 z-50">
          <nav className="mx-auto max-w-5xl bg-white rounded-full shadow-lg py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="\src\public\mindease-logo.png" alt="mindEase Logo" className="h-8" />
              <span className="text-xl font-semibold">mindEase</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                  onClick={() => navigate('/InfoPage')}
                  className="flex items-center gap-2 text-purple-700 hover:text-purple-800 mr-6"
                  >
                  About mindEase
              </button>
              <button 
                  onClick={() => navigate('/AboutPage')}
                  className="flex items-center gap-2 text-purple-700 hover:text-purple-800"
                  >
                  About us
              </button>
              <SignInButton mode="modal">
                <button className="px-6 py-2 text-gray-600 hover:text-gray-800">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-6 py-2 bg-pink-200 text-gray-800 rounded-full hover:bg-pink-300 transition-colors">
                  Sign up
                </button>
              </SignUpButton>
            </div>
          </div>
        </nav>
      </div> 
      
      {/* Hero Section */}
      <div className="pt-24"></div>
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Navigating the mental landscape for better well-being
            </h1>
            <p className="text-gray-600 mb-8">
            Welcome to mindEase, your go-to mental health companion. Whether you need a judgment-free chat, a little guidance, or just a place to vent, we've got your back. Because navigating the mind shouldn't feel like a solo mission!
            Here to Listen, Support & Uplift.
            </p>
            <SignUpButton mode="modal">
                <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </SignUpButton>
          </div>
          <div className="flex justify-center items-center">
            <img src="\src\public\header-image.png" alt="Illustration" className="w-4/5" />
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-5">
            <h3 className="text-3xl font-bold leading-tight mb-3">
              What We Offer
            </h3>
            <p className="mt-4 text-gray-600">
            An Interactive Mental Wellness Toolkit - Tailored Just for You.
            At mindEase, we offer a variety of tools to help you find balance, clarity, and a deeper connection with yourself, enabling the approach to better mental health to be inclusive, welcoming and fun. Our services include:
            </p>
          </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="p-8 bg-purple-200 rounded-3xl transition-all duration-300 hover:bg-purple-300 hover:shadow-lg hover:scale-105 hover:ring-4 hover:ring-purple-400 hover:ring-opacity-50">
            <img src="\src\public\Chatbot Logo.png" alt="chatbot Logo" className="h-14 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
              <span className="px-4 py-2 text-deepPurple">An Insight Into Your Well-Being</span>
              </h3>
              <h3 className="flex items-center gap-2 text-purple-700 hover:text-purple-800">
              Our mental health assessment helps you better understand your emotions, stress levels, and overall well-being. It provides personalized insights to guide you toward the support you need.
            </h3>
          </div>

          <div className="p-8 bg-pink-200 rounded-3xl transition-all duration-300 hover:bg-pink-300 hover:shadow-lg hover:scale-105 hover:ring-4 hover:ring-pink-400 hover:ring-opacity-50">
          <img src="\src\public\Chatbot Logo.png" alt="chatbot Logo" className="h-14 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              <span className="px-4 py-2 text-deepPurple">MINDY, Your AI Mental Health Buddy</span>
            </h3>
            <h3 className="flex items-center gap-2 text-purple-700 hover:text-purple-800">  
              Need someone to talk to? Our chatbot is here to provide support, guidance, and a safe space to express yourself—anytime, anywhere. No pressure, no judgment—just a listening ear when you need it most.
            </h3>
          </div>
        </div>

        <div className="mt-8 p-10 bg-purple-200 rounded-3xl">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect & Empower Together</h3>
          <p className="text-gray-600 mb-6">
          Reach out if you have any suggestions or inputs, this is an inclusive space. Or check in if you want to learn how our services help build a healthier, more mindful community—one step at a time &lt;3
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          onClick={() => navigate('/InfoPage')}>
            Learn more
          </button>
        </div>
        </section>

        {/* Footer */}
        <div className="mx-auto max-w-7xl px-6">
          <footer className="bg-purple-600 rounded-t-3xl text-white py-12 px-8 shadow-lg">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 mb-6">
                <img src="src/public/Text Logo.png" alt="mindEase Logo" className="h-24" />
              </div>
              <div className="space-y-2">
                  <p className="border-b text-2xl text-liightBg mb-6">Team</p>
                  <button 
                      onClick={() => navigate('/AboutPage')}
                      className="flex items-center gap-2 text-lightBg hover:text-black"
                      >
                      About us
                  </button>
                  <button 
                      onClick={() => navigate('/InfoPage')}
                      className="flex items-center gap-2 text-lightBg hover:text-black"
                      >
                      Our mission
                  </button>
              </div>
              <div className="space-y-2">
                  <p className="border-b text-2xl text-liightBg mb-6">Reach us</p>
                  <p>Email: mindeaseinfo@gmail.com</p>
                  <p>Phone: 1234-5678-90</p>
                  <p>Address: Wayne Manor</p>
                  <p>Gotham 12345</p>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-purple-400">
              <p>&copy; 2025 mindEase. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}