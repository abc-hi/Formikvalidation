import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
    return (
        <div className="navbar-container">
        <div>
        
        <h1 style={{ fontFamily: 'Harrington', color:'white',}}>Welcome to Revs's Library</h1>
        <nav className="navbar" style={{ fontFamily: "Arial", color: "blue", fontSize: "17px", fontWeight: "bold"}}>
         
                <Link to='/'>Home</Link>
                <Link to='/product'>UserServices</Link> {/* Corrected the path */}
            </nav>
       
        </div>
        </div>
    );
};<br />

export default Navbar;