import React from 'react'
import NavbarLin from '../../components/LoggedIn/NavbarLin'
import HomebgLin from '../../components/LoggedIn/HomebgLin'
import ResponsiveDrawer from '../../components/LoggedIn/Drawer'
import AvailStatus from '../../components/LoggedIn/AvailStatus'
import CarouslUnderAvail from '../../components/LoggedIn/CarouslUnderAvail'
import Suggestions from '../../components/LoggedIn/Suggestions'

function HomeLin() {
  return (
    <div>
      <HomebgLin />
      <NavbarLin className="fixed-top" />
      <div className="d-flex flex-md-row flex-sm-column">
        <ResponsiveDrawer />
        <div className="d-flex flex-column justify-content-center align-items-center" style={{width:"60%"}}>
          <AvailStatus />
          <CarouslUnderAvail />
        </div>
          <Suggestions/>
      </div>
    </div>
  )
}

export default HomeLin