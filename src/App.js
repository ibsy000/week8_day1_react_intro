import { useState, useEffect } from 'react'
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Racers from './components/Racers';


function App(props) {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000}
    ]

    const [count, setCount] = useState(0)
    const [racers, setRacers] = useState([])
    const [season, setSeason] = useState(2022)
    const [round, setRound] = useState(1)

    // Create an effect -> function to execure after every render
    useEffect(() => {
        // console.log('useEffect effect callback executed')
        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                setRacers(racerStandings)
            })
    }, [season, round]) // [season, round] - dependency will only do this effect if state has changed
            // if the dependency is [] empty array your effect doesn't depend on 
            // any values from props or state, so it never needs to re-run

    function handleClick(step){
        console.log('Clicked')
        setCount(count + step)
    }

    function handleRacerSubmit(event){
        event.preventDefault()
        let newSeason = event.target.season.value
        let newRound = event.target.round.value
        setSeason(newSeason)
        setRound(newRound)
    }

    return (
        <>
            <Navbar name = 'Brian' city = 'Chicago' />
            <div className = 'container'>
                <h1 className = 'text-center'>Hello World!</h1>
                <h3 className = 'text-center'>Total: {count}</h3>
                {buttons.map((b,i) => <Button color = {b.color} step = {b.step} 
                    key = {i} handleClick = {handleClick}/>)}
                <Racers handleRacerSubmit={handleRacerSubmit} racers={racers} />
            </div> 
        </> 
    );
}

export default App;
// you have to export in order to import to another file