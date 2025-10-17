import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`bg-blue-300 font-bold py-2 px-4 rounded-md cursor-pointer hover:scale-110 hover:bg-green-500 transform transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
