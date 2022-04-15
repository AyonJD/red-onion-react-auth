import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Shared/Navber';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
