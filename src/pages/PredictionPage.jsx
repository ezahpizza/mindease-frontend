import React from 'react';
import Header from '../components/Header';
import PredictionForm from '../feature-components/PredictionForm';

const PredictionPage = () => {
return (
        <div className="min-h-screen bg-deepPurple/70">
            <Header />
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-primary p-8 rounded-3xl">
                    <PredictionForm />
                </div>
            </main>
        </div>
    );
};

export default PredictionPage;