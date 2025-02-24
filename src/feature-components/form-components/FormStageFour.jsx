import React from 'react';
import { Select } from './FormComponents';

const FormStageFour = ({ formData, handleChange }) => (
    <>
        <h2 className="text-2xl font-bold text-lightBg mb-2">The Dreadful 3</h2>
        <p className="text-lightBg mb-6">Almost There!! You're doing great!</p>
        
        <Select
            name="dietary_habits"
            value={formData.dietary_habits}
            label="How would you describe your eating habits?"
            onChange={handleChange}
            options={[
                { value: 0, label: 'Unhealthy' },
                { value: 1, label: 'Moderate' },
                { value: 2, label: 'Healthy' }
            ]}
        />
        <div className="space-y-6">
            <div>
                <p className="mb-3">Does your family or you have a history of mental illness?</p>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => handleChange('mi_history', '1')}
                        className={`px-6 py-2 rounded-full ${
                            formData.mi_history === '1'
                                ? 'bg-deepPurple text-white'
                                : 'bg-primary text-gray-700'
                        }`}
                    >
                        Yes
                        </button>
                    <button
                        type="button"
                        onClick={() => handleChange('mi_history', '0')}
                        className={`px-6 py-2 rounded-full ${
                            formData.mi_history === '0'
                                ? 'bg-deepPurple text-white'
                                : 'bg-primary text-gray-700'
                        }`}
                    >
                        No
                    </button>
                </div>
            </div>
            <div>
                <p className="mb-3">Do you get thoughts of harming/unaliving yourself?</p>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => handleChange('suicidal_thoughts', '1')}
                        className={`px-6 py-2 rounded-full ${
                            formData.suicidal_thoughts === '1'
                                ? 'bg-deepPurple text-white'
                                : 'bg-primary text-gray-700'
                        }`}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChange('suicidal_thoughts', '0')}
                        className={`px-6 py-2 rounded-full ${
                            formData.suicidal_thoughts === '0'
                                ? 'bg-deepPurple text-white'
                                : 'bg-primary text-gray-700'
                        }`}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    </>
);

export default FormStageFour;