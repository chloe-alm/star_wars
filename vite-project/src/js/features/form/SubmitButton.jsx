import React from "react";

export const SubmitButton = (props) => {
  const { name } = props;

  return (
    <button
      style={{
        marginTop: "30px",
        outline: "0",
        background: "black",
        border: "0",
        padding: "10px 15px",
        color: "white",
        borderRadius: "6px",
        width: "250px",
        cursor: "pointer",
        fontSize: "18px",
        transitionDuration: "0.25s",
      }}
    >
      {name}
    </button>
  );
};
