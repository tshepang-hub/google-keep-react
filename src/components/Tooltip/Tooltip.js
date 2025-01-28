import React from "react";
import "./Tooltip.css";

const Tooltip = ({ icon, text, onClick }) => {
  return (
    <div className="tooltip" onClick={onClick}>
      <span className="material-icons">{icon}</span>
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;