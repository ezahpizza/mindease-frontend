import React from 'react';
import Header from '../components/Header';

const InfoPage = () => {
    return (
        <div className="min-h-screen bg-deepPurple/70">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-primary rounded-3xl p-8 shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Mental Health: It's Real, It's Tough, and You're Not Alone</h1>
                    
                    <div className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">And we get it (kind of)</h2>
                            <p className="leading-relaxed">
                                Let's be honest—life can get messy. Some days, even the smallest tasks feel impossible. Maybe your mind won't quiet down, or everything just feels… off. You're not alone in this. Millions of people experience anxiety, stress, and emotional ups and downs, often feeling like they have to handle it all by themselves. But here's the truth: you don't.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Signs Your Mind Might Need a Little TLC</h2>
                            <div className="pl-6 space-y-2">
                                <p>• Feeling drained or overwhelmed by everyday life</p>
                                <p>• Sleep or appetite suddenly all over the place</p>
                                <p>• Trouble focusing or making decisions</p>
                                <p>• That heavy, anxious feeling that won’t go away</p>
                                <p>• Pulling away from friends, family, or things you used to enjoy</p>
                                <p>• Work or school feeling extra tough to handle</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">How MindEase Can Help (we in the same boat, hop on!)</h2>
                            <p className="leading-relaxed mb-4">
                                We get it—talking about mental health can feel intimidating. That's why we've made it simple, approachable, and completely judgment-free.
                            </p>
                            <div className="pl-6 space-y-4">
                                <div>
                                    <h3 className="font-semibold text-xl mb-2">Personalized Mental Health Check-Ins</h3>
                                    <p>A quick, science-backed assessment to help you understand your emotional well-being and get personalized insights on what might help.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-xl mb-2">A Chatbot That Actually Listens</h3>
                                    <p>Our AI-powered chat is here 24/7, providing a safe space to vent, reflect, and get guidance whenever you need it—no awkward conversations required.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Taking the First Step, Your Way</h2>
                            <p className="leading-relaxed">
                                Seeking help is a sign of strength, not weakness.Mental health isn’t one-size-fits-all, and neither is support. Whether you’re looking for a little clarity, a place to offload your thoughts, or just someone (or something) to “get” you—MindEase is here. No pressure, no judgment, just support when you need it. 💙
                            </p>
                        </section>

                        <div className="mt-8 text-center">
                            <p className="text-lg font-medium mb-4">Come take this journey with us, for yourself. It's going to be okay.💗</p>
                            <button 
                                onClick={() => window.location.href = '/PredictionPage'}
                                className="px-8 py-3 bg-deepPurple text-white rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                Let's see how you're doing today
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InfoPage;