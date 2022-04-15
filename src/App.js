import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Shared/Navber';
import Home from './Components/Home/Home';
import Breakfast from './Components/Shared/Meals/Breakfast';
import Lunch from './Components/Shared/Meals/Lunch/Lunch';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner'></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
