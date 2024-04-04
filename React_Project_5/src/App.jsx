//useEffect
// useEffect is designed for managing side effects, such as data fetching, subscriptions,
// or manual DOM manipulations.
//
//useCallbacks
// useCallback is designed to memoize functions, preventing unnecessary re-renders of 
// components that receive those functions as props
//
// useRef
// useRef hooks preserve value across various re-renders and do not cause re-renders 
// whenever a value is changed they make the application faster and helps in caching and storing previous values

import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLenght] = useState(6);
  const [password,setPassword] = useState("");
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [generate,setGenerate] = useState('');

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let passChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let passNum = "0123456789"
    let passSpec = "!@?#$%&*~"
    if(number) passChar+=passNum ;
    if(character) passChar+=passSpec;

    for(let i=1 ; i<=length ;i++){
      let random = Math.floor(Math.random() * passChar.length);
      pass+=passChar.charAt(random);
    }
    setPassword(pass)

  },[length,number,character,generate]);

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,generate]) 

  const passwordRef = useRef(null);

  const copyPassword = ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className='bg-slate-800 w-full h-screen '>
        <div className='flex justify-center items-center h-[100%]'>
          <div className='rounded-md p-8 bg-emerald-700 w-fit h-auto' >
            <div className='text-slate-800 font-bold text-3xl text-center mb-5'
            >Password Generator</div>

            <div className='flex justify-center items-center'>
              <input type="text" value={password} readOnly className='text-gray-900 font-bold text-xl rounded-md p-2 m-3 w-96' ref={passwordRef}  />
              <button className='transition duration-150 text-white font-medium bg-[#005cc8] rounded-md p-[10px] hover:bg-blue-800' onClick={copyPassword}>COPY</button>
            </div>

            <div className='flex justify-between items-center mt-5 w-[60vh]'>
              <input className='cursor-pointer' value={length} min={6} max={100} type="range" onChange={(e) => { setLenght(e.target.value) }} />
              <p className='text-white font-medium w-24'>Length : {length}</p>

              <div className='flex justify-center items-center'>
                <input type="checkbox" id="number" onChange={()=>{setNumber((prev)=> !prev)}} />
                <label htmlFor="number" className='cursor-pointer  text-white font-medium ml-2'>Number</label>
              </div>

              <div className='flex justify-center items-center'>
                <input type="checkbox" id="character" onChange={()=>{setCharacter((prev)=> !prev)}} />
                <label htmlFor="character" className='cursor-pointer  text-white font-medium ml-2'>Characters</label>
              </div>
            </div>
            <button onClick={()=>{setGenerate(passwordGenerator)}} className='transition duration-150 text-white font-medium bg-[#005cc8] rounded-md p-[10px] hover:bg-blue-800'>Generates</button>       
          </div>
        </div>
      </div>
    </>
  )
}

export default App
