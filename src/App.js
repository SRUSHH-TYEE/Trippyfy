import './App.css';

import Registration from './Pages/Registration';
import Home from './Pages/Home';
import Login from './Pages/Login';

import {
  // BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
      <HashRouter basename="/">     
          <Routes>
            {/* ROUTE 1: For Home */}
             <Route exact path='/' element={<Home/>} />

            {/* ROUTE 2: For Registration Form */}
            <Route exact path='/register' element={
              <Registration/>
            }/>
            
            {/* ROUTE 3: For Login Form */}
            <Route exact path='/login' element={
              <Login/>
            }/> 

          </Routes>
      </HashRouter>
    </>

  );
}

export default App;
