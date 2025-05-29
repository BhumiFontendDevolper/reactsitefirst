// import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
    const [color,setcolor]=useState("black");
    
  
  const handlelikedislike=()=>{
    
    setcolor(color==="black"?"red":"black");
  
  }
    return (
      <nav>
        <div>
           <h2>.ESTORE.</h2>
        </div>
        <div>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink>
          <NavLink to="/product" className={({ isActive }) => isActive ? "active" : ""}>PRODUCT</NavLink>
          <NavLink to="/Shopping" className={({ isActive }) => isActive ? "active" : ""}>SHOPPING</NavLink>
          <NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""}>CATEGORIES</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>CONTACT</NavLink>
        </div>
        <div className="menu_items">
          <div className="input_search">
            <input type="search" name="search" id="search" placeholder="Search"/>
            <i className="ri-search-line" id="search"></i>
          </div>
          <i className="ri-heart-fill" onClick={handlelikedislike} style={{color:color}}></i>
          <div><i className="ri-shopping-cart-2-line"></i></div>
          <button className="btn button" >
            <span>Sign In</span>
          </button>
        </div>
      </nav>
    );
};

export default Navbar;



