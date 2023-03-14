import React, { useState } from 'react'
import reviews from './Data'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Review() {
    const [index,setIndex] = useState(0)
    const {name,job,image,text} = reviews[index]

    const prevPerson = () => {
        let number = index -1
        setIndex(number <0 ? reviews.length-1 : number)
    }
    const nextPerson = () => {
        let number = index +1
        setIndex(number >3 ? 0 : number)
    }
    const randomPerson = () => {
        let number = Math.floor(Math.random() * reviews.length)
        setIndex(number)
    }
  return (
    <article className='review'>
        <div className="img-container">
            <img src={image} alt={name} className='image-person' />
            <span className='quote'></span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
        <button className="prev" onClick={prevPerson}><FaAngleLeft/></button>
        <button className="next" onClick={nextPerson}><FaAngleRight/></button>
        </div>
        <button className="random" onClick={randomPerson}>suprise me</button>

    </article >
  )
}

export default Review