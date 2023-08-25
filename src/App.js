import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./views/Profile";
import ToDoList from "./views/exercise-m-6/ToDoList";
import Home from "./views/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/nav' element={<Profile />} />
          <Route exact path='/exercise-m-6' element={<ToDoList />} />
        </Routes>
      </Router>
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
