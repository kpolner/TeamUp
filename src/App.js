import Header from './components/Header';
import About from './components/About';
import Create from './components/Create';
import Login from './components/Login';
import SignUp from './components/Sign Up';
import Update from './components/Update';
import View from './components/View';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from 'react';
function App() {
  return (
        <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to</div>
                <div class="text-2">Team<span>Up</span></div>
                <div class="text-3">A sport application...</div>
                <a href="/about">Learn More</a>
            </div>
        </div>
    </section> 
   );
};

export default App;
