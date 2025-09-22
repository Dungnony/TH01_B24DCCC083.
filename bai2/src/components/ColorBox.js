import React from "react";

function ColorBox(props) {
  const styles = {
    width: 260,
    height: 260,
    border: "2px solid #333",
    borderRadius: 12,
    backgroundColor: props.color,
    transition: "background-color 200ms ease",
  };

  return <div style={styles} aria-label={`color-box-${props.color}`} />;
}

export default ColorBox;
