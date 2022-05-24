import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import AddReview from './Components/Pages/Dashboard/AddReview';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Myorders from './Components/Pages/Dashboard/Myorders';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import WelcomeDashboard from './Components/Pages/Dashboard/WelcomeDashboard';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import SignUp from './Components/Pages/Login/SignUp';
import Purchase from './Components/Pages/Purchase/Purchase';
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
        <Route path='/register' element={<Register></Register>}></Route>

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
        </Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>



    </div>
  );
}

export default App;
