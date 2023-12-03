import React, { useState } from "react";
import AddNote from "./AddNote";

const HeaderSection = ({noteItem}) => {
  // const [notes, setNotes] = useState([]);
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleAddNote = () => {
    setIsAddingNote(true);
  };

  const handleCancelAddNote = () => {
    setIsAddingNote(false);
  };

  const handleSaveNote = (newNote) => {
    // setNotes(() => {
    //   noteItem(newNote);
    // });
    noteItem(newNote);
    setIsAddingNote(false);
  };


  return (
    <div className="header-section">
      <div className="description">
        <p>Add and manage your notes easily. Keep your thoughts organized.</p>
      </div>
      <div className="add-note-button">
        {isAddingNote ? (
          <AddNote onCancel={handleCancelAddNote} onSave={handleSaveNote} />
        ) : (
          <button onClick={handleAddNote}>Add New Note</button>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
