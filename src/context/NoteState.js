import noteContext from "./NoteContext";
import { React, useState } from "react";




const NoteState=(props)=> {

  let notesInitial = [
  { id:"1",
    title: "hello Rishi",
    description:"i like icecream"
  },
  { id:"2",
    title: "hello Rishi",
    description:"i like icecream"
  },
  { id:"3",
    title: "hello Rishi",
    description:"i like icecream"
  },
  { id:"4",
    title: "hello Rishi",
    description:"i like icecream"
  },
  { id:"5",
    title: "hello Rishi",
    description:"i like icecream"
  },
  { id:"6",
    title: "hello Rishi",
    description:"i like icecream"
  }]

  const [notes,setNotes] = useState(notesInitial);

  const addNote = (title,description)=>{

   let  note= {
      id:"10",
      title:"hello",
      description:"Item Added"
    }
    setNotes(notes.concat(note))
  }
   
  return (
    
      <noteContext.Provider value={{notes,addNote}}>
          {props.children}
      </noteContext.Provider>
  
  )
}



export default NoteState;
