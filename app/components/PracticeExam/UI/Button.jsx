"use client";

import React, { useState } from "react";

const Button = ({ children, onClick, colour, isSelected }) => {
  const colourCheck = (colour, selected) => {
    if (colour === "red") {
      return selected
        ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-neutral-800"
        : "bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-amber-700 hover:to-amber-950 hover:text-white text-white";
    } else if (colour === "gray") {
      return selected
        ? "bg-gradient-to-r from-blue-700 to-blue-950 text-white"
        : "bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-blue-700 hover:to-blue-950 hover:text-white text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full mt-4 text-xl font-bold py-3 px-6 rounded-lg ${colourCheck(
        colour,
        isSelected
      )}`}>
      {children}
    </button>
  );
};
export default Button;
