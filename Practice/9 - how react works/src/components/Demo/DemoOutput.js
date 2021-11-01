import React, { useMemo } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    //YOU CAN USE MEMO ON FUNCTIONS
    const {items} = props;
    const sortedList = useMemo(() => {
        console.log('THIS FUNCTION RUNS - MEMO')
        return items.sort((a,b) => a -b )
    }, [items])

    console.log('CHILD_RUNNING')
    return (
        <>
            <MyParagraph>{props.show ? 'This is new' : ''}</MyParagraph>
            <ul>
                {sortedList.map(item => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
}

// YOU CAN USE MEMO NOT ONLY HERE BUT ALSO ON THE FUNCTION
export default DemoOutput;
//export default React.memo(DemoOutput);
// REACT MEMO
// - allows us to optimize functional components
// - it tells react, to see the props the component gets and check the current value
// if equivalent to the past value
// - if equivalent, component execution will be skipped

// IF YOU RUN SOME HEAVY INTESIVE TASK WHICH WILL REQUIRE THE SAME DATA ONLY.
// USE USECALLBACK AND REACT.MEMO SO THAT WE WILL BE ABLE TO LESSEN THE PROCESSES.
// FOR EXAMPLE: SORTING 100 RECORD

// NOTE
// it stores the previous props values then compare it to the new props
// it will cause performance issue
// it depends your use case, you might trade specific use case to performance
// it depends on the content of your props
// use this if the child component has a huge component tree
// use this if props contains small data only
// if you only need this to render some simple task, do not use memo