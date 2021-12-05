/* FITCHECK
 * WEB FRONTEND
 * CVGT F21-BT-BUSINESS-ONLINE
 */

// app main view

import './common';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";
import MyFits from "./components/MyFits";
import Navbar from "./components/Navbar";
import Wardrobe from "./components/Wardrobe";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
          <Navbar></Navbar>
            <Login></Login>
          </Route>
          <Route path="/Register">
          <Navbar></Navbar>
          <Register></Register>
          </Route>
          <Route path="/Wardrobe">
          <Navbar></Navbar>
            <Wardrobe/>
          </Route>
          <Route path="/MyFits">
          <Navbar></Navbar>
            <MyFits></MyFits>
          </Route>
          <Route path="/Create">
          <Navbar></Navbar>
          <Create/>
          </Route>
       
          <Route path="/">
          <Navbar></Navbar>
         
           <Landing></Landing>
          </Route>
       
       
        </Switch>
      </Router >
    </div >
  );
}

export default App;