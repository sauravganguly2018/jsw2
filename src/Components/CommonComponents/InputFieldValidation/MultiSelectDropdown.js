import React from 'react';

const MultiSelectDropdown = ({ options, selectedValues, onChange }) => {
  const handleChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    onChange(selectedOptions);
  };

  return (
    <select multiple value={selectedValues} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default MultiSelectDropdown;
