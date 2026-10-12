import React from "react";

type UserMother = 'maryam' | 'sana' | 'sara'

type USER = {
    title:string;
    discribtion?: string;
    sum: (a:number, b:number) => number;
    mother: UserMother;
    //حالا توی پراپس اپ اینو صدا کنی اینا رو پیشنهاد میده
}


function Article({title, discribtion, sum, mother} : USER){
    return(
        <div>
            <h1>{title}</h1>
            <h1>{discribtion}</h1>
            <h1>{sum(9,16)}</h1>
            <h1>{mother}</h1>
        </div>
    )
}

export default Article


