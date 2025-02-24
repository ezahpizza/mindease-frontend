import React from "react";

function HomeHero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
                    <h1 className="text-5xl font-bold leading-tight mb-6">
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
            <div className="order-1 md:order-2 flex justify-center items-center">
                <img src="\src\public\Freedom.png" alt="Illustration" className="w-full md:w-5/5" />
            </div>
        </section>
    );
}

export default HomeHero;