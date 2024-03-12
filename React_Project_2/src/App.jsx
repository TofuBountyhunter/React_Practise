import { useState } from "react"

function App() {
  const [color , setColor] = useState("rgb(17, 24, 39)")
  
  return (
    <>
      <div className="w-full h-screen bg-gray-900  flex justify-center" style={{backgroundColor: color}}>
        <div className="w-[80%] mt-5">
          <div className="bg-slate-800 rounded-md w-full h-14 flex justify-around items-center">
            <button onClick={() =>{setColor("rgb(17, 24, 39)")}}><div className="rounded-lg w-16 h-10 bg-gray-900 text-white flex justify-center items-center">Original</div></button>
            <button onClick={() =>{setColor("black")}}><div className="rounded-lg w-16 h-10 bg-black text-white flex justify-center items-center">Black</div></button>
            <button onClick={() =>{setColor("rgb(30, 27, 75)")}}><div className="rounded-lg w-16 h-10 bg-indigo-950 text-white flex justify-center items-center">Indigo</div></button>
            <button onClick={() =>{setColor("rgb(194, 65, 12)")}}><div className="rounded-lg w-16 h-10 bg-orange-700 text-white flex justify-center items-center">Orange</div></button>
            <button onClick={() =>{setColor("rgb(6, 95, 70)")}}><div className="rounded-lg w-16 h-10 bg-emerald-800 text-white flex justify-center items-center">Green</div></button>
            <button onClick={() =>{setColor("rgb(112, 26, 117)")}}><div className="rounded-lg w-16 h-10 bg-fuchsia-900 text-white flex justify-center items-center">Purple</div></button>
            <button onClick={() =>{setColor("white")}}><div className="rounded-lg w-16 h-10 bg-white text-black flex justify-center items-center">White</div></button>
            <button onClick={() =>{setColor("rgb(30, 58, 138)")}}><div className="rounded-lg w-16 h-10 bg-blue-900 text-white flex justify-center items-center">Blue</div></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
