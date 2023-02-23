import './App.css';
import Footerh from './components/Footerh';
import Homebgimg from './components/Homebgimg';
import Navbar from './components/Navbar';
import Registerbtn from './components/Registerbtn';
import {
  // BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let loggedIn = false
  return (
    <>
      <HashRouter basename="/">     
          <Routes>
            {/*ROUTE 1: For Home */}
            <Route exact path='/' element={<>
              <Homebgimg loggedIn={loggedIn} />
              <Navbar />
              <Registerbtn />
              <Footerh />
            </>} />

          </Routes>
      </HashRouter>
    </>

  );
}

export default App;
