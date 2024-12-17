"use client";
const SubmitButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full mt-4 text-2xl text-white font-bold py-3 px-6 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-amber-500 hover:bg-amber-600"
      }`}>
      Submit
    </button>
  );
};

export default SubmitButton;
