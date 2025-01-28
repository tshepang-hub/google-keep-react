import React, { useState } from "react";
import "./Form.css";
import Tooltip from "../Tooltip/Tooltip";

const Form = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [activeForm, setActiveForm] = useState(false);

  const titleChange = event => {
    setTitle(event.target.value);
  };

  const textChange = event => {
    setText(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();

    if (!title && !text) {
      setActiveForm(false);
      return;
    }

    addNote(title, text);
    setTitle("");
    setText("");
    setActiveForm(false);
  };

  return (
    <>
      {!activeForm && (
        <div
          className="form-container inactive-form"
          onClick={() => setActiveForm(true)}
        >
          <form>
            <input
              className="note-text"
              type="text"
              placeholder="Take a note..."
            />
            <div className="form-actions">
              <Tooltip icon="check_box" text="New List" />
              <Tooltip icon="brush" text="New Drawing" />
              <Tooltip icon="image" text="New Image" />
            </div>
          </form>
        </div>
      )}

      {activeForm && (
        <div className="form-container active-form">
          <form className="form" id="form" onSubmit={submitForm}>
            <input
              id="note-title"
              type="text"
              className="note-title"
              placeholder="Title"
              onChange={titleChange}
              value={title}
            />
            <input
              id="note-text"
              className="note-text"
              type="text"
              placeholder="Take a note..."
              onChange={textChange}
              value={text}
            />
            <div className="form-actions">
              <div className="icons">
                <Tooltip icon="add_alert" text="Remind me" />
                <Tooltip icon="person_add" text="Collaborator" />
                <Tooltip icon="palette" text="Change Color" />
                <Tooltip icon="image" text="Add Image" />
                <Tooltip icon="archive" text="Archive" />
                <Tooltip icon="more_vert" text="More" />
                <Tooltip icon="undo" text="Undo" />
                <Tooltip icon="redo" text="Redo" />
              </div>
              <button type="submit" className="close-btn">
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;