import Button from "./components/Button";
import Navbar from "./components/Navbar";


function App(props) {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000}
    ]
    return (
        <>
        <Navbar name = 'Brian' city = 'Chicago' />
        <div className = 'container'>
            <h1 className = 'text-center'>Hello World!</h1>
            {buttons.map((b,i) => <Button color = {b.color} step = {b.step} key = {i} />)}
        </div> 
        </> 
    );
}

export default App;
// you have to export in order to import to another file