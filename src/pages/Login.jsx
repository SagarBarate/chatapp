import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Catch Up</span>
            <span className='title'> Register</span>
            <form >
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password' />
                <button>Sign In</button>
            </form>
            <p> You don't have account? Register</p>
        </div>
    </div>
  )
}
