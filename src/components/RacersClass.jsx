// rcc imports react and component and create class
import React, { Component } from 'react'

export default class RacersClass extends Component { // Component is a base class and we are overriding the render() method
    constructor(props){ // instantiate class
        super(props) // constructor always calls super(props)
        this.state = { // this.state works in the same way as useState
            racers: [],
            season: 2022,
            round: 1
        }
    }

    componentDidMount(){ // equivalent to useEffect() method
        fetch(`http://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                this.setState({racers:racerStandings})
                }
            )
    }
    // the useEffect() method is the same as componentDidMount and comonentDidUpdate put together
    componentDidUpdate(prevProps, prevState){ // equivalent to useEffect() method
        if (prevState.round !== this.state.round || prevState.season !== this.state.season){
            fetch(`http://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                this.setState({racers:racerStandings})
                }
            )
        }
    }

    handleRacerSubmit = (event) => { // arrow functions are able to be used as methods on our Class
        // Prevent default of refreshing page
        event.preventDefault()
        let newSeason = event.target.season.value
        let newRound = event.target.round.value
        this.setState({
            season: newSeason,
            round: newRound
        })
    }
    
    render() { // render is a method that returns...code to run
        let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']
        return (
            <div className='row py-3'>

            <h4 className="text-center">Driver Standings</h4>

            <form onSubmit = {this.handleRacerSubmit}>
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
                        <input type="submit" value="Submit" className="btn w-100 text-light" 
                            style={{backgroundColor: '#5b8e7d'}}/>
                    </div>
                </div>
            </form>
            {/* { this.state.racers.length ? (insert table here) : (null) } */}
            <table className='table table-secondary table-striped mt-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.state.racers.map((racer, idx) => {
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
}
