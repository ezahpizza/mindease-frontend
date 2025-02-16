import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { Slider } from '@mui/material';

const PredictionForm = () => {
    const { user } = useUser();
    
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

    const handleSubmit = async (e) => {
        e.preventDefault();
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

    const FormLabel = ({ children }) => (
        <span className="inline-block px-4 py-1 bg-deepPurple/50 text-white rounded-lg text-sm font-medium">
            {children}
        </span>
    );

    const FieldContainer = ({ children }) => (
        <div className="bg-secondary/10 p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
            {children}
        </div>
    );

    const SliderField = ({ name, value, label }) => (
        <FieldContainer>
            <div className="mb-4">
                <FormLabel>{label}</FormLabel>
                <div className="mt-6 px-2">
                    <Slider
                        value={value}
                        onChange={(_, newValue) => handleChange(name, newValue)}
                        min={0}
                        max={10}
                        step={0.1}
                        sx={{
                            color: 'rgb(147, 51, 234)', // Matches deepPurple
                            '& .MuiSlider-thumb': {
                                width: 16,
                                height: 16,
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: '0 0 0 8px rgba(147, 51, 234, 0.1)'
                                }
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.3,
                                backgroundColor: '#9333ea'
                            },
                            '& .MuiSlider-track': {
                                border: 'none'
                            }
                        }}
                    />
                </div>
                <div className="text-center mt-2">
                    <span className="text-sm text-gray-500">{value}</span>
                </div>
            </div>
        </FieldContainer>
    );

    const Select = ({ name, value, options, label }) => (
        <FieldContainer>
            <div className="mb-2">
                <FormLabel>{label}</FormLabel>
                <select
                    value={value}
                    onChange={(e) => handleChange(name, e.target.value)}
                    className="mt-3 block w-full px-4 py-2 text-sm border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-deepPurple/50"
                >
                    <option value="" className="text-primary/40">Select {label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="text-deepPurple/90">
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </FieldContainer>
    );

    const NumberInput = ({ name, value, label, placeholder }) => (
        <FieldContainer>
            <div className="mb-2">
                <FormLabel>{label}</FormLabel>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={value}
                    onChange={(e) => {
                        const newValue = e.target.value.replace(/[^0-9]/g, '');
                        handleChange(name, newValue);
                    }}
                    placeholder={placeholder}
                    className="mt-3 block w-full px-4 py-2 text-sm border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
            </div>
        </FieldContainer>
    );

    return (
        <div className="bg-primary/40 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                    <Select
                        name="gender"
                        value={formData.gender}
                        label="Gender"
                        options={[
                            { value: 0, label: 'Male' },
                            { value: 1, label: 'Female' }
                        ]}
                    />

                    <NumberInput
                        name="age"
                        value={formData.age}
                        label="Age"
                        placeholder="Enter your age"
                    />

                    <Select
                        name="city"
                        value={formData.city}
                        label="City Type"
                        options={[
                            { value: 0, label: 'Rural' },
                            { value: 1, label: 'Urban' }
                        ]}
                    />

                    <Select
                        name="profession"
                        value={formData.profession}
                        label="Profession"
                        options={[
                            { value: 0, label: 'Student' },
                            { value: 1, label: 'Employed' }
                        ]}
                    />

                    <NumberInput
                        name="work_study_hours"
                        value={formData.work_study_hours}
                        label="Work hours"
                        placeholder="Enter work/study hours"
                    />
                </div>

                <div className="space-y-6">
                    <NumberInput
                        name="cgpa"
                        value={formData.cgpa}
                        label="CGPA"
                        placeholder="Enter your CGPA"
                    />
                    
                    <SliderField
                        name="academic_pressure"
                        value={formData.academic_pressure}
                        label="Academic pressure"
                    />

                    <SliderField
                        name="work_pressure"
                        value={formData.work_pressure}
                        label="Work pressure"
                    />

                    <SliderField
                        name="study_satisfaction"
                        value={formData.study_satisfaction}
                        label="Study Satisfaction"
                    />

                    <SliderField
                        name="job_satisfaction"
                        value={formData.job_satisfaction}
                        label="Job satisfaction"
                    />
                </div>

                <div className="space-y-6">
                    <Select
                        name="sleep_duration"
                        value={formData.sleep_duration}
                        label="Sleep"
                        options={[
                            { value: 0, label: '< 6 hours' },
                            { value: 1, label: '6-8 hours' },
                            { value: 2, label: '> 8 hours' }
                        ]}
                    />

                    <Select
                        name="dietary_habits"
                        value={formData.dietary_habits}
                        label="Diet"
                        options={[
                            { value: 0, label: 'Unhealthy' },
                            { value: 1, label: 'Moderate' },
                            { value: 2, label: 'Healthy' }
                        ]}
                    />

                    <Select
                        name="degree"
                        value={formData.degree}
                        label="Degree"
                        options={[
                            { value: 0, label: 'Bachelors' },
                            { value: 1, label: 'Masters' },
                            { value: 2, label: 'PhD' }
                        ]}
                    />

                    <Select
                        name="mi_history"
                        value={formData.mi_history}
                        label="Mental Illness History"
                        options={[
                            { value: 0, label: 'No' },
                            { value: 1, label: 'Yes' }
                        ]}
                    />

                    <Select
                        name="suicidal_thoughts"
                        value={formData.suicidal_thoughts}
                        label="Suicidal Thoughts"
                        options={[
                            { value: 0, label: 'No' },
                            { value: 1, label: 'Yes' }
                        ]}
                    />
                </div>
            </form>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="px-8 py-3 text-lg font-medium rounded-lg bg-secondary/70 hover:bg-secondary text-primary transition-all duration-300 ease-in-out"
                >
                    Get a Prediction
                </button>
            </div>

            {error && (
                <div className="mt-4 text-center text-red-600">
                    {error}
                </div>
            )}

            {result && (
                <div className="mt-8">
                    <div className={`p-6 rounded-xl ${
                        result.prediction > 0.5 ? 'bg-red-200' : 'bg-green-200'
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
            )}
        </div>
    );
};

export default PredictionForm;