import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onHandleCLick: () => void;
}

export default function Button({ children, onHandleCLick }: ButtonProps) {
  return (
    <button onClick={onHandleCLick} className="button">
      {children}
    </button>
  );
}
