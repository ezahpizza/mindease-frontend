import React from "react";
import { useNavigate } from 'react-router-dom';

function LandingServices() {
    const navigate = useNavigate();

    return (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <br />
            
            <div className="p-8 bg-purple-200 rounded-3xl md:mt-8">
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
    );
}

export default LandingServices;