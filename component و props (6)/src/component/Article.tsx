import React from "react";

function Article(props : {title:string, discribtion: string}){
    return(
        <div>
            <h1>{props.title}</h1>
            <h1>{props.discribtion}</h1>
        </div>
    )
}

export default Article