import React from "react";
import {useContext} from 'react';
import myContext from "./ContexApi";

function Child(){
    let myValue=useContext(myContext);
    return(
        <div>
            <h1>Value is: {myValue}<br/>
            <button onClick={()=>{myValue[1](++myValue[0])}}>update</button>
            </h1>
        </div>
    )
}
export default Child;