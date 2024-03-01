import React from "react"

function Card({Name, Description, Image, Link}){
    return (
       <>
        <div className="bg-blue-700 my-3 mx-5 max-w-36 min-h-64 rounded-md inline-grid">
            <h1 className="text-white mt-3" >{Name}</h1>
            <img src = {Image} className= "object-cover max-w-32 max-h-56 my-1 mx-2 rounded-2xl"></img>
            <p1 className="mb-3 mx-2 text-white text-balance">{Description}</p1>
            <button className="bg-cyan-700 rounded-md object-contain text-white" ><a href={Link}>Visit</a></button>
        </div>
       </> 
    )
}

export default Card