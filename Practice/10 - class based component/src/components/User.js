import { Component } from 'react';
import classes from './User.module.css';

// CLASS BASED COMPONENT
// class based can work together with functional component
// Component enables us to access some fucntionality of react like props with 'this'
class User extends Component {

  // RUNS EVERYTIME A COMPONENT IS REMOVED FROM THE DOM
  componentWillUnmount() {
    console.log("User umounted: " + this.props.name)
  }

  // PREBUILT METHOD
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// FUNCTIONAL COMPONENT
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
