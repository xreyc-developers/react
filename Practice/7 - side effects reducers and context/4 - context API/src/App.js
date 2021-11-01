import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext)
  return (
      <React.Fragment>
        <MainHeader/>
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </React.Fragment>
  );
}

export default App;


//function App() {
  // ############ ALL LOGIC HAS BEEN MOVED TO THE AUTHCONTEXT COMPONENT ############ 
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // RUNS ONLY IF THE DEPENDECY IS CHANGE
  // - on this case, the callbacl will only run once
  // EFFECT WITH NO DEPENDENCY
  // useEffect(() => {
  //   const isUserLoggedIn = localStorage.getItem('isLoggedIn');
  //   if(isUserLoggedIn === '1') {
  //     setIsLoggedIn(true)
  //   }
  // },[])

  // const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // localStorage.setItem('isLoggedIn', '1');
    // setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  //return (
      // ALL THAT IS WRAPPED BY THE AUTHCONTEXT WILL BE ABLE TO ACCESS ITS CONTEXT
      // THEY BECOME A DECENDANT OF THE CONTEXT
      // all the children and the children's children will be able to access the context
      // AuthContext.Provider is where the souce of data come from 'THE PROVIDER' in which the data
      // originates
      // <AuthContext.Provider 
      //   value={{
      //     isLoggedIn: isLoggedIn,
      //     onLogout: logoutHandler
      //   }}
      // >
      //  <MainHeader/>
      //  <main>
      //    {!isLoggedIn && <Login onLogin={loginHandler} />}
      //    {isLoggedIn && <Home onLogout={logoutHandler} />}
      //  </main>
     // </AuthContext.Provider>
//  );
//}