import React from "react";

export default function AboutLayout (props: any) {
    return <div>
        <h1>
            <h1>About Layout (this will be shown in about folder pages)</h1>
            {props.children}
        </h1>
    </div>
}