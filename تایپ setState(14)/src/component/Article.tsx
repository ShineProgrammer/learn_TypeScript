import React from "react";

type User = {
    value: string;
    onchange: React.Dispatch<React.SetStateAction<string>>;
}

function Article({value, onchange} : User){
    return(
     <div>
        <h1>{value}</h1>
    
     </div>
    )
}

export default Article


