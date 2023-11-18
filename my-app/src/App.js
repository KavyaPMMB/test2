
import './App.css';
import Navsection from './Components/Navsection';
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Addbook from './Components/Addbook';
import Bookdetails from './Components/Addbook';
import Editbook from './Components/Addbook';
import Update from './Components/Update';
import Shoppingcart from './Cart/Shoppingcart';

import Adminlogin from './Components/Adminlogin';
import Usersignup from './Components/Usersignup';
import Userlogin from './Components/Userlogin';




function App() {
  return (
    <div>
      
     <BrowserRouter>
     <Navsection/>
     <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/adminlogin" element={<Adminlogin/>}></Route>
      <Route path="/usersignup" element={<Usersignup/>}></Route>
      <Route path="/userlogin" element={<Userlogin/>}></Route>
      <Route path="/addbooks" element={<Addbook/>}></Route>
      <Route path="/Bookdetails/:bookid" element={<Bookdetails/>}></Route>
      <Route path="/update/:bookid" element={<Update/>}></Route>
      <Route path="/addcart" element={<Shoppingcart/>}></Route>
      <Route path="/adminlogin" element={<Adminlogin/>}></Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
