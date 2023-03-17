import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:"",description:""});
      
    const handleClick= (e)=>{
      e.preventDefault();
      addNote(note)
    }

    const onChange = (e)=>{
        setNote({...note,[e.target.name]:[e.target.value]})
    }
  return (
    <div className='container'>
         <form className='container'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" onChange={onChange} name='title' aria-describedby="emailHelp"/>
           
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" onChange={onChange} name='description'/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Add</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default AddNote;