import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {

    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        let username = e.target.username.value
        let password = e.target.password.value

        let myHeaders = new Headers()
        myHeaders.append('Authorization', 'Basic ' + btoa(`${username}:${password}`))

        let response = await fetch('http://localhost:5000/api/token', {headers:myHeaders})
        if (response.ok){
            
            let data = await response.json()
    
            // Store the token and expiration in localStorage
            localStorage.setItem('token', data.token)
            localStorage.setItem('expiration', data.token_expiration)

            // Change the loggedIn state to true
            props.login()
    
            // Flash success massage and navigate back to home
            props.flashMessage('You have successfully logged in', 'success')
            navigate('/')
        } else {
            props.flashMessage('Your username and/or password are incorrect','danger')
        }
    }
  return (
    <>
        <h4 className="text-center">Login</h4>

        <form onSubmit={handleSubmit}>
            <div className='form-group'>

                <label htmlFor="username">Username</label>
                <input type="text" className='form-control' placeholder='Enter Username'
                    name='username' />

                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' placeholder='Enter Password'
                    name='password' />

                {/* <button/> or <input/> is the same */}
                <input type="submit" className='btn w-100 mt-3 text-light' value='Login' 
                    style={{backgroundColor: '#5b8e7d'}}/>

            </div>
        </form>
    </>
  )
}
