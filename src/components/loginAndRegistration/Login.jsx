import React from 'react'
import HeaderOnly from '../all/HeaderOnly'
import './form.css'
import Footer from '../all/Footer'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <HeaderOnly />
        <main>
            <h2>Log in:</h2>
            <form className='login-form' action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="mail">Mail:</label>
                    <input type="mail" name='mail' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" />
                </div>
                <button>Log in</button>
            </form>
            <p>Not a member?</p>
            <button>Register now</button>
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Login