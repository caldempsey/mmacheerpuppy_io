import React from "react";
import "./styles.css";

export default function Flexbox(props) {
  // eslint-disable-next-line react/prop-types
  const { children, className, style, id } = props;
  return (
    <div
      className={`flexbox ${className === undefined ? "" : className}`}
      id={id}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}
