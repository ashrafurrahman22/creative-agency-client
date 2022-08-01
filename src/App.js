import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>

            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>

            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>


    </div>
  );
}

export default App;
