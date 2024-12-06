import React, { useRef, useState } from 'react'
import Modal from './Modal.jsx';


export default function Timer({title,targettime}) {


    const [timereamaining,settimeremaining]=useState(targettime*1000);
    const timerisactive=timereamaining>0 && timereamaining<targettime*1000;

    const timer=useRef(null);
    const dialog=useRef();

    if(timereamaining<=0){
        clearInterval(timer.current)
        dialog.current.open();
    }

    function handletime(){
        timer.current=setInterval(()=>{
             settimeremaining((prev)=>prev-10)
        },10)
    }
    function handelreset(){
        settimeremaining(targettime*1000)
    }

    function ClearInterval(){
        dialog.current.open();
        clearInterval(timer.current)
    }

  return (
   <>
    <Modal ref={dialog}  targettime={targettime} timereamaining={timereamaining} onreset={handelreset}/>
    <div className='challenge'>
    <h2>{title}</h2>
      <p>
         {targettime} second challenge
      </p>
      <p>
        <button onClick={timerisactive ? ClearInterval: handletime}>{timerisactive ? 'Stop' :'Start'}</button>
      </p>
      <p className={timerisactive? 'active' : undefined}>{timerisactive ? 'Timer is Running' :'Time is Inactive'}</p>
    </div>
    </>
  )
}
