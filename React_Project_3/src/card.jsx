import propTypes from "prop-types"
import React from 'react'

// function Card({image="https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&w=600",name="Unknown",professor="Unknown"})
//Also use Above Syntax
function Card(props) {
  return (
    <>
        <div className="flex flex-col items-center justify-center mx-4">
          <div className="mt-5 mb-2 transition duration-150 linear bg-sky-950 border-[1px] border-blue-900 hover:border-blue-700 rounded-lg max-w-80 overflow-hidden md:min-w-[70vh]">
            <div className="md:flex ">
              <div><img className=" h-[202.538px] w-[318.4px] md:h-48 md:w-[301.812px] md:object-cover object-cover" src={props.image} alt=""/></div>
              <div className="px-3 pb-3 md:flex md:items-center md:justify-center">
                <div>
                  <h2 className="text-gray-100 font-medium text-xl flex flex-wrap">{props.name}</h2>
                  <p className="text-gray-500 text-lg">By Prof. {props.professor}</p>
                  <button className="transition duration-300 linear max-w-auto text-center px-4 py-2 mt-4 bg-emerald-800 text-gray-100 rounded-sm hover:bg-emerald-700 hover:scale-105">Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
//use to check prostypes for debugging purposes
Card.propTypes = {
  name : propTypes.string,
  professor : propTypes.string,
  image : propTypes.string,

}

//Use for default props
Card.defaultProps = {
  name : "Unknown",
  professor : "Unknown",
  image : "https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&w=600",
}
export default Card
