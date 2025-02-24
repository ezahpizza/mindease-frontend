import React from 'react';

const FormCard = ({ title, subtitle, children }) => (
    <div className="bg-deepPurple/30 rounded-3xl p-8 shadow-lg max-w-2xl mx-auto md:mx-4 w-full">
        <h2 className="text-2xl font-bold text-deepPurple mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

export default FormCard;