import './App.css';
import { Navbar } from './component/navbar';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages';
import { Login } from './component/Login';

function App() {
  return (
   <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/log' element={<Login/>}/>
  </Routes>
  </>
  );
}

export default App;
