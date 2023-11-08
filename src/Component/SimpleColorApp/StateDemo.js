import { useState } from "react";

const StateDemo = () =>{

    const [color, setColor] = useState("Red")

    return (
        <>
            <div>I like {color}</div>
            <button onClick={()=>setColor("Orange")}>Change Color</button>
        </>
    )
}

export default StateDemo;