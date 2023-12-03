import Note from "./Note";

const NoteContainer = ({ noteList,onDelete}) => {
  return (
    <div className="note-container">
      {noteList.map((note) => (
        <Note key={note.id} id = {note.id} content={note.text} date={note.date} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default NoteContainer;
