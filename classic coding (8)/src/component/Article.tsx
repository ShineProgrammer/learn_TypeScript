import React from "react";


type USER = {
    title:string,
    discribtion: string,
    sum: (a:number, b:number) => number
}


function Article({title, discribtion, sum} : USER){
    return(
        <div>
            <h1>{title}</h1>
            <h1>{discribtion}</h1>
            <h1>{sum(9,16)}</h1>
        </div>
    )
}

export default Article