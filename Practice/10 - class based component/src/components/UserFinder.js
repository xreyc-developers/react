import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';
import classes from './UserFinder.module.css';

import Users from './Users';

// THIS ACTS LIKE A SERVER (JUST AN EXAMPLE)
// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
    // THIS ENABLES US TO ACCESS THE CONTEXT
    // BY USING this.context.(CONTENT KEY)
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            //filteredUsers: DUMMY_USERS,
            filteredUsers: [],
            searchTerm: ''
        }
    }

    // # FIRST LOAD ONLY
    // THIS WILL EXECUTE AFTER COMPONENT FIRST MOUNT (EVERY RELOAD OR COMPONENT IS FIRST LOAD)
    // RUN ONLY ONCE
    // USE THIS FOR GETTING FIRST DATA LIKE HTTP REQUEST
    componentDidMount() {
        // THIS WILL GET DATA FROM THE SERVER
        this.setState({
            filteredUsers: this.context.users//DUMMY_USERS
        })
    }

    // # EVER UPDATE
    // THIS WILL EXECUTE EVERY TIME THE COMPONENT IS REEVALUATED PDATED
    // THIS SHOULD BE USE ON SEARCH FUNCTIONS AND NEW UPDATES
    componentDidUpdate(prevProps, prevState) {
        // THIS PREVENTS THE HOOK TO CREATE INFINITE LOOP
        if(prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                    <ErrorBoundary>
                        <Users users={this.state.filteredUsers} />
                    </ErrorBoundary>
                </div>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
// 
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
// 
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
// 
//   return (
//     <Fragment>
//         <div className={classes.finder}>
//             <input type='search' onChange={searchChangeHandler} />
//             <Users users={filteredUsers} />
//         </div>
//     </Fragment>
//   );
// };
 
export default UserFinder;