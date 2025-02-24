import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import FormStageOne from './form-components/FormStageOne';
import FormStageTwo from './form-components/FormStageTwo';
import FormStageThree from './form-components/FormStageThree';
import FormStageFour from './form-components/FormStageFour';
import ProgressBar from './form-components/ProgressBar';
import ResultCard from './form-components/ResultCard';
import { usePredictionForm } from './hooks/usePredictionForm';
import FormCard from './form-components/FormCard';
import './prediction.css';

const PredictionForm = () => {
    const { user } = useUser();
    const { 
        formData, 
        result, 
        error, 
        isLoading,
        currentStage,
        handleChange,
        handleSubmit,
        nextStage,
        prevStage // From your updated hook
    } = usePredictionForm(user);

    const [isAnimating, setIsAnimating] = useState(false);
    const [exitingStage, setExitingStage] = useState(null);

    const [animationDirection, setAnimationDirection] = useState('right');

    const handleNextStage = () => {
        setExitingStage(currentStage);
        setIsAnimating(true);
        setAnimationDirection('right');
        setTimeout(() => {
            nextStage();
            setIsAnimating(false);
            setExitingStage(null);
        }, 300);
    };
    
    const handlePrevStage = () => {
        if (currentStage > 1) {
            setExitingStage(currentStage);
            setIsAnimating(true);
            setAnimationDirection('left');
            setTimeout(() => {
                prevStage();
                setIsAnimating(false);
                setExitingStage(null);
            }, 300);
        }
    };

    const renderStage = () => {
        const stages = {
            1: <FormStageOne formData={formData} handleChange={handleChange} />,
            2: <FormStageTwo formData={formData} handleChange={handleChange} />,
            3: <FormStageThree formData={formData} handleChange={handleChange} />,
            4: <FormStageFour formData={formData} handleChange={handleChange} />
        };
        return stages[currentStage];
    };

    const renderExitingStage = () => {
        if (!exitingStage) return null;
        
        const stages = {
            1: <FormStageOne formData={formData} handleChange={handleChange} />,
            2: <FormStageTwo formData={formData} handleChange={handleChange} />,
            3: <FormStageThree formData={formData} handleChange={handleChange} />,
            4: <FormStageFour formData={formData} handleChange={handleChange} />
        };
        return stages[exitingStage];
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-deepPurple mb-4">Check in With Yourself</h1>
                <p className="text-gray-600">
                    Take a moment to pause. Our quick mental health assessment helps you understand your well-being and
                    provides personalized insights—no pressure, no judgment, just support. 💙
                </p>
            </div>
            
            <ProgressBar currentStage={currentStage} />
            
            <div className="relative overflow-hidden">
    {/* Exiting stage */}
    {isAnimating && exitingStage && (
        <div className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${animationDirection === 'right' ? '-translate-x-full' : 'translate-x-full'}`}>
            <FormCard className="transition-opacity duration-300">
                {renderExitingStage()}
            </FormCard>
        </div>
    )}
    
    {/* Current stage */}
    <div className={`transform transition-transform duration-500 ease-in-out ${isAnimating ? (animationDirection === 'right' ? 'translate-x-full' : '-translate-x-full') : ''}`}>
        <FormCard key={currentStage} className="transition-opacity duration-300">
            {renderStage()}
        </FormCard>
    </div>
</div>
            
<div className="mt-8 flex justify-center gap-8">
    {currentStage > 1 && (
        <button
            onClick={handlePrevStage}
            className="px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
        >
            &lt;
        </button>
    )}
    
    {currentStage < 4 ? (
        <button
            onClick={handleNextStage}
            className="px-8 py-3 bg-deepPurple text-white rounded-full hover:bg-purple-700 transition-colors"
        >
            &gt;
        </button>
    ) : (
        <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-8 py-3 bg-deepPurple text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
            Get a prediction
        </button>
    )}
</div>

            {error && (
                <div className="mt-4 text-center text-red-600">
                    {error}
                </div>
            )}

            {result && <ResultCard result={result} />}
        </div>
    );
};

export default PredictionForm;