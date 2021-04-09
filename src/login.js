import React, { useState } from 'react';
import './login.css';


function Login()
{
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [Email, setEmail] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [lnameErr, setlnameErr] = useState('');
    const [EmailErr, setEmailErr] = useState('');


    const onchange = (event) =>
    {
        console.log(event.target.value)
        const value = event.target.value
        if (event.target.name === 'firstname')
        {
            setfname(value)
        }
        if (event.target.name === 'Lastname')
        {
            setlname(value)
        }
        if (event.target.name === 'Email')
        {
            setEmail(value)
        }

    }
    const submit = () =>
    {
      const EmailVAlidation=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        console.log(Email)
        if (fname === '')
        {
            setNameErr('field is required')
            setTimeout(()=>{
                setNameErr('')
            },
            3000)
        }
         else if (lname === '')
        {
            setlnameErr('field is required')
            setTimeout(()=>{
                setlnameErr('')
            },3000)
        }
        else if(Email ==='')
        {
            setEmailErr('field is required')
            setTimeout(()=>{
                setEmailErr('')
            },
            3000)
        }
        else if(!EmailVAlidation.test(Email)){
              setEmailErr('plz enter valid email.')
              setTimeout(()=>{
                setEmailErr('')
            },
            3000)
        }
        
        
        else{
            const data={
                fname:fname,
                lname:lname,
                Email:Email,
                
            }
            alert(JSON.stringify(data))
        }


    }
    return (
        <>
            <div className="log">
                {/* <input type="text">UserName </input><br></br>
                <input type="text">Password</input><br></br>
                <button> Login </button> */}

                <label>First name:</label><br></br>
                <input type="text" name="firstname" onChange={(event) => onchange(event)} /> <br></br>
                <p style={{ color: 'red' }}>{nameErr}</p>
                <label for="fname">Last name:</label><br></br>
                <input type="text" name="Lastname" onChange={(event) => onchange(event)} /><br></br>
                <p style={{ color: 'red' }}>{lnameErr}</p>
                <label>Email:</label><br></br>
                <input type="Email" name="Email" onChange={(event) => onchange(event)} /><br></br>
                <p style={{ color: 'red' }}>{EmailErr}</p>
                <button  className='sub' onClick={() => submit()} >login</button>

            </div>

        </>

    );
}
export default Login;