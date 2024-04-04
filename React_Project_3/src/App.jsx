import React from 'react'
import Card from './card'

function App() {
  return (
    <>
      <div className='bg-slate-800 min-h-screen'>
        <Card name="Python One Short" professor="Tofu" image="https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Card name="JAVA For Beginners" professor="Thomas" image="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Card name="React Full Course" professor="Tofu" image="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Card name="Basics of C#" professor="Rin" image="https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Card/>
      </div>
    </>
  )
}

export default App
