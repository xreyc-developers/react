import { createContext, useState, useEffect } from "react";
// ALL COMPONENT THAT IS WRAP BY THIS COMPONENT WILL BE ABLE TO ACCESS THIS CONTEXT
// createContext(value)
// value is just a default value if there is no Provider used
// passing undefined to the Provider does not use the default value
// THIS WILL SHOW IF THERE IS NO PROVIDER FOR THIS CONTEXT
// PUTTING A DEFAULT TO THE CONTEXT, HELP US SOMEHOW TO THE IDE COMPLETION
const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email,password) => {}
});

// A BETTER WAY OF USAGE
const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('isLoggedIn');
        if(isUserLoggedIn === '1') {
          setIsLoggedIn(true)
        }
    },[])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
export { AuthContextProvider }