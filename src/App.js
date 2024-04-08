import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const handleClick = () => {
    toast.success("hello")

  }
  return (
    <>
      <ToastContainer/>
      <div>App</div>
      <button onClick={handleClick} className='btn btn-warning btn-lg'>cl</button>
      </>

  )
}

export default App