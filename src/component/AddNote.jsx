import React, { useState } from "react";
import "./AddNote.css";
import { nanoid } from 'nanoid'; 

const AddNote = ({ onCancel, onSave }) => {
  const [newNoteContent, setNewNoteContent] = useState("");

  const handleInputChange = (e) => {
    setNewNoteContent(e.target.value);
  };

  const handleSave = () => {
    const currentDate = new Date().toLocaleDateString();
    const newNote = {
      id : nanoid(),
      text: newNoteContent,
      date: currentDate,
    };
    onSave(newNote);
    setNewNoteContent("");
  };

  return (
    <div className="add-note">
      <h2>Add New Note</h2>
      <textarea
        placeholder="Enter your new note here..."
        value={newNoteContent}
        onChange={handleInputChange}
        cols={30}
        rows={8}
      />
      <div className="button-group">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AddNote;
