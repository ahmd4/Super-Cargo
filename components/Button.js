import React from "react";

const Button = ({
  border,
  bg,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  cursor,
  fontSize,
  fontWeight,
  cl,
  style
}) => {
  return (
    <button
      className={cl}
      onClick={onClick}
      style={{
        backgroundColor: bg,
        border,
        borderRadius: radius,
        height,
        width,
        color: color,
        cursor: cursor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        ...style
      }}
    >
      {children}
    </button>
  );
}

export default Button;