import React from "react";
import { SignUpButton } from '@clerk/clerk-react';

function LandingHero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
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
            <div className="order-1 md:order-2 flex justify-center items-center">
                <img src="\src\public\header-image.png" alt="Illustration" className="w-full md:w-4/5" />
            </div>
        </section>
    );
}

export default LandingHero;