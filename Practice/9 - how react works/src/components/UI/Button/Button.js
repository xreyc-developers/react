import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

/*
# HOW FUNCTION PROPS BEHAVE
- On this case, the button will be rerendered because the function used for its event is
re-created due to the re-execution of the component, therefor the functions are always
changing on its value since it is re-executed/recreated on reexecution.
- Since function is just an object, it would cause false comparison on the result

FUNCTIONS ARE JUST OBJECTS`
false === false : true
'hi' === 'hi' : true
[1,2] === [1,2] : false
{name:'1"} = {name'1'} : false

## To handle function props
- useCallback()

*/
