import React, { useRef, useImperativeHandle } from "react";

import classes from './Input.module.css'

// useImperativeHandle
// allows us to use functionality inside this component imperatively
// does not follow the common way react works like props
// directly manipulate something programatically
// this is reverse to the props event where you trigger the outside function
// you can trigger function inside this component outside

// React.forwardRef enables the second argument (ref) to be binded to the outside
// the ref here is the connection to the outside ref (binding)
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    // THIS WILL BE TRIGGERED OUTSIDE OF THE COMPONENT
    const activate = () => {
        console.log('THIS IS TRIGGERED FROM OUTSIDE');
        inputRef.current.focus()
    }

    // THIS SHOULD RETURN AN OBJECT THAT WILL BE ABLE TO USE OUTSIDE
    // THAT POINT TO A FUNTIONALITY INSIDE
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })
 
    return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`} >
    <label htmlFor="props.id">{props.label}</label>
    <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
    />
  </div>)
});

export default Input;