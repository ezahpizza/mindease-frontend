import React from 'react';

const ProgressBar = ({ currentStage }) => (
    <div className="flex justify-between mb-8 relative">
        {[1, 2, 3, 4].map((stage) => (
            <div
                key={stage}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10
                    ${currentStage >= stage ? 'bg-deepPurple text-white' : 'bg-gray-200 text-gray-500'}`}
            >
                {stage}
            </div>
        ))}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2">
            <div
                className="h-full bg-deepPurple transition-all duration-300"
                style={{ width: `${((currentStage - 1) / 3) * 100}%` }}
            />
        </div>
    </div>
);

export default ProgressBar;