"use Client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function page() {
    const [x, setX] = useState(1);
    useEffect(()=>{
        console.log("use Effect 1 Called");
        
    }, [X])

    useEffect(()=> {
        console.log("use Effect 2 Called");
        
    })
    return (
        <div>
            <p></p>
        </div>
    )


}