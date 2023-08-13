import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Catch Up</span>
            <span className='title'> Register</span>
            <form >
                <input type="text" placeholder='Display name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password' />
                <input type="file" />
                <button>Sign up</button>
            </form>
            <p> You do have an account? Login</p>
        </div>
    </div>
  )
}
