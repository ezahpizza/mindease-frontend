import { useState } from 'react';
import axios from 'axios';

export const usePredictionForm = (user) => {
    const [currentStage, setCurrentStage] = useState(1);
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        city: '',
        profession: '',
        academic_pressure: 0,
        work_pressure: 0,
        cgpa: '',
        study_satisfaction: 0,
        job_satisfaction: 0,
        sleep_duration: '',
        dietary_habits: '',
        degree: '',
        suicidal_thoughts: '',
        work_study_hours: '',
        financial_stress: 0,
        mi_history: ''
    });

    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/predict', {
                ...formData,
                user_id: user.id
            });
            setResult(response.data);
        } catch (err) {
            setError('Failed to get prediction. Please try again.');
            console.error('Prediction error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStage = () => {
        if (currentStage < 4) {
            setCurrentStage(currentStage + 1);
        }
    };
    
    const prevStage = () => {
        if (currentStage > 1) {
            setCurrentStage(currentStage - 1);
        }
    };

    return {
        formData,
        result,
        error,
        isLoading,
        handleChange,
        handleSubmit,
        currentStage,
        nextStage,
        prevStage,
    };
};
