import React, { useState } from 'react';

function Cal(){
     const[valueA,setvalueA] =useState();
     const[valueB,setvalueB] =useState();
     const[Operation,setOperation] = useState('+');
    const[result,setresult] = useState();

     const onsubmit=()=>{
         
         if(Operation=== '+'){
           setresult(parseInt(valueA ) + parseInt(valueB)) ;
         }
         if(Operation===('-')){
            setresult(valueA- valueB);
          }
          if(Operation=== ('*')){
            setresult(valueA*valueB);
          }
          if(Operation=== ('/')){
            setresult(valueA / valueB);
          }
          
     }
    
    return(
        <>
        <div>
            <h2>result={result}</h2>
        <div>
         <input type="text" value={valueA} onChange={(event)=>setvalueA(event.target.value) }/>
         <input type="text" value={valueB} onChange={(event)=>setvalueB(event.target.value)}/>
         
         <button onClick={onsubmit}>submit</button>
         </div><br></br>
             <div>
          <button onClick={()=>setOperation('+') }>+</button>
          <button onClick={()=>setOperation('-')}>-</button>
          <button onClick={()=>setOperation('*')}>*</button>
          <button onClick={()=>setOperation('/')}>/</button>
          </div>
          
          </div>
          </>

    );
}
export default Cal;