import React, { useState } from 'react'

export default function Button(props) {
    console.log('hello this is the button function running')
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + props.step)
    }
    return (
        <button className = {`btn btn-${props.color} w-100`}
            onClick={handleClick}>+{props.step} - {count}</button>
    )
}
