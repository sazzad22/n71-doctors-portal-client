import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className=' mx-auto' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/appointment' element={<Appointment></Appointment>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
