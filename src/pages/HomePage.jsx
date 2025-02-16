import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { UserButton } from '@clerk/clerk-react';

export default function HomePage() {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>  
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        <div className={`min-h-screen bg-deepPurple/20 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Sticky Navigation */}
        <div className="fixed top-4 left-0 right-0 z-50">
            <nav className="mx-auto max-w-5xl bg-white rounded-full shadow-lg py-4 px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <button onClick={() => navigate('/HomePage')}>
                            <img src="\src\public\mindease-logo.png" alt="mindEase Logo" className="h-8" />
                        </button>
                        <span className="text-xl font-semibold">mindEase</span>
                    </div>
                    <div className="flex items-center gap-6">
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
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </nav>
        </div> 
        
        {/* Hero Section */}
        <div className="pt-24"></div>
            <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-8">
            <div>
                <h1 className="text-5xl font-bold leading-tight">
                A Pocket-Sized Sanctuary for Your Mind 
                </h1>
                <h2 className="text-2xl font-bold leading-tight mb-6">
                (because it matters dummy)
                </h2>
                <p className="text-gray-600 mb-8">
                    Feeling mehh?? Some days, your thoughts feel like a whirlwind. Other days, you just need someone—something—to listen without judgment. That's where mindEase comes in. Whether you're seeking clarity, comfort, or just a space to breathe, we're here for you.
                </p>
                <p>
                    Chat with our AI-powered companion for a friendly, pressure-free conversation. Take a quick mental health check-in to better understand your emotions. Or simply explore tools designed to help you find balance in the chaos. No stigma, no judgment—just support, one day at a time. 💙
                </p>
            </div>
            <div className="flex justify-center items-center">
                <img src="\src\public\Freedom.png" alt="Illustration" className="w-5/5" />
            </div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-5">
                <h3 className="text-3xl font-bold leading-tight mb-3">
                Tools for a Healthier Mind (we try our best, so you can live your best)
                </h3>
                <p className="mt-4 text-gray-600">
                    <b>WE, THE PEOPLE AT mindEase </b>
                </p>
                <p className="mt-4 text-gray-600">
                Having resolved to create a <b>SAFE, COMPASSIONATE, and STIGMA-FREE SPACE</b> for mental well-being, we dedicate ourselves to fostering a community built on <b>empathy, support, and self-discovery</b>.
                </p>
                <p className="mt-4 text-gray-600">
                We pledge to uphold the values of <b>understanding, inclusivity, and emotional resilience</b>, ensuring that every individual finds the strength to navigate their mental landscape with confidence and care. 
                </p>
                <p className="mt-4 text-gray-600">
                In pursuit of a world where <b>mental health is prioritized, respected, and nurtured</b>, we affirm our commitment to providing accessible tools, thoughtful guidance, and a listening ear—so that no one ever has to feel alone in their journey toward well-being. 💙
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-secondary/20 rounded-3xl transition-all duration-300 hover:bg-purple-300 hover:shadow-lg hover:scale-105 hover:ring-4 hover:ring-purple-400 hover:ring-opacity-50">
                <img src="\src\public\Chatbot Logo.png" alt="chatbot Logo" className="h-24" />
                <h3 className="text-2xl font-semibold mb-1">
                    <span className="px-4 py-2 text-deepPurple">Take the quiz!! We're pretty accurate </span>
                </h3>
                <h3 className="text-1xl font-semibold ml-4 mb-4">
                    <span className="px-1 py-1 text-deepPurple">(we won't tell anyone pinky promise) </span>
                </h3>
                <button 
                    onClick={() => navigate('/PredictionPage')}
                    className="flex items-center gap-2 text-purple-700 hover:text-purple-800"
                >
                    It's kinda fun, dont panic!
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="p-8 bg-pink-200 rounded-3xl transition-all duration-300 hover:bg-pink-300 hover:shadow-lg hover:scale-105 hover:ring-4 hover:ring-pink-400 hover:ring-opacity-50">
                <img src="\src\public\Chatbot Logo.png" alt="chatbot Logo" className="h-24" />
                <h3 className="text-2xl font-semibold mb-1">
                    <span className="px-4 py-2 text-deepPurple">Orrrr.. You could talk to our Bot !! </span>
                </h3>
                <h3 className="text-1xl font-semibold ml-4 mb-4">
                    <span className="px-1 py-1 text-deepPurple">(they go by Mindy btw and they're great with secrets 🤫)  </span>
                </h3>
                <button 
                    onClick={() => navigate('/ChatPage')}
                    className="flex items-center gap-2 text-purple-700 hover:text-purple-800"
                >
                    We do care about your rants so come around
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            </div>

            <div className="mt-8 p-10 bg-deepPurple/80 rounded-3xl">
            <h3 className="text-2xl text-lightBg font-semibold mb-4">We're all in this together. Come around to know what drives us!</h3>
            <p className="text-gray-600 text-lightBg mb-6">
                Mental health is such a touchy subject, SO INACCESSIBLE, and for what? why at all? Don't we all deserve a nice day? a normal day? It's 2025 and we'vs had enough of that. We've got you. This is a safe space. We're doing our best. (affirmations go a long way. 💗)
            </p>
            <button 
                onClick={() => navigate('/InfoPage')}
                className="px-6 py-3 font-semibold bg-primary/80  rounded-lg  hover:bg-purple-700 text-black hover:text-white transition-colors">
                Learn More
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