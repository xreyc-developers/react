import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('MOTHER_RUNNING')

  // USE CALLBACK
  // it memorized a callback
  // first argument - the function you want to store
  // second argument - the dependencies
  // [] - empty to inform react that the function will never change
  //    - the same function will be reused
  // - everything will be stored including the parameters used on the function
  // in this case the first variable will always be its value if you don't put
  // it on the parameters
  const toggleParagraphHandler = useCallback(() => {
    // allowToggle will alway be false unless you put it on dependencies
    if(allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]); // if allowToggle changes, the function will be recreated

  const listItem = useMemo(() => [4,3,5,6,9], [])

  const toggleAllowToggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} items={listItem}/>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
      <Button onClick={toggleAllowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;
