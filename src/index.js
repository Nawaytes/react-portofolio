import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./views/home";
// import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Profile from "./views/Profile";
import { ChakraProvider } from "@chakra-ui/react";
import ToDoList from "./views/exercise-m-6/ToDoList";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nav' element={<Profile />} />
          <Route path='/exercise-m-6' element={<ToDoList />} />
        </Routes>
      </Router> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
