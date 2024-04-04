import { useState } from 'react'

function App() {
  const [width,setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight);

  window.addEventListener("resize",()=>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  return (
    <>
    <div className='w-full min-h-screen bg-cyan-950 flex flex-col gap-10 justify-center items-center'>
      <div className='bg-neutral-800 rounded-lg p-10 px-20 text-indigo-200 text-4xl font-bold'>{width}</div>
      <div className='bg-neutral-800 rounded-lg p-10 px-20 text-indigo-200 text-4xl font-bold'>{height}</div>
    </div>
    </>    
  )
}

export default App
