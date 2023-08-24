import OtpVerify from "./components/OtpVerify";
import Register from "./components/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<OtpVerify />}/>
        <Route path='/Register' element={<Register />}/>      
      </Routes>   
      <ToastContainer />  
    </Router>
  );
}

export default App;
