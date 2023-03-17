import React from 'react'
import Note from './Note';
import AddNote from './AddNote'



export const Home = () => {


  return (
    <>

      <div className='conatiner'>
        <AddNote />
      </div>
      <div className='conatiner'>


        <Note />
      </div>
    </>
  )
}



export default Home;
