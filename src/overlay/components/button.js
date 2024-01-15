import React, { useState } from 'react';

export const Button = ({ param, handleButtonClick, selectedButton }) => {
  const isSelected = selectedButton === param;

  const handleClick = () => {
    handleButtonClick(param);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isSelected ? "white" : "transparent",
        color: isSelected ? "black" : "white",
        border: "0.1rem solid white",
        height: "3.5rem",
        width: "14rem",
        transition: "background-color 0.3s, color 0.3s", // Smooth transition
      }}
    >
      {param}
    </button>
  );
};




