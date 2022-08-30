import React, { useState, useEffect } from 'react'

export default function Racers(props) {
    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']

    const [racers, setRacers] = useState([])
    const [season, setSeason] = useState(2022)
    const [round, setRound] = useState(1)

     // Create an effect -> function to execure after every render
    useEffect(() => {
        console.log('useEffect effect callback executed')
        fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                setRacers(racerStandings)
            })
    }, [season, round]) // [season, round] - dependency will only do this effect if state has changed
            // if the dependency is [] empty array your effect doesn't depend on 
            // any values from props or state, so it never needs to re-run

    function handleRacerSubmit(event){
        event.preventDefault()
        let newSeason = event.target.season.value
        let newRound = event.target.round.value
        setSeason(newSeason)
        setRound(newRound)
    }

    return (
        <div className='row py-3'>

            <h4 className="text-center">Driver Standings</h4>

            <form onSubmit = {handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <input type="text" className="form-control" name="season" 
                            placeholder='Enter Season' />
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="text" className="form-control" name="round" 
                            placeholder='Enter Round' />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <input type="submit" value="Submit" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            
            <table className='table table-primary table-striped mt-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {racers.map((racer, idx) => {
                        return( <tr key={idx}>
                            <th>{racer.position}</th>
                            <td>{racer.Driver.givenName}</td>
                            <td>{racer.Driver.familyName}</td>
                            <td>{racer.points}</td>
                            <td>{racer.wins}</td>
                            <td>{racer.Driver.nationality}</td>
                            <td>{racer.Constructors[0].name}</td>
                        </tr>)
                    })}
                </tbody>
            </table>

        </div>
    )
}
