import React from 'react'
import { useRef,forwardRef,useImperativeHandle } from 'react'

const Modal=forwardRef(function Modal({targettime,timereamaining,onreset},ref) {
  const dialog=useRef();
  const userlost=timereamaining<=0
  const resulttime=(timereamaining/1000).toFixed(2);

  useImperativeHandle(ref,()=>{
     return{
      open(){
         dialog.current.showModal();
      }
     }
  })


  return (
    <dialog  ref={dialog} className='result-modal'>
        {userlost ? <h2>You lost</h2> :<h2>You won</h2> }  
         <p>The target time was {targettime} seconds</p>
         <p>You stoped the timer with {resulttime} seconds</p>
         <form method='dialog'>
               <button onClick={onreset}>Close</button>
         </form>
    </dialog>
  )
});

export default Modal