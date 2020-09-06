import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MenuContextProvider from './context/MenuContext';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <Router> 
          <Header />
            <Navbar />
          <Switch>
           
            <Route exact={true} path='/'><Home /></Route>
            <Route exact={true} path='/login'><Login /></Route>
            {/* <Route exact={true} path='/products' ><Products /></Route>
            <Route exact={true} path='/contact' ><Contact /></Route>
            <Route exact={true} path='/contact' ><Footer /></Route> */}
          </Switch>
        </Router>
      </MenuContextProvider>
    </div>
  );
}

export default App;
