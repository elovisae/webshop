import React, {useState} from 'react'
import HeaderOnly from '../all/HeaderOnly';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [name, setName]           = useState('');
    const [mail, setMail]           = useState('');
    const [date, setDate]           = useState('');
    const [password, setPassword]   = useState('');
    const [validation, setValidation]   = useState([]);
    const navigate                  = useNavigate();

    const passwordValidation = () => { 
        setValidation([])
        if (password.length < 8){
         setValidation(...validation, 'Password must be at least 8 characters');
        }
        if (password.search(/[a-z]/i) < 0){
         setValidation(...validation, 'Password must contain at least one letter');
        }
        if (password.search(/[0-9]/) < 0) {
          setValidation(...validation, "Your password must contain at least one digit."); 
        }
        if (validation.length > 0) {
            let errors = [...validation]
            errors.join('\n');
          return false
        }
        return true
    }
    
    // const DateValidation = () => {
    //     let todaysDate = new Date();
    //     let month = todaysDate.getMonth() + 1;
    //     if(month.toString().length < 2){
    //         todaysDate = `${todaysDate.getFullYear()}-0${month}-${todaysDate.getDate()}`
    //     }else{
    //         todaysDate = `${todaysDate.getFullYear()}-${month}-${todaysDate.getDate()}`
    //     }
        
    // }
    
    const handleSubmit = (e) => {
        //DateValidation();
        e.preventDefault();
        if(passwordValidation()){
            let userInput = {
                "name": name,
                "mail": mail,
                "date": date,
                "password": password,
            }
            console.log(userInput)
        }
        
       
    }
  return (
    <div>
        <HeaderOnly />
        <main>
            <h2>Become a member!</h2>
            <form className='login-form' action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mail">Mail:</label>
                    <input type="mail" name='mail' onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" name='birthday' onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <p id="validation"></p>
                <button>Register</button>
            </form>
            <p>Already a member?</p>
            <button onClick={() => navigate('/login')}>Log in</button>
        </main>
    </div>
  )
}

export default Register