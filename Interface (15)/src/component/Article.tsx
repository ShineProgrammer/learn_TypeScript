import React from "react";


interface IUser{
    value: string;
    onchange: React.Dispatch<React.SetStateAction<string>>;
}


type Fruits = "Banana" | "Apple" | "orange"


// type User = {
//     value: string;
//     onchange: React.Dispatch<React.SetStateAction<string>>;
// }

function Article({value, onchange} : IUser){
    return(
     <div>
        <h1>{value}</h1>
    
     </div>
    )
}

export default Article


