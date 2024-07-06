import logo from "./logo.svg";
import "./App.css";
import AutoLogin from "./Components/AutoLogin";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<AutoLogin></AutoLogin>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
