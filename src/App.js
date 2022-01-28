import './App.css';
import { Navbar } from './component/navbar';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages';

function App() {
  return (
   <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
  </Routes>
  </>
  );
}

export default App;
