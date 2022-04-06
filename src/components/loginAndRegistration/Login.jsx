import React, { useState } from 'react'
import HeaderOnly from '../all/HeaderOnly'
import './form.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../all/Footer'

const Login = () => {
    const navigate  = useNavigate();

    const [mail, setMail]               = useState('');
    const [password, setPassword]       = useState('');
    const [validation, setValidation]   = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidation('')
        if(mail === '' || password === ''){
            setValidation('Must fill in both mail and password')
        }else{
            const userData = {
                "mail": mail,
                "password": password
            }
            try{
                let response = await fetch('http://localhost:3001/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData)
                })
                let data = await response.json()
                setValidation(data.message)
            }catch(error){
                console.log(error)
            }
        }
    }
  return (
    <div>
        <HeaderOnly />
        <main>
            <h2>Log in:</h2>
            <form className='login-form' action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="mail">Mail:</label>
                    <input type="mail" name='mail' onChange={(e) => setMail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button>Log in</button>
                <p className='validation'>{validation}</p>
            </form>
            <p>Not a member?</p>
            <button onClick={() => navigate('/register')}>Register now</button>
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Login