import './App.css';
import './CSSfiles/carousel.css';

import Registration from './Pages/Registration';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useState } from 'react';

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
import SnackbarMsgs from './components/snackbar';
import { useContext } from 'react';
import GlobalContext from './Context/GlobalContex';
import GlobalProvider from './Context/GlobalState';
import AddLocation from './Pages/LoggedIn/AddLocation';

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (type, msg) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <>
    <GlobalProvider showAlert={showAlert}>
      {/* <ChatProvider> */}
        <HashRouter basename="/">

          <SnackbarMsgs alert={alert} />
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

            {/* ROUTE 8: For Testing location entered(LOGIN REQUIRED) */}
            <Route exact path='/addLoc' element={
              <AddLocation/>
            } />

          </Routes>
        </HashRouter>
      {/* </ChatProvider> */}
      </GlobalProvider>
    </>

  );
}

export default App;
