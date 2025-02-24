import React from "react";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className="mx-auto max-w-7xl px-6">
            <footer className="bg-secondary rounded-t-3xl text-white py-12 px-8 shadow-lg">
                <div className="container mx-auto max-w-7xl px-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="src/public/Text Logo.png" alt="mindEase Logo" className="h-24" />
                        </div>
                        <div className="space-y-2">
                            <p className="border-b text-2xl text-liightBg mb-6">Team</p>
                            <button onClick={() => navigate('/AboutPage')}
                                className="flex items-center gap-2 text-lightBg hover:text-black">
                                About us
                            </button>
                            <button onClick={() => navigate('/InfoPage')}
                                className="flex items-center gap-2 text-lightBg hover:text-black">
                                About mindEase
                            </button>
                            <button onClick={() => navigate('/ResourcePage')}
                                className="flex items-center gap-2 text-lightBg hover:text-black">
                                Resources
                            </button>
                            <button onClick={() => navigate('/ContactPage')}
                                className="flex items-center gap-2 text-lightBg hover:text-black">
                                Contact us
                            </button>
                        </div>
                        <div className="space-y-2">
                            <p className="border-b text-2xl text-liightBg mb-6">Reach us</p>
                            <p>Email: mindease.devs@gmail.com</p>
                            <p>Phone: 9337150262 / 7978268815</p>
                            <p>Address: Bhubaneswar</p>
                        </div>
                    </div>
                    <div className="mt-12 pt-6 border-t border-purple-400 text-center">
                        <p>&copy; 2025 mindEase. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;