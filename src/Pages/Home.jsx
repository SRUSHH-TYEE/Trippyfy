import React from 'react'
import Homebgimg from '../components/Homebgimg';
import Navbar from '../components/Navbar';
import Registerbtn from '../components/Registerbtn';
import Footerh from '../components/Footerh';

function Home() {
  return (
    <div>
    <Homebgimg />
    <Navbar/>
    <Registerbtn />
    <Footerh />
    </div>
  )
}

export default Home