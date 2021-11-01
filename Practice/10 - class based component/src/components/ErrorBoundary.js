import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false }
    }

    // THIS HAS NO EQUIVALENT ON FUNCTIONAL BASED COMPONENT
    // THIS TRIGGERS EVERY TIME A CHILD COMPONENT THROWS AN ERROR
    // ERROR WILL STILL OCCUR ON DEVELOPMENT, BUT ON PRODUCTION THE ERROR
    // MESSAGE DEFAULT BY REACT WILL NO LONGER APEAR)
    componentDidCatch(error) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <p>Something went wrong</p>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;