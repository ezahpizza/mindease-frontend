import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import Swal from 'sweetalert2'

const ContactPage = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "11dbead0-2c39-4194-9927-39b3a94e4456");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen bg-deepPurple/20">
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-primary/80 rounded-3xl p-8 shadow-lg max-w-2xl mx-auto flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center">Get in Touch</h1>
                    <form onSubmit={onSubmit} className="bg-white/60 space-y-6 rounded-3xl p-8 shadow-lg w-4/5 max-w-3xl flex-col">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-deepPurple focus:border-transparent outline-none transition-colors"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-deepPurple focus:border-transparent outline-none transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-deepPurple focus:border-transparent outline-none transition-colors resize-none"
                                placeholder="Enter your message"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-lg bg-deepPurple text-white font-medium hover:bg-deepPurple/90 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 text-center text-gray-700">
                        <p>Need immediate support? Visit our <a href="/resources" className="text-deepPurple hover:underline">Resources</a> page.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;