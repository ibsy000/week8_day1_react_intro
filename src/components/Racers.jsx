import React from 'react'

export default function Racers(props) {
    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']
    return (
        <div className='row py-3'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit = {props.handleRacerSubmit}>
                <input type='text' className = 'form-control' name = 'season' />
                <input type = 'submit' value = 'Submit' />
            </form>
            
            <table className='table table-primary table-striped mt-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.racers.map((racer, idx) => {
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
