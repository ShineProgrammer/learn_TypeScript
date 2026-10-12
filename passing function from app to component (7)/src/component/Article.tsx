import React from "react";

function Article(props : {
    title:string,
    discribtion: string,
    sum: (a:number, b:number) => number
}){
    return(
        <div>
            <h1>{props.title}</h1>
            <h1>{props.discribtion}</h1>
            <h1>{props.sum(9,16)}</h1>
        </div>
    )
}

export default Article