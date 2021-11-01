const Wrapper = props => {
    return props.children;
}

export default Wrapper;

// THIS IS A WRAPPER COMPONENT
// - the main goal of this wrapper is to be able to remove <div> wrapping our elements
// on another components
// - this returns the whole element without creating an new div container