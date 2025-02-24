import React from 'react';
import Header from '../components/Header';

const ResourcePage = () => {
    return (
        <div className="min-h-screen bg-deepPurple/20">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Background image container with relative positioning */}
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background image with lower z-index */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="\src\public\mindease-logo.png" 
                            alt="Background" 
                            className="w-full h-full object-cover opacity-30"
                        />
                    </div>
                    
                    {/* Content with higher z-index */}
                    <div className="relative z-10 bg-primary/60 rounded-3xl p-8 shadow-lg">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mental Health Resources: Finding Your Path Forward</h1>
                        
                        <div className="space-y-8 text-gray-700">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Crisis Support: When You Need Help Now</h2>
                                <div className="bg-white/70 rounded-xl p-6 shadow-md">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1 border-l-4 border-red-500 pl-4">
                                            <h3 className="text-xl font-bold text-red-600 mb-2">Emergency Resources</h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <span className="font-semibold mr-2">📞 National Suicide Prevention Lifeline:</span> 
                                                    <span>988 or 1-800-273-8255 (24/7)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-semibold mr-2">💬 Crisis Text Line:</span> 
                                                    <span>Text HOME to 741741 (24/7)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-semibold mr-2">🚨 Emergency Services:</span> 
                                                    <span>Call 911 for immediate emergency assistance</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex-1 border-l-4 border-orange-400 pl-4">
                                            <h3 className="text-xl font-bold text-orange-600 mb-2">How to Know It's a Crisis</h3>
                                            <p className="mb-3">You may need immediate help if you or someone you know is:</p>
                                            <ul className="space-y-2">
                                                <li>• Thinking about harming yourself or others</li>
                                                <li>• Experiencing severe confusion or disorientation</li>
                                                <li>• Unable to care for basic needs (eating, sleeping)</li>
                                                <li>• Experiencing hallucinations or delusions</li>
                                                <li>• Having extreme mood swings or panic attacks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Finding Professional Support</h2>
                                <div className="bg-white/70 rounded-xl p-6 shadow-md">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="border-l-4 border-blue-500 pl-4">
                                            <h3 className="text-xl font-bold text-blue-600 mb-2">Therapy Options</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="font-semibold">🔍 Psychology Today Directory</p>
                                                    <p className="text-sm">Search for therapists, psychiatrists, treatment centers, and support groups in your area</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">💻 Online Therapy Platforms</p>
                                                    <p className="text-sm">BetterHelp, Talkspace, and Cerebral offer virtual therapy with licensed professionals</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🏥 Community Mental Health Centers</p>
                                                    <p className="text-sm">Provide services regardless of ability to pay; search for "community mental health" in your area</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="border-l-4 border-green-500 pl-4">
                                            <h3 className="text-xl font-bold text-green-600 mb-2">Insurance & Financial Support</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="font-semibold">📋 Insurance Coverage</p>
                                                    <p className="text-sm">Contact your insurance provider to understand your mental health benefits</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">💰 Sliding Scale Options</p>
                                                    <p className="text-sm">Many therapists offer reduced rates based on income; always ask about this option</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🎓 University Services</p>
                                                    <p className="text-sm">Students may access free or low-cost counseling through their schools</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">⚕️ Open Path Collective</p>
                                                    <p className="text-sm">Network offering affordable sessions between $30-60</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Self-Help Resources & Tools</h2>
                                <div className="bg-white/70 rounded-xl p-6 shadow-md">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="border-l-4 border-purple-500 pl-4">
                                            <h3 className="text-xl font-bold text-purple-600 mb-2">Digital Tools</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="font-semibold">📱 MindEase App</p>
                                                    <p className="text-sm">Our free app for daily check-ins, guided meditations, and coping strategies</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🧘 Headspace / Calm</p>
                                                    <p className="text-sm">Meditation and mindfulness apps with evidence-based techniques</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">📊 Moodfit / Daylio</p>
                                                    <p className="text-sm">Mood tracking apps to identify patterns and triggers</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="border-l-4 border-yellow-500 pl-4">
                                            <h3 className="text-xl font-bold text-yellow-600 mb-2">Learning Resources</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="font-semibold">📚 Recommended Books</p>
                                                    <p className="text-sm">"Feeling Good" by Dr. Burns, "The Body Keeps the Score" by Dr. van der Kolk</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🎓 Free Online Courses</p>
                                                    <p className="text-sm">Yale's "The Science of Well-Being" on Coursera, Mental Health First Aid</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🎧 Mental Health Podcasts</p>
                                                    <p className="text-sm">"Therapy for Black Girls," "The Happiness Lab," "Mental Illness Happy Hour"</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="border-l-4 border-teal-500 pl-4">
                                            <h3 className="text-xl font-bold text-teal-600 mb-2">Daily Practices</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="font-semibold">🧠 Cognitive Behavioral Techniques</p>
                                                    <p className="text-sm">Thought records, cognitive restructuring worksheets</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">📝 Journaling Prompts</p>
                                                    <p className="text-sm">Gratitude lists, emotion processing prompts, daily reflections</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">💤 Sleep Hygiene Tools</p>
                                                    <p className="text-sm">Sleep logs, relaxation techniques, blue light management</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Community & Support Groups</h2>
                                <div className="bg-white/70 rounded-xl p-6 shadow-md">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="border-l-4 border-pink-500 pl-4">
                                            <h3 className="text-xl font-bold text-pink-600 mb-2">Find Your Community</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="font-semibold">👥 NAMI Support Groups</p>
                                                    <p className="text-sm">National Alliance on Mental Illness offers free peer-led support groups nationwide</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">💻 Online Communities</p>
                                                    <p className="text-sm">Mental Health America, 7 Cups, Reddit communities (r/mentalhealth, r/anxiety)</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🙏 Recovery Groups</p>
                                                    <p className="text-sm">DBSA (Depression and Bipolar Support Alliance), Recovery International</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="border-l-4 border-indigo-500 pl-4">
                                            <h3 className="text-xl font-bold text-indigo-600 mb-2">Specialized Support</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="font-semibold">🌈 LGBTQ+ Resources</p>
                                                    <p className="text-sm">Trevor Project, Pride Counseling, GLMA Provider Directory</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🎖️ Veterans' Resources</p>
                                                    <p className="text-sm">VA Mental Health Services, Veterans Crisis Line (1-800-273-8255)</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">👨‍👩‍👧‍👦 Family Support</p>
                                                    <p className="text-sm">NAMI Family-to-Family program, Family therapy resources</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">🏥 Grief Support</p>
                                                    <p className="text-sm">GriefShare groups, Compassionate Friends, hospice bereavement services</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="mt-8 text-center">
                                <p className="text-lg font-medium mb-4">Remember: Reaching out is a sign of strength, not weakness. You deserve support. 💙</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ResourcePage;