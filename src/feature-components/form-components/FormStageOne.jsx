import React from 'react';
import { Select, NumberInput } from './FormComponents';

const FormStageOne = ({ formData, handleChange }) => (
    <>
        <h2 className="text-2xl font-bold text-lightBg mb-2">Let's get the basics out of the way</h2>
        <p className="text-lightBg mb-6">A teeny-tiny background check on you.</p>
        
        <Select
            name="gender"
            value={formData.gender}
            label="You identify as?"
            onChange={handleChange}
            options={[
                { value: 0, label: 'Male' },
                { value: 1, label: 'Female' }
            ]}
        />
        <NumberInput
            name="age"
            value={formData.age}
            label="and how old are you?"
            onChange={handleChange}
        />
        <Select
            name="profession"
            value={formData.profession}
            label="you must be a superhero, but what do you for a living?"
            onChange={handleChange}
            options={[
                { value: 0, label: 'Student' },
                { value: 1, label: 'Employed' }
            ]}
        />
        <Select
            name="city"
            value={formData.city}
            label="how's the locality around the place you're from?"
            onChange={handleChange}
            options={[
                { value: 0, label: 'Rural' },
                { value: 1, label: 'Urban' }
            ]}
        />
    </>
);

export default FormStageOne;