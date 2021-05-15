import React from "react";

function CustomDiv(props) {
  return <div className="customdiv" id={props.id}>{props.children}</div>;
}

export default CustomDiv;