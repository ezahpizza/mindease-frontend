    import React from 'react';
    import { UserButton } from '@clerk/clerk-react';
    import PredictionForm from '../components/PredictionForm';

    const PredictionPage = () => {
    return (
        <div className="min-h-screen bg-white">
        {/* Navbar */}
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                <img src="/src/public/Text Logo.png" alt="MindEase Logo" className="h-14" />
                </div>
                <div className="flex items-center gap-4">
                <button 
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-2 rounded-lg bg-pink-200 hover:bg-pink-300 transition-colors text-black font-medium"
                >
                    Home
                </button>
                <UserButton afterSignOutUrl="/" />
                </div>
            </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Check In with Yourself - Because Your Mind Deserves Care</h1>
            <h3 className="text-1.5xl font-bold text-gray-800 mt-2">Take a moment to pause. Our quick mental health assessment helps you understand your well-being and provides personalized insights—no pressure, no judgment, just support. 💙</h3>
            </div>
            <PredictionForm />
        </main>
        </div>
    );
    };

    export default PredictionPage;