import React, {useState} from 'react'
import HeaderOnly from '../all/HeaderOnly';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [firstname, setFirstname]     = useState('');
    const [lastname, setLastname]       = useState('');
    const [mail, setMail]               = useState('');
    const [date, setDate]               = useState('');
    const [password, setPassword]       = useState('');
    const [validation, setValidation]   = useState('');
    const navigate                      = useNavigate();

     const passwordValidation = () => { 
         let errors = [];
         if (password.length < 8){
          errors.push('Password must be at least 8 characters');
         }
         if (password.search(/[a-z]/i) < 0){
          errors.push( 'Password must contain at least one letter');
         }
         if (password.search(/[0-9]/) < 0) {
          errors.push("Your password must contain at least one digit."); 
         }
         if (validation.length > 0) {
            let errorString = errors.join('\n')
            setValidation(errorString);
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
    
    const handleSubmit = async (e) => {
        setValidation('')
        //DateValidation();
        e.preventDefault();
        if(passwordValidation()){
            let userData = {
                "firstname": firstname,
                "lastname": lastname,
                "mail": mail,
                "date": date,
                "password": password,
            }
            console.log(userData)   
            try{
                let response = await fetch('http://localhost:3001/users', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json',
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
            <h2>Become a member!</h2>
            <form className='login-form' action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className='name-form-group'>
                        <label htmlFor="name">Firstname:</label>
                        <input  type="text" name='name' onChange={(e) => setFirstname(e.target.value)} required/>
                    </div>
                    <div className='name-form-group'> 
                        <label htmlFor="name">Lastname:</label>
                        <input  type="text" name='name' onChange={(e) => setLastname(e.target.value)} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="mail">Mail:</label>
                    <input type="mail" name='mail' onChange={(e) => setMail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" name='birthday' onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <p className="validation">{validation}</p>
                <button>Register</button>
            </form>
            <p>Already a member?</p>
            <button onClick={() => navigate('/login')}>Log in</button>
        </main>
    </div>
  )
}

export default Register