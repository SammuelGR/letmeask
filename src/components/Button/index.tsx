import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<ButtonType> & {
  onClick: () => void;
};

const Button: React.FC<ButtonType> = ({ onClick }: ButtonType) => {
  return (
    <div>
      <button onClick={onClick}>hellou</button>
    </div>
  );
};

export default Button;
