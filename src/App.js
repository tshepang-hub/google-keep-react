import React, { useState, useEffect } from "react";
import cuid from "cuid";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./components/Tooltip/Tooltip.css";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [selectedNote, setSelectedNote] = useState(null); //tracking the note being edited
  const [isModalOpen, setIsModalOpen] = useState(false); //modal visibility

  const addNote = (title, text) => {
    const newNote = {
      id: cuid(),
      title,
      text,
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  const editNote = (id, updatedTitle, updatedText) => {
    const updatedNotes = notes.map(note =>
      note.id === id
        ? { ...note, title: updatedTitle, text: updatedText }
        : note
    );
    setNotes(updatedNotes);
    setIsModalOpen(false);
  };

  const deleteNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const openModal = note => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  //sync notes with local storage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Navbar toggleSidebar={() => {}} />
      <main>
        <Sidebar />
        <Form addNote={addNote} />
        <Notes notes={notes} onNoteClick={openModal} onDelete={deleteNote} />
        {isModalOpen && (
          <Modal
            note={selectedNote}
            onClose={closeModal}
            onSave={editNote}
            isModalOpen={isModalOpen}
            onDelete={deleteNote}
          />
        )}
      </main>
    </div>
  );
}

export default App;