import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {

    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(e)

        // Check that the passwords match
        let password = e.target.password.value
        let confirmPass = e.target.confirmPass.value
        if (password !== confirmPass){
            props.flashMessage('Your passwords do not match', 'danger')
        } else {
            console.log('Passwords do match')
            // Set up request to Flask App
            let myHeaders = new Headers() // allows us to work with headers on a request
            myHeaders.append('Content-Type', 'application/json') // takes in name and value

            let formData = JSON.stringify({ // used to take a json object and turn it into a json string
                username: e.target.username.value,
                email: e.target.email.value,
                password: password // we got password already at start
            })

            fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        console.error(data.error)
                    } else {
                        props.flashMessage('You have successfully registered', 'success')
                        navigate('/')
                    }
                })
        }
    }
  return (
    <>
        <h4 className="text-center">Register</h4>

        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                    
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' placeholder='Enter Email'
                    name='email' />

                <label htmlFor="username">Username</label>
                <input type="text" className='form-control' placeholder='Enter Username'
                    name='username' />

                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' placeholder='Enter Password'
                    name='password' />

                <label htmlFor="confirmPass">Confirm Password</label>
                <input type="password" className='form-control' placeholder='Confirm Password'
                    name='confirmPass' />

                {/* <button/> or <input/> is the same */}
                <input type="submit" className='btn w-100 mt-3 text-light' value='Register' 
                    style={{backgroundColor: '#5b8e7d'}}/>

            </div>
        </form>
    </>
  )
}
