import React, { useState } from 'react';
import Css from './Style.css'

function User()
{

    const [name, setName] = useState("");
    const [FullName, setfullName] = useState();
    

    const onsubmit = (event) =>
    {
        event.preventDefault();
        setfullName(name);
    };
    const input = (event) =>
    {

        
        setName(event.target.value);

    };
    const reset=()=>{
                    setName(" ");
    }   

    return (
        <>
            <form 
            className="container" onSubmit={onsubmit }>
                <div>
                    <label> Username</label>
                    <input type="text" value={name} onChange={input} /><br></br>
                    <button> submit</button>
                    <button onClick={reset}>reset</button>
                    <h1>{FullName}</h1>
                </div>
            </form>
        </>

    )
}
export default User;