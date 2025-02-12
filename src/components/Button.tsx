import React from "react";
import "../styles/Button.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <button
      className={`custom-button custom-button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
