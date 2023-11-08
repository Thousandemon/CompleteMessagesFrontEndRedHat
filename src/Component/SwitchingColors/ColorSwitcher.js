import { useEffect, useState } from "react";


const ColorSwitcher = ()  => {

    const [color, setColor] = useState("Black");

    useEffect(()=>{
        let element = document.querySelector(".text");
        element.style.color=color;
    }, 
    [color]);

return (
    <>
        <h1 className = "text">This text is {color}</h1>
        <button onClick={() =>setColor("Orange")}>Orange</button>
        <button onClick={() =>setColor("Green")}>Green</button>
        <button onClick={() =>setColor("Purple")}>Purple</button>
        <button onClick={() =>setColor("Aquamarine")}>Aquamarine</button>
        <button onClick={() =>setColor("Gray")}>Gray</button>
    </>
)

}

export default ColorSwitcher