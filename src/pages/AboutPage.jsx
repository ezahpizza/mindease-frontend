import React from 'react';
import Header from '../components/Header';

const SocialLinks = ({ links }) => {
return (
    <div className="flex gap-3 mt-4">
        {links.map((link, index) => (
            <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-deepPurple/20 hover:bg-deepPurple/30 text-gray-700 text-sm font-medium transition-colors"
            >
            {link.type === 'linkedin' ? 'LinkedIn' : link.type === 'behance' ? 'Behance' : 'GitHub'}
            </a>
        ))}
    </div>
    );
};

const AboutPage = () => {
return (
    <div className="min-h-screen bg-deepPurple/70">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-primary rounded-3xl p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">The Minds Behind mindEase</h1>
                <h1 className="text-1xl font-bold text-gray-900 mb-8 text-center">(cheesy much?)</h1>

                <div className="space-y-16">
                    {/* First Team Member */}
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 xl:w-1/5">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-deepPurple shadow-lg">
                                <img 
                                src="\src\public\Prateek-Mohapatra.jpg" 
                                alt="Prateek Mohapatra"
                                className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="flex-grow md:w-2/3 lg:w-3/4 xl:w-4/5">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Prateek Mohapatra</h2>
                            <h3 className="text-1xl font-semibold text-gray-900 mb-4">Art, Code & Compassion</h3>
                            <div className="space-y-4 text-gray-700">
                                <p className="leading-relaxed">
                                Prateek is a creator at heart—an artist who speaks the language of code just as fluently as that of brushstrokes and design. From curating the illustrations to shaping the UI/UX, every detail of mindEase reflects both technical precision and artistic intent.  
                                </p>
                                <p className="leading-relaxed">
                                With a strong foundation in data and code (data science, machine learning, LLMS, neural networks, and the like) Prateek has trained the models we use to understand and respond to human emotions meaningfully. Through this journey, they've also honed their skills as a backend engineer, ensuring mindEase isn't just intuitive but powerful under the hood. They lead the technical development of our platform, ensuring that our tools are both dependable and user-friendly.
                                </p>
                                <p className="leading-relaxed">
                                But beyond the tech, this project is deeply personal. Having faced mental health challenges firsthand and struggled to find accessible support, Prateek set out to build what they once needed—<b>a space where technology meets empathy, making mental wellness approachable for all.</b>
                                </p>
                                <SocialLinks 
                                links={[
                                    { type: 'linkedin', url: 'https://www.linkedin.com/in/prateekmp/' },
                                    { type: 'behance', url: 'https://www.behance.net/prateekmohapat' },
                                    { type: 'github', url: 'https://github.com/ezahpizza' }
                                    ]} />
                            </div>
                        </div>
                       
                    </div>

                    {/* Second Team Member */}
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
                        <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 xl:w-1/5">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-deepPurple shadow-lg">
                                <img 
                                src="\src\public\Jyotiraditya-Swain.jpg"
                                alt="Jyotiraditya Swain"
                                className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="flex-grow md:w-2/3 lg:w-3/4 xl:w-4/5">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Jyotiraditya Swain</h2>
                            <h3 className="text-1xl font-semibold text-gray-900 mb-4">Bridging mental health and technology - One Pixel at a Time</h3>
                            <div className="space-y-4 text-gray-700">
                                <p className="leading-relaxed">
                                Jyotiraditya is the architect behind the intuitive, welcoming experience of mindEase. As a frontend expert, he took the lead in designing and developing the interface, ensuring that every interaction feels seamless, accessible, and inviting. His deep understanding of modern frontend tools and frameworks helped transform mindEase from an idea into a platform that truly resonates with users.  
                                </p>
                                <p className="leading-relaxed">
                                The code aside, they mean to make a change in the mental health space, how it is perceived, how it is nurtured, and all the niche issues that shape or contort our psyche. mindEase was born from his vision—a belief that mental health support should be as approachable as opening a link. His empathy for those struggling with mental health fuels his commitment to crafting a digital space where <b>people feel heard, understood, and supported</b>.
                                </p>
                                <SocialLinks 
                                links={[
                                    { type: 'linkedin', url: 'https://www.linkedin.com/in/jyotiraditya--swain/' },
                                    { type: 'github', url: 'https://github.com/Jyotiraditya077' }
                                    ]} />
                            </div>
                        </div>
                    </div>

                    {/* Third Team Member */}
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 xl:w-1/5">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-deepPurple shadow-lg">
                                <img 
                                src="\src\public\Amlan-Sahu.jpg" 
                                alt="Amlan Sahu"
                                className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="flex-grow md:w-2/3 lg:w-3/4 xl:w-4/5">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Amlan Sahu</h2>
                            <h3 className="text-1xl font-semibold text-gray-900 mb-4">Turning Data into Meaningful Insights</h3>
                            <div className="space-y-4 text-gray-700">
                                <p className="leading-relaxed">
                                Amlan Sahu is the enabler of mindEase's AI-driven intelligence. As the data specialist of the team, he meticulously scraped and curated the datasets that power the platform’s models, ensuring they are accurate, diverse, and truly reflective of real-world mental health experiences.
                                </p>
                                <p className="leading-relaxed">
                                Amlan shares a deep passion for the mission behind mindEase—making mental health support more accessible and impactful. His work behind the scenes plays a crucial role in transforming raw data into meaningful insights, helping users receive the guidance and understanding they deserve.
                                </p>
                                <SocialLinks 
                                links={[
                                    { type: 'linkedin', url: 'https://www.linkedin.com/in/amlansahu/' }
                                    ]} />
                            </div>
                        </div>
                        
                    </div>

                    {/* Mission Statement */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We're Here For</h2>
                        <p className="text-gray-700 leading-relaxed">
                        At mindEase, we know that mental health isn't a luxury—it's a <b>necessity</b>. But finding the right support can feel overwhelming, confusing, or just out of reach. That's why we're using the power of <b>technology, empathy, and innovation</b> to create a space where anyone can check in, reflect, and get the support they deserve.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                        Our mission is simple: <b>break the stigma, remove the barriers, and make mental wellness approachable for all.</b> Whether it's through meaningful conversations, insightful assessments, or just a safe space to be yourself, we're here looking out for you. 💙
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
};

export default AboutPage;