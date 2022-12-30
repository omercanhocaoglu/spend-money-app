import {React, useState, useEffect} from "react";

function Clock () {
    
    const [clock, setClock] = useState();

    const date = new Date().toDateString();

    useEffect( ( ) => {
        
        setInterval( ( ) => {

            const time = new Date().toLocaleTimeString();

            setClock(time);

        },1000 )
    } );
  
return (
    
    <div>
        
        {clock} {date}
        
    </div>
  )
};

export default Clock;