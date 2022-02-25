import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages';
import { Login } from './component/Login';
import {Cart} from './component/Cart/List'

function App() {
  return (
   <>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </>
  );
}

export default App;
