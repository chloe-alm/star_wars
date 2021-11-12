import React from "react";

export const InputGroup = (props) => {
  const { handleChange, isValid, label, type, required, minLength, maxLength } =
    props;

  return (
    <div>
      <label>{label}</label>
      <input
        style={{
          border: "1px solid fade(white, 40%)",
          backgroundColor: "fade(white, 20%)",
          width: "250px",
          borderRadius: "3px",
          padding: "10px 15px",
          margin: "0 auto 10px auto",
          display: "block",
          textAlign: "center",
          fontSize: "18px",
          color: "black",
          transitionDuration: "0.25s",
          fontWeight: "300",
        }}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};
