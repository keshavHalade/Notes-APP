import './App.css';
import React, { useState } from "react";
import NoteContainer from './component/NoteContainer';
import NoteHeader from './component/NoteHeader';
import HeaderSection from './component/HeaderSection';
// import { nanoid } from 'nanoid';

function App() {
 const [noteList, setList] = useState([
   
// {
//     id : nanoid(), 
//     text : "Certainly! I've made a few adjustments to your Note component, addressing the use of the key attribute, resolving issues with undefined variables, and providing more clarity in the code:",
//     date: '10/11/2023'
//  },
//  {
//   id : nanoid(), 
//   text : "The Note component renders a note with an option to edit its content. It toggles between displaying the note s text and presenting an editing interface. When in edit mode, users can modify the content using the NoteEdit component offering a seamless experience for managing notes",
//   date: '10/11/2023'
// }
]);

const addListItem = (noteItem) => {
   let note = [...noteList,noteItem];
   setList(note);
}

const deleteListItem = (id) => {
   const updatedNotes = noteList.filter((note) => note.id !== id);
   setList(updatedNotes);
   console.log(updatedNotes);
}

 return (
    <div className="App">
        <NoteHeader/>
        <HeaderSection noteItem = {addListItem}/>
        <NoteContainer noteList={noteList} onDelete={deleteListItem}/>
    </div>
 );
}

export default App;