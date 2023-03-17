import React from 'react'


function NoteItem(props) {
    const { note } = props;
    console.log(note);
    return (
        <div className='col-md-3'>
            <div className="card my-2" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>

                        <i className="fa-sharp fa-solid fa-trash m-2"></i>
                        <i className="fa-solid fa-pen-to-square m-2"></i>
                
                </div>
            </div>
        </div>
    )
}



export default NoteItem
