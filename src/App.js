import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import * as authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import Loader from "react-loader-spinner";
// Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contacts from './components/Contacts';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';


function App() {

  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
   }, [dispatch]);

  return (
    <div className="App">
      <Navigation />

      <Switch>
        <PublicRouter exact path="/" component={Home}/>
        <PrivateRoute path="/contacts" component={Contacts} restricted redirectTo="/login" />
        <PublicRouter path="/login" component={LogIn} restricted redirectTo="/contacts" />
        <PublicRouter path="/signup" component={SignUp} restricted redirectTo="/contacts" />
      </Switch>
     
    </div>
  );
}

export default App;
