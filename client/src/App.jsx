import OtpVerify from "./components/OtpVerify";
import Register from "./components/Register";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<OtpVerify />}/>
        <Route path='/Register' element={<Register />}/>      
      </Routes>     
    </Router>
  );
}

export default App;
