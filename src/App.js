import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
// import Racers from './components/Racers';
import RacersClass from './components/RacersClass'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';


function App(props) {

    return (
        <>
            <Navbar name = 'Brian' city = 'Chicago' />
            <div className = 'container'>
                <Routes>
                    <Route path='/' element={<ButtonCounter />} />
                    <Route path='/standings' element={<RacersClass />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div> 
        </> 
    );
}

export default App;
// you have to export in order to import to another file