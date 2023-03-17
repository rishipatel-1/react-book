
import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';


const Note = () => {
    const context = useContext(NoteContext);
    const {notes,addNote} = context;
    return (
       <>
      
        <div className='container my-4'>

        <h1> Your Notes</h1>  

        <div className='row my-3' >
        {notes.map((note) => {
          return <NoteItem key={note.id} note={note}/>


        })} 
        </div>
           
        </div>
       </>
    )
}

export default Note;