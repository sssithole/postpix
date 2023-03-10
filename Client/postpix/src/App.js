import './App.css';
import Login from './pages/Login';
import Adduser from './pages/AddUser'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route exact path='/addUser' element={<Adduser/>} />
        </Routes>
      </Router> 
      {/* <Adduser/> */}
    </div>
  );
}

export default App;
