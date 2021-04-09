import React, { useState } from 'react';
import Css from './Style.css'

function Cal()
{
    const [valueA, setvalueA] = useState();
    const [valueB, setvalueB] = useState();
    const [result, setresult] = useState();

    const add = () =>
    {
        const addition = (parseInt(valueA) + parseInt(valueB));
        setresult(addition);
    }
    const sub = () =>
    {
        const subt = (parseInt(valueA) - parseInt(valueB));
        setresult(subt);
       
    }
    const mul = () =>
    {
        const addition = (parseInt(valueA) * parseInt(valueB));
        setresult(addition);
    }
    const div = () =>
    {
        const addition = (parseInt(valueA) / parseInt(valueB));
        setresult(addition);
    }
    const reset=()=>{
        setvalueA("");
        setvalueB("")

    }
   


    return (
        <>
           <div className="container">
            <div>
                <label>First Value</label>
                <input type="text" value={valueA}  placeholder="enter the value"onChange={(event) => setvalueA(event.target.value)} />
                 <br></br><br></br>
                 <label>Second</label>
                <input type="text" value={valueB}  placeholder="enter the value"onChange={(event) =>
                     setvalueB(event.target.value)} /><br></br><br></br>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                <button onClick={mul}>*</button>
                <button onClick={div}>/</button>
                <button onClick={reset}>Reset </button><br></br>
            </div>
            <div>
                <h2>result:{result}</h2>
            </div>
          </div>

        </>
    );
}
export default Cal;