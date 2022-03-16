import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages';
import { Login } from './component/Login';
import {CartPage} from './pages'
import {Provider} from 'react-redux'
import { cartstore } from './component/productCard';

function App() {
  return (
   <>
   <Provider store={cartstore}>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </Provider>
  </>
  );
}

export default App;
