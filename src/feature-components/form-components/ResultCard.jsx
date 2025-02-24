import React from 'react';

const ResultCard = ({ result }) => (
    <div className="mt-8">
        <div className={`p-6 rounded-xl ${
            result.prediction > 0.5 ? 'bg-resultRed' : 'bg-resultGreen'
        }`}>
            <div className="space-y-2">
                <p className="text-2xl gray-700">🌿 <b>Your Mental Health Check-In Results:</b></p>
                <p className="text-gray-700">Risk Score: {(result.prediction * 100).toFixed(1)}%</p>
                <h3 className="text-1xl font-semibold mb-4">
                    {result.prediction_label}
                </h3>
                {result.prediction > 0.5 ? (
                    <div className="mt-4 text-gray-700">
                        <p className="text-gray-700"><b>Your mind may be asking for a little extra care.</b> Based on your responses, there are signs that you might be experiencing some mental health challenges. </p>
                        <p className="text-gray-700">It's Okay to Seek Support - You're Not Alone 💙</p>
                        <p>What You Can Do:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Consider reaching out to a mental health professional (we know it's a tough door to open, but it really helps!)—they can provide valuable guidance.</li>
                            <li>Prioritize rest with a consistent sleep routine. No screens. No doomscrolling. You. Need. The. Rest.</li>
                            <li>Move your body—gentle activity can work wonders. Go for a run, or scoot around the house. get moving as best as you can, your body will love it and you would too. 🥰</li>
                            <li>Lean on your support system; you don't have to go through this alone.</li>
                        </ul>
                        <p>💡 <b>Remember: This isn't a diagnosis—just a friendly nudge to take care of yourself. Support is always available.</b> 💙
                        </p>
                    </div>
                ) : (
                    <div className="mt-4 text-gray-700">
                        <p className="text-gray-700"><b>Yaay!! Your Mind Is in a Good Place- Keep Nurturing It!</b></p>
                        <p className="text-gray-700">Your responses suggest that you're in a stable and healthy mental space. <b>WE"RE SO PROUD OF YOU!!</b></p>
                        <p>Ways to Keep Thriving:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Stick to your healthy routines—they're working for you!</li>
                            <li>Practice mindfulness or stress-relief activities to stay balanced.</li>
                            <li>Stay connected with loved ones—support systems matter.</li>
                            <li>If you ever feel off, don't hesitate to check in with yourself and seek help when needed.</li>
                        </ul>
                        <p>
                        💡 <b>Well-being is a journey, not a destination. Keep taking care of yourself—you deserve it!</b> 💙
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default ResultCard;