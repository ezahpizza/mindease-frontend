import React from 'react';
import { Slider } from '@mui/material';

export const Select = ({ name, value, options, label, onChange }) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-black">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        >
            <option value="" hidden></option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export const NumberInput = ({ name, value, label, placeholder, onChange }) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-black">{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => {
                const value = e.target.value;
                if (name === 'cgpa' && /^\d*\.?\d*$/.test(value)) {
                    onChange(name, value);
                } else if (/^\d*$/.test(value)) {
                    onChange(name, value);
                }
            }}
            placeholder={placeholder}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
    </div>
);

export const CustomSlider = ({ name, value, label, onChange }) => (
    <div className="space-y-4">
        <label className="block text-sm font-medium text-black">{label}</label>
        <Slider
            value={value}
            onChange={(_, newValue) => onChange(name, newValue)}
            min={0}
            max={10}
            step={0.1}
            sx={{
                color: '#FEFEFE',
                height: 8,
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#FEFEFE',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                }
            }}
        />
        <div className="text-right text-sm text-lightBg">
            {value.toFixed(1)}
        </div>
    </div>
);