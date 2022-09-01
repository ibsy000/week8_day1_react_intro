import React from 'react'

export default function Register() {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
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
                <input type="submit" className='btn btn-primary w-100 mt-3' value='Register' />

            </div>
        </form>
    </>
  )
}
