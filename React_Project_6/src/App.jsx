import { useEffect, useState } from 'react'

function App() {
  const [poki, setPoki] = useState('');
  const [imgPoki, setImgPoki] = useState('');
  const [style, setStyle] = useState('w-48 hidden');


  const pokifinder = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poki}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${poki} not found!!!`);
        }
        return response.json();
      })
      .then(data => {
        setImgPoki(data.sprites.front_default)
      })
      .catch(e => {
        console.log(e)
        setImgPoki("");
      })

    setStyle("w-48");

  }
    
    // document.addEventListener("keydown", (event) => {
    //   if (event.key.startsWith("Enter")){
    //     pokifinder();                
    //   }
    // })

  return (
    <>
      <div className='bg-slate-700 w-full h-screen'>
        <div className='flex justify-center items-center h-[100%] '>
          <div className='bg-gray-500 rounded-lg p-3 w-[80vh] h-[50vh] shadow-gray-900 shadow-lg'>

            <h2 className='font-bold text-3xl text-center text-indigo-950'>PokiDex</h2>

            <div className='mt-10 flex justify-center items-center'>

              <input type="text" onChange={(e) => {
                const inpvalue = e.target.value
                setPoki(inpvalue.toLowerCase())
              }}
                className="form_textfield rounded-md bg-gray-800 border border-gray-900 text-gray-300 text-lg px-2 outline-none p-1 w-[70%] hover:bg-gray-900 mr-4"
              />

              <button type="button" onClick={pokifinder} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-md text-sm px-5 py-2 border border-gray-950">Search</button>
            </div>

            <div className='flex justify-center items-center h-[50%] text-center mt-5'>
              <img src={imgPoki} alt="Not Found !!!" className={style} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
