// import React, { Component } from 'react';


const Navbar = ({ totalCounter }) => {
  console.log('Navbar - Rendered');
  return (
    
     <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
          <a className="navbar-brand" href=" # ">
            Navbar <span className="badge badge-pill badge-primary">{ totalCounter}</span>
          </a>
    </div>
 </nav>
  );
}
 
export default Navbar;

