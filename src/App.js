import { useState } from 'react'
import Button from "./components/Button";
import Navbar from "./components/Navbar";


function App(props) {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000}
    ]

    const [count, setCount] = useState(0)
    const [names, setNames] = useState([])
    function handleClick(step){
        console.log('Clicked')
        setCount(count + step)
    }

    function handleNameClick(event){
        event.preventDefault()
        const name = event.target.firstName.value
        let newNames = [...names, name]
        setNames(newNames)
    }

    return (
        <>
            <Navbar name = 'Brian' city = 'Chicago' />
            <div className = 'container'>
                <h1 className = 'text-center'>Hello World!</h1>
                <h3 className = 'text-center'>Total: {count}</h3>
                {buttons.map((b,i) => <Button color = {b.color} step = {b.step} 
                    key = {i} handleClick = {handleClick}/>)}
                <form onSubmit = {handleNameClick}>
                    <input type='text' className = 'form-control' name = 'firstName' />
                    <input type = 'submit' value = 'Submit' />
                </form>
                {names.map((n, idx) => <p key = {idx}>{n}</p>)}
            </div> 
        </> 
    );
}

export default App;
// you have to export in order to import to another file