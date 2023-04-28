import './App.css';
import './CSSfiles/carousel.css';

import Registration from './Pages/Registration';
import Home from './Pages/Home';
import Login from './Pages/Login';

import {
  // BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import ResetPassword from './Pages/ResetPassword';
import HomeLin from './Pages/LoggedIn/HomeLin';
import ChatProvider from './Context/ChatProvider';
import ChatsPage from './Pages/LoggedIn/ChatsPage';

function App() {

  return (
    <>
      <ChatProvider>
        <HashRouter basename="/">
          <Routes>
            {/* ROUTE 1: For Home */}
            <Route exact path='/' element={<Home />} />

            {/* ROUTE 2: For Registration Form */}
            <Route exact path='/register' element={
              <Registration />
            } />

            {/* ROUTE 3: For Login Form */}
            <Route exact path='/login' element={
              <Login />
            } />

            {/* ROUTE 4: For Reset Password after user clicked on reset password link */}
            <Route exact path='/resetpassword' element={
              <ResetPassword />
            } />

            {/* ROUTE 5: For Home (LOGIN REQUIRED) */}
            <Route exact path='/homelin' element={
              <HomeLin />
            } />

            {/* ROUTE 6: For AboutUs (LOGIN NOT REQUIRED) */}
            <Route exact path='/about' element={
              <>
                About us page
              </>
            } />

            {/* ROUTE 7: For Contact Us (LOGIN NOT REQUIRED) */}
            <Route exact path='/contact' element={
              <>
                Contact Us Page
              </>
            } />

            {/* ROUTE 7: For Chat Page(LOGIN REQUIRED) */}
            <Route exact path='/mainChat' element={
              <ChatsPage/>
            } />

          </Routes>
        </HashRouter>
      </ChatProvider>
    </>

  );
}

export default App;
