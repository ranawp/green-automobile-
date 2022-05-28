import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog/Blog';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import AddReview from './Components/Pages/Dashboard/AddReview';
import AllUsers from './Components/Pages/Dashboard/AllUsers';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageAllOrders from './Components/Pages/Dashboard/ManageAllOrders';
import ManageAllProducts from './Components/Pages/Dashboard/ManageAllProducts';
import Myorders from './Components/Pages/Dashboard/Myorders';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import WelcomeDashboard from './Components/Pages/Dashboard/WelcomeDashboard';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';

import RequireAuth from './Components/Pages/Login/RequireAuth';
import SignUp from './Components/Pages/Login/SignUp';
import Purchase from './Components/Pages/Purchase/Purchase';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import NotFound from './Components/Shared/NotFound/NotFound';



function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>


        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

          <Route index element={<WelcomeDashboard></WelcomeDashboard>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>

          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='alluser' element={<AllUsers></AllUsers>}></Route>
          <Route path='manageAllproducts' element={<ManageAllProducts></ManageAllProducts>}></Route>
          <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
        </Route>


        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
