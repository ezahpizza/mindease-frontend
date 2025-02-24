import React from 'react';
import { CustomSlider } from './FormComponents';

const FormStageThree = ({ formData, handleChange }) => (
    <>
        <h2 className="text-2xl font-bold text-lightBg mb-2">SLIDERS!!</h2>
        <p className="text-lightBg mb-6">Can't be boring right?</p>
        
        <CustomSlider
            name="academic_pressure"
            value={formData.academic_pressure}
            label="Rate how much of a burden studies are on you"
            onChange={handleChange}
        />
        <CustomSlider
            name="study_satisfaction"
            value={formData.study_satisfaction}
            label="to what extent does studying make you happy?"
            onChange={handleChange}
        />
        <CustomSlider
            name="work_pressure"
            value={formData.work_pressure}
            label="how much do you dislike your job?"
            onChange={handleChange}
        />
        <CustomSlider
            name="job_satisfaction"
            value={formData.job_satisfaction}
            label="how much is your job worthwile to you?"
            onChange={handleChange}
        />
    </>
);

export default FormStageThree;
