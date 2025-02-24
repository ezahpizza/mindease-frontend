import React, { useState } from "react";
import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function LandingNav() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'info', label: 'About mindEase' },
        { id: 'about', label: 'About us' },
    ];

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50">
            <nav className="mx-auto max-w-5xl bg-white rounded-full shadow-lg py-4 px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="\src\public\mindease-logo.png" alt="mindEase Logo" className="h-8" />
                        <span className="text-xl font-semibold">mindEase</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 md:hidden">
                            <button 
                                className="flex items-center gap-2 text-purple-700 hover:text-purple-800"
                                onClick={handleMenuToggle}
                            >
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <button 
                                onClick={() => navigate('/InfoPage')}
                                className="flex items-center gap-2 text-purple-700 hover:text-purple-800 mr-6">
                                About mindEase
                            </button> 
                            <button 
                                onClick={() => navigate('/AboutPage')}
                                className="flex items-center gap-2 text-purple-700 hover:text-purple-800">
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
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-pink-500/20 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    navigate(`/${item.id.charAt(0).toUpperCase() + item.id.slice(1) + 'Page'}`);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-center py-2 rounded-md text-base font-medium ${
                                    'text-black bg-pink-500/20 hover:bg-pink-500/30'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <SignInButton mode="modal">
                            <button className="block w-full text-center py-2 rounded-md text-base font-medium text-black bg-pink-500/20 hover:bg-pink-500/30">
                                Sign in
                            </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button className="block w-full text-center py-2 rounded-md text-base font-medium text-black bg-pink-500/20 hover:bg-pink-500/30">
                                Sign up
                            </button>
                        </SignUpButton>
                    </div>
                </div>
            )}
        </div> 
    );
}

export default LandingNav;