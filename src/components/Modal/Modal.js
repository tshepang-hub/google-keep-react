import React, { useState, useEffect } from "react";
import "./Modal.css";
import Tooltip from "../Tooltip/Tooltip";

const Modal = ({ note, onClose, onSave, isModalOpen, onDelete }) => {
  const [title, setTitle] = useState(note.title || "");
  const [text, setText] = useState(note.text || "");

  useEffect(() => {
    setTitle(note.title);
    setText(note.text);
  }, [note]);

  const handleSave = () => {
    onSave(note.id, title, text);
  };

  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
      <div className="form-container">
        <form className="form" id="modal-form">
          <input
            id="modal-title"
            type="text"
            className="note-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            id="modal-text"
            className="note-text"
            type="text"
            placeholder="Take a note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="form-actions">
            <Tooltip icon="add_alert" text="Remind me" />
            <Tooltip icon="person_add" text="Collaborator" />
            <Tooltip icon="palette" text="Change Color" />
            <Tooltip icon="image" text="Add Image" />
            <Tooltip
              icon="archive"
              text="Archive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
                onClose();
              }}
            />
            <Tooltip icon="more_vert" text="More" />
            <button
              type="button"
              onClick={() => {
                handleSave();
                onClose();
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
