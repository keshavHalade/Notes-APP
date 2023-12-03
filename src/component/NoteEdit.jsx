// NoteEdit.jsx

import React, { useState } from "react";

function NoteEdit({ onSave, onCancel }) {
  const [editContent, setEditContent] = useState("");

  const handleInputChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleSave = () => {
    onSave(editContent);
  };

  const onCancelBtn = () => {
    onCancel(false)
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <textarea value={editContent} onChange={handleInputChange} />
      <div className="button-group">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancelBtn}>Cancel</button>
      </div>
    </div>
  );
}

export default NoteEdit;
