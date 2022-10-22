import Login from './Components/Login';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import { Route,Routes } from 'react-router-dom';
import Auth from './Components/Auth';
import Cart from './Components/Cart';
import Home from './Components/Home';
import About from './Components/About';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  const location = useLocation();
  let path = location.pathname;
  function checkLoginRegister(){
    if(path==='/login'||path==='/register'){
      return true;
    }
    else{
      return false;
    }
  }
  return (
    <div>
       {checkLoginRegister()==true  ? '' : <Navbar/>}
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Auth Component={Cart} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<NotFound/>}/>
     </Routes>  
    </div>
  );
}

export default App;
