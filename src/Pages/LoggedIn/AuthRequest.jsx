import React from "react";
import HomebgLin from "../../components/LoggedIn/HomebgLin";
import ReqForAuth from "../../components/LoggedIn/ReqForAuth";
import NavbarLin from "../../components/LoggedIn/NavbarLin";
import ResponsiveDrawer from "../../components/LoggedIn/Drawer";

const AuthRequest = () => {
  return (
    <div>
      <HomebgLin />
      <NavbarLin className="fixed-top" />
      <div className="d-flex ">
        <ResponsiveDrawer />
        <div className="d-flex flex-column">
        
        <ReqForAuth empName={'User1'} docName={'User1_id'}/>
        <ReqForAuth empName={'User2'} docName={'User2_id'}/>        
        <ReqForAuth empName={'User3'} docName={'User3_id'}/>
        <ReqForAuth empName={'User4'} docName={'User4_id'}/>
                
        </div>
      </div>
    </div>
  );
};

export default AuthRequest;
