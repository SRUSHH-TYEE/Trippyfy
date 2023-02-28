import './App.css';
import Footerh from './components/Footerh';
import Homebgimg from './components/Homebgimg';
import Navbar from './components/Navbar';
import Registerbtn from './components/Registerbtn';
import Registration from './components/Registration';
import {
  // BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginBox from './components/LoginBox';

function App() {
  let loggedIn = false
  return (
    <>
      <HashRouter basename="/">     
    <Homebgimg loggedIn={loggedIn} />
    <Navbar loggedIn={loggedIn}/>
          <Routes>
            {/*ROUTE 1: For Home */}
            <Route exact path='/' element={<>
              <Registerbtn />
              <Footerh />
            </>} />

            {/* ROUTE 2: For Registration Form */}
            <Route exact path='/register' element={
              <Registration/>
            }/>
            
            {/* ROUTE 3: For Login Form */}
            <Route exact path='/login' element={
              <LoginBox/>
            }/>

          </Routes>
      </HashRouter>
    </>

  );
}

export default App;
