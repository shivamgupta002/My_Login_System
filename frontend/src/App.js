import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
