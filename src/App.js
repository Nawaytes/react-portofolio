import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./views/Profile";
import ToDoList from "./views/exercise-m-6/ToDoList";
import Home from "./views/home";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  let [showNavbar, setShowNavbar] = useState(1);
  const changeNavbarColor = () => {
    if (window.scrollY > 100) setShowNavbar(0);
    else setShowNavbar(1);
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Router>
        {<NavBar isVisible={showNavbar} />}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/finish-it' element={<Profile />} />
          <Route exact path='/exercise-m-6' element={<ToDoList />} />
        </Routes>
      </Router>
      <Footer />
      {/* <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
