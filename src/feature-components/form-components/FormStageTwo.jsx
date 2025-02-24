import React from 'react';
import { Select, NumberInput } from './FormComponents';

const FormStageTwo = ({ formData, handleChange }) => (
    <>
        <h2 className="text-2xl font-bold text-lightBg mb-2">Getting a bit serious now...</h2>
        <p className="text-lightBg mb-6">Bear with us for a bit, we won't pry much</p>
        
        <NumberInput
            name="cgpa"
            value={formData.cgpa}
            label="What are/were your grades like?"
            placeholder="Enter your CGPA"
            onChange={handleChange}
        />
        <Select
            name="degree"
            value={formData.degree}
            label="and what kind of degree are you pursuing?"
            onChange={handleChange}
            options={[
                { value: 0, label: 'Bachelors' },
                { value: 1, label: 'Masters' },
                { value: 2, label: 'PhD' }
            ]}
        />
        <NumberInput
            name="work_study_hours"
            value={formData.work_study_hours}
            label="how many hours do you spend studying/working a day?"
            placeholder="Enter work/study hours"
            onChange={handleChange}
        />
        <Select
            name="sleep_duration"
            value={formData.sleep_duration}
            label="do you even sleep well?"
            onChange={handleChange}
            options={[
                { value: 0, label: '< 6 hours' },
                { value: 1, label: '6-8 hours' },
                { value: 2, label: '> 8 hours' }
            ]}
        />
    </>
);

export default FormStageTwo;