import { useRef, useState } from "react";

export default function Player() {
const player=useRef();
const [change,setchange]=useState(null);

function handleplayer(){
    setchange(player.current.value)
}

  return (
    <section id="player">
      <h2>Welcome {change ?? 'unknown entity'}</h2> 
 {/* the ?? is take the left value if it is true or it will take right if it is false */}
      <p>
        <input type="text" ref={player}/>
        <button onClick={handleplayer}>Set Name</button>
      </p>
    </section>
  );
}
