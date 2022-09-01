import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
// import Racers from './components/Racers';
import RacersClass from './components/RacersClass'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import AlertMessage from './components/AlertMessage';
import { useState } from 'react'


function App(props) {
    const [message, setMessage] = useState(null)
    const [category, setCategory] = useState(null)

    const flashMessage = (message, category) => {
        setMessage(message)
        setCategory(category)
    }

    return (
        <>
            <Navbar name = 'Brian' city = 'Chicago' />
            <div className = 'container'>
                {message ? <AlertMessage message={message} category={category} 
                    flashMessage={flashMessage} /> : null}
                <Routes>
                    <Route path='/' element={<ButtonCounter />} />
                    <Route path='/standings' element={<RacersClass />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage}/>} />
                </Routes>
            </div> 
        </> 
    );
}

export default App;
// you have to export in order to import to another file