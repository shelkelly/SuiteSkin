import React from "react";
import "./css/stylesheet.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Button() {
  return (
    <span className="btn">
      Enter
    </span>
  );
}

export default Button;