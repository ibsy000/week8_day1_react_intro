import React from 'react'

export default function Login() {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
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
                <input type="submit" className='btn btn-primary w-100 mt-3' value='Login' />

            </div>
        </form>
    </>
  )
}
