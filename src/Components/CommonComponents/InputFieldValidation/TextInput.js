import React from 'react';

const TextInput = ({ value, onChange, required }) => {
    // Function to handle input change and allow only text values
    const handleChange = (event) => {
        const inputValue = event.target.value;
        // Only allow alphabetic input
        if (/^[a-zA-Z_ ]*$/.test(inputValue)) {
            onChange(inputValue);
        }
    };

    return (
        <input
            type="text"
            value={value}
            required={required}
            onChange={handleChange}
        />
    );
};

export default TextInput;
