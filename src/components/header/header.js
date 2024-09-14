import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img className="logo" src={Logo} alt="logo" />
            </div>
           <div className="col-sm-5">
           <div className='headerSearch d-flex align-items-center' >
        

     </div>
           </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
