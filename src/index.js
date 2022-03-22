import React from 'react';
import './index.css';
import { Home } from './components/pages/Home';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/pages/Login';
import SignUp from './components/pages/Sign Up';
import Create from './components/pages/Create';
import Discover from './components/pages/Discover';
import Update from './components/pages/Update';
import About from './components/pages/About';
import UpdateEvent from './components/pages/UpdateEvent';
import { Footer } from './components/page elements/Footer';
import { Navbar } from './components/page elements/Navbar';
//Routing for the entire project
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="create" element={<Create />} />
      <Route path="discover" element={<Discover />} />
      <Route path="update" element={<Update />} />
      <Route path="about" element={<About />} />
      <Route path="UpdateEvent" element={<UpdateEvent />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
