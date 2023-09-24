import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Error from './components/404';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Bookbus from './components/book-bus';
import Login from './components/login';
import Register from './components/register';
import User from './components/user';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Protected from './components/protected';
import 'react-toastify/dist/ReactToastify.css';
import {Logincontext} from './components/logincontext';
import { toast,ToastContainer } from 'react-toastify';
import {Store} from './services/store/store';
import Bookedseatdata from './components/bookedseatdata';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <ToastContainer position='top-center'/>
    <Logincontext>
    <BrowserRouter>
    <nav className='nav-main d-flex'>
       <p className='fs-4 fw-'>भानुप्रताप बस सर्विस</p> 
      <ul className='d-flex align-content-around gap-5'>
    <Link to="/" className='nav-link rounded p-2'>Home</Link>
    <Link to="/bookbus" className='nav-link rounded p-2'>Booking</Link>
    <Link to="/user" className='nav-link rounded p-2'>User</Link>


    </ul>

    </nav>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/bookbus' element={<Protected Component={Bookbus}/>}></Route>  
      <Route path='/*' element={<Error/>}></Route>
      <Route path='/user/' element={<User/>}>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='protected' element={<Protected/>}></Route>


      </Route>
      <Route path='/bookedseatdata' element={<Protected Component={Bookedseatdata}/>}></Route>

     

    </Routes>
      </BrowserRouter>
      </Logincontext>
      </Provider>
      
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
