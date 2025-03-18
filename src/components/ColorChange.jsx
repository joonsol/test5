import React, { useState, useRef } from 'react'
import './ColorChange.scss'


const ColorChange = () => {

    const getRandomColor =()=>{
        const randomColor='#'+Math.random().toString(16).slice(2,8).padEnd(6,'0')

        return randomColor
    }
    const [bgColor,setBgColor]=useState(getRandomColor())
    const [isPlaying, setIsPlaying]=useState(false)
    const intervalRef = useRef(null)


    console.log(bgColor);
    


    return (
        <div className='bg-container' style={{backgroundColor:bgColor}}>
            <h1 className='color-code'>color code</h1>
            <div className="button-group">
                <button className="control-button">play</button>
                <button className="control-button">stop</button>
            </div>
        </div>
    )
}

export default ColorChange