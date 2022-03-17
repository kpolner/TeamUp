import React from 'react';
import './index.css';
import App from './components/pages/App';
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
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="create" element={<Create />} />
      <Route path="discover" element={<Discover />} />
      <Route path="update" element={<Update />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
