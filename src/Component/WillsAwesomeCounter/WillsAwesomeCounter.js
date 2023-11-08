import { useState } from "react";

const WillsAwesomeCounter = (props) => {

    const [count, setCount] = useState(props.initialValue ?? 0);

    function add()  {
        setCount((prevCount)=> prevCount+1)
    }

    function remove()  {
        setCount((prevCount)=> {
            let result = prevCount-1;
            if (result <0) {
                result = 0;
            }
            return result;
    });
}

return (
    <>
        <h1>Will's Awesome Counter</h1>
        <button onClick= {add}>Add</button>
        <div>{count}</div>
        
        <button onClick= {remove}>Remove</button>
    </>
    )
}

export default WillsAwesomeCounter;