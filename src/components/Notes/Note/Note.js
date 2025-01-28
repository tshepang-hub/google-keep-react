import React from "react";
import "./Note.css";
import Tooltip from "../../Tooltip/Tooltip";

const Note = ({ note, onClick, onDelete }) => {
  return (
    <div className="note" onClick={onClick}>
      <div>
        <span className="material-icons check-circle">check_circle</span>
        <div className="title">{note.title}</div>
      </div>

      <div>
        <div className="text">{note.text}</div>
      </div>

      <div>
        <div className="note-footer">
          <Tooltip icon="add_alert" text="Remind me" />
          <Tooltip icon="person_add" text="Collaborator" />
          <Tooltip icon="palette" text="Change Color" />
          <Tooltip icon="image" text="Add Image" />
          <Tooltip
            icon="archive"
            text="Archive"
            onClick={e => {
              e.stopPropagation();
              onDelete();
            }}
          />
          <Tooltip icon="more_vert" text="More" />
        </div>
      </div>
    </div>
  );
};

export default Note;