import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// in the past, class based component are the one who can only manage state
// in class based, you have to group the state, unlike functional where you can do it
// individually
class Users extends Component {
  constructor() {
    super();
    // state - is up to us what we call it
    this.state = {
      showUsers:  true,
      more: 'Test' // THIS WON'T NOT BE DELETED
    };
  }

  componentDidUpdate() {
    // THIS IS USABLE ONLY ON REGULAR JAVASCRIPT
    // THE REASON WE CANNOT USE CODE HERE IS BECAUSE WE ARE RUNNING JSX CODE
    //try {} catch(err) {}
    if(this.props.users.length === 0) {
      throw new Error('No users provided');
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; (THIS WON'T WORK)
    // this does not update the state but merge with the state
    // this will only update the showUsers but the other will be keeped
    // this.setState({showUsers: false});
    this.setState((prevState) => {
      return {
        showUsers: !prevState.showUsers
      }
    });
  }

  // RENDER UI
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}

//const Users = () => {
//  const [showUsers, setShowUsers] = useState(true);
//
//  const toggleUsersHandler = () => {
//    setShowUsers((curState) => !curState);
//  };
//
//  const usersList = (
//    <ul>
//      {DUMMY_USERS.map((user) => (
//        <User key={user.id} name={user.name} />
//      ))}
//    </ul>
//  );
// return (
//   <div className={classes.users}>
//     <button onClick={toggleUsersHandler}>
//       {showUsers ? 'Hide' : 'Show'} Users
//     </button>
//     {showUsers && usersList}
//   </div>
// );
// };



export default Users;
