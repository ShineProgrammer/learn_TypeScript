import React, { ComponentProps } from "react";

type Button = ComponentProps<"button"> & {
    title?: string
} 

function Button({type, onChange, onClick} : Button){
    return(
        <button type={type}>rgsd</button>
    )
}

export default Button