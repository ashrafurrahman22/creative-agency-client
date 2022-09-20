import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Dashboard/Order/Order';
import Review from './Pages/Dashboard/Review/Review';
import ServiceList from './Pages/Dashboard/ServiceList/ServiceList';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import SignUpMain from './Pages/Login/SignUpMain';
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio';
import OurTeam from './Pages/OurTeam/OurTeam';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/portfolio' element={<OurPortfolio></OurPortfolio>}></Route>
            <Route path='/team' element={<OurTeam></OurTeam>}></Route>

          {/* dashboard */}
          <Route path='/dashboard' element={ <Dashboard></Dashboard> }>

            <Route index element={ <Order></Order> }></Route>
          <Route path="order" element={  <Order></Order>  }></Route>
          <Route path="servicelist" element={ <ServiceList></ServiceList> }></Route>
          <Route path='review' element={ <Review></Review> }></Route>
            
          </Route>





            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUpMain></SignUpMain>}></Route>

            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>

        <ToastContainer />
    </div>
  );
}

export default App;
