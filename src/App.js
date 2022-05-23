import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register';
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
        <Route path='/purchase/:purchaseId' element={<Purchase></Purchase>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
