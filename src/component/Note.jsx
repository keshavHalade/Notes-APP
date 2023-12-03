import React, { useState } from "react";
import NoteEdit from "./NoteEdit";

function Note({id, content, date,onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  const [noteContent, setNoteContent] = useState(content);

  const openEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDelete(id);
  };


  const saveEdit = (newContent) => {
    setNoteContent(newContent);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <NoteEdit initialContent={noteContent} onSave={saveEdit} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <p>{noteContent}</p>
          <footer>
            <span>{date}</span>
            <div className="footer-button">
               <button onClick={openEdit}>Edit</button>
               <button onClick={handleDelete}>Delete</button>
            </div>    
          </footer>
        </>
      )}
    </div>
  );
}

export default Note;
