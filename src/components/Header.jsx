import React from "react";
import { UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                    <img src="/src/public/Text Logo.png" alt="MindEase Logo" className="h-14" />
                    </div>
                    <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate('/HomePage')}
                        className="px-6 py-2 rounded-lg bg-primary/80 hover:bg-pink-300 transition-colors text-black font-medium">
                        Home
                    </button>
                    <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;