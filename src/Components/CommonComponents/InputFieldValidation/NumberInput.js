import React from 'react';

const NumberInput = ({ value, onChange }) => {
  // Function to handle input change and allow only numeric values
  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Only allow numeric input
    if (/^\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default NumberInput;
