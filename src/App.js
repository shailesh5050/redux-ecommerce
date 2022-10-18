import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import { Route,Routes,Link } from 'react-router-dom';
import Auth from './Components/Auth';
import Cart from './Components/Cart';
function App() {
  
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

        </ul>
      </nav>
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Auth Component={Cart} />}/>
        <Route path="*" element={<NotFound/>}/>
     </Routes>  
    </div>
  );
}

export default App;
