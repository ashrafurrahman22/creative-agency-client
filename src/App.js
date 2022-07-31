import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>


    </div>
  );
}

export default App;
