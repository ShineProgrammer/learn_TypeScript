import React from "react";


type USER = {
    title:string,
    discribtion: string,
    sum: (a:number, b:number) => number
}


const Article2:React.FC<USER> = ({title, discribtion, sum}) => {
    return(
        <div>
            <h1>{title}</h1>
            <h1>{discribtion}</h1>
            <h1>{sum(9,16)}</h1>
        </div>
    )
}

export default Article2