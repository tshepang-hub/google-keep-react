import React from "react";
import Note from "./Note/Note";
import "./Notes.css";

const Notes = ({ notes, onNoteClick, onDelete }) => {
  return (
    <div className="notes">
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onClick={() => onNoteClick(note)} 
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
};

export default Notes;