import React from "react";


type User1 = {
    value: string;
    onchange: React.Dispatch<React.SetStateAction<string>>
}
type User2 = User1 & {
    children: string[]
}


///////////////////////////////////////////////////////
//با استفاده از اینترفیس


interface User3 {
    name: string, 
    age : number
}
interface User4 extends User3{
    children: string[]
}



type Fruits = "Banana" | "Apple" | "orange"


// type User = {
//     value: string;
//     onchange: React.Dispatch<React.SetStateAction<string>>;
// }

function Article({value, onchange} : User1){
    return(
     <div>
        <h1>{value}</h1>
    
     </div>
    )
}

export default Article


