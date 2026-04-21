import React from 'react';
import { getContrastColor } from '../Utils/Color';

const SingleColorDropdown = ({ options, selectedValue, onValueChange, isDisabled }) => {
  const handleSelect = (option) => {
    onValueChange(option.name); // Update the selected value
  };

  return (
    <div className="dropdown">
      <button
  className="btn dropdown-toggle w-100"
  type="button"
  id="dropdownMenuButton"
  data-bs-toggle="dropdown"
  aria-expanded="false"
  disabled={isDisabled}
  style={{
    backgroundColor: selectedValue?.hex || '#ffffff',
    color: selectedValue ? getContrastColor(selectedValue.hex) : '#001659',
    border: '1px solid #ced4da',
    fontWeight: 'normal',
    fontSize: '14px',
    textAlign: 'left',
    textTransform: 'none', // Ensure no all-caps transformation
  }}
>
  {selectedValue?.name || 'Select a color'}
</button>


      <ul
        className="dropdown-menu w-100"
        aria-labelledby="dropdownMenuButton"
        style={{
          maxHeight: '220px', // Limit dropdown height to fit 5 items
          overflowY: 'auto',
        }}
      >
        {options.map((option, index) => (
          <li key={index}>
            <button
              className="dropdown-item"
              onClick={() => handleSelect(option)}
              style={{
                backgroundColor: option.hex,
                color: getContrastColor(option.hex),
                textAlign: 'left', // Align items to the left
                textTransform: 'none', // Ensure no text-transform is applied
              }}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleColorDropdown;
