import React from "react";

function ColorButton(props) {
  return (
    <button
      onClick={() => props.onPick(props.value)}
      style={{
        padding: "8px 14px",
        marginRight: 8,
        border: "1px solid #777",
        borderRadius: 8,
        cursor: "pointer",
        background: "#fff",
      }}
    >
      {props.label}
    </button>
  );
}

export default ColorButton;
