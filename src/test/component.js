import React from "react";
const Wrapper = (props) => {
    return (<div style={{background:'green',display:"flex",justifyContent:"center",alignContent:"center"}}>
            {props.children}
    </div>)
}

const InputText = (props) => {
    return(<input type='text' value={props.value}></input>);
}

export {Wrapper,InputText};