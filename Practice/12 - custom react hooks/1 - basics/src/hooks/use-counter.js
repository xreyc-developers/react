import { useState, useEffect } from 'react';

// the keyword 'use' signals react that you are going to implement a custom hook.
// react looks for a word use else you will see a warning
// default forwards to true
const useCounter = (forwards = true) => {
    // EVERYTHING YOU USED HERE LIKE USESTATE AND USEEFFECT WILL BE TIED TO
    // THE USER OF THIS HOOK

    // THIS STATE WILL BE TIED TO TO THE USER OF THIS HOOK
    // EVERY COMPONENT THAT USE THIS HOOK WILL RECEIVED THEIR
    // OWN STATE
    // IN ORDER TO USE THIS MANUALLY ON THE USER WE MUST RETURN IT
    const [counter, setCounter] = useState(0);

    // THIS USEEFFECT WILL BE TIED TO TO THE USER OF THIS HOOK
    // EVERY COMPONENT THAT USE THIS HOOK WILL RECEIVED THEIR
    // OWN EFFECT
    // IN ORDER TO USE THIS MANUALLY ON THE USER WE MUST RETURN IT
    useEffect(() => {
      const interval = setInterval(() => {
          if(forwards) {
            setCounter((prevCounter) => prevCounter + 1);
          } else {
            setCounter((prevCounter) => prevCounter - 1);
          }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    // WE DONT NEED TO RETURN SOMETHING FOR EACH CUSTOM HOOK, BUT IF YOU WANT
    // TO ACCESS AND MANIPULATE IT, YOU MUST RETURN IT
    // ALL STATE AND EFFECT ARE CREATED FOR EACH COMPONENT THAT USE THIS HOOK
    // BUT IN ORDER FOR THE USER TO MANIPULATE IT, WE MUST RETURN IT
    return counter
}

export default useCounter;