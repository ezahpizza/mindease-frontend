import React from "react";
import { useNavigate } from 'react-router-dom';

function HomeServices() {
    const navigate = useNavigate();

    return (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div onClick={() => navigate('/PredictionPage')} className="p-8 bg-secondary/20 rounded-3xl transition-all duration-300 hover:bg-purple-300 hover:shadow-lg hover:scale-105 hover:ring-4 hover:ring-purple-400 hover:ring-opacity-50 cursor-pointer">
                    <img src="\src\public\Chatbot Logo.png" alt="chatbot Logo" className="h-24" />
                    <h3 className="text-2xl font-semibold mb-1">
                        <span className="text-deepPurple">Take the quiz!! We're pretty accurate </span>
                    </h3>
                    <h3 className="text-1xl font-semibold mb-4">
                        <span className="text-deepPurple">(we won't tell anyone pinky promise) </span>
                    </h3>
                    <button onClick={() => navigate('/PredictionPage')}
                    className="flex items-center gap-2 text-purple-700 hover:text-purple-800">
                        It's kinda fun, dont panic!
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div onClick={() => navigate('/ChatPage')} className="p-8 bg-pink-200 rounded-3xl transition-all duration-300 hover:bg-pink-300 hover:shadow-lg hover:scale-105 hover:ring-4 hover:ring-pink-400 hover:ring-opacity-50 cursor-pointer">
                    <img src="\src\public\Chatbot Logo.png" alt="chatbot Logo" className="h-24" />
                    <h3 className="text-2xl font-semibold mb-1">
                        <span className="text-deepPurple">Orrrr.. You could talk to our Bot !! </span>
                    </h3>
                    <h3 className="text-1xl font-semibold mb-4">
                        <span className="text-deepPurple">(they go by Mindy btw and they're great with secrets 🤫)  </span>
                    </h3>
                    <button onClick={() => navigate('/ChatPage')}
                    className="flex items-center gap-2 text-purple-700 hover:text-purple-800">
                        We do care about your rants so come around
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mt-8 p-10 bg-deepPurple/80 rounded-3xl md:mt-16">
                <h3 className="text-2xl text-lightBg font-semibold mb-4">
                    We're all in this together. Come around to know what drives us!
                </h3>
                <p className="text-gray-600 text-lightBg mb-6">
                Mental health is such a touchy subject, SO INACCESSIBLE, and for what? why at all? Don't we all deserve a nice day? a normal day? It's 2025 and we'vs had enough of that. We've got you. This is a safe space. We're doing our best. (affirmations go a long way. 💗)
                </p>
                <button onClick={() => navigate('/InfoPage')}
                className="px-6 py-3 font-semibold bg-primary/80  rounded-lg  hover:bg-purple-700 text-black hover:text-white transition-colors">
                    Learn More
                </button>
            </div>
        </section>
    );
}

export default HomeServices;