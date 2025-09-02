import { useState } from 'react'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center  items-center'>
        <div className='my-4'>Pomodoro</div>
        <Timer></Timer>
      </div>
    </>
  )
}

export default App
