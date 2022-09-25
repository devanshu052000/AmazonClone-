import React, { Fragment, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>> ', authUser);

      if (authUser) {
        //the user just logged in or the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={ 
            <Fragment>
              <Login/>
            </Fragment>
           }/>
          <Route path="/checkout" element={
            <Fragment>
              <Header/>
              <Checkout/>
            </Fragment>
          } />
          <Route path="/" element={ 
            <Fragment>
              <Header/>
              <Home />
            </Fragment>            
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
