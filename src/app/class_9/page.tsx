
"use Client";
import { useState } from "react";

export default function Home() {
    let [x, setX] = useState(1); //[value: number , seter: function]


const updateVar = () => {
    setX(x + 1);
    // console.log(x);
    
};
const updateVars = () => {
    setX(x - 1);
    // console.log(x);
    
};
return (
    <>
    <h1>{x}</h1>
    <button onClick= {updateVar} >Increment</button>
    <button onClick= {updateVars} >Decrement</button>
    </>
);

}