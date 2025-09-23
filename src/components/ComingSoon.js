import React from "react";
import "../styles/ComingSoon.css";
import Icon from "./Icons";

const ComingSoon = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <Icon name="X" />
        </button>

        <div className="modal-icon">🚀</div>

        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>

        <div className="modal-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">In Development...</span>
        </div>

        <button className="modal-button" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
