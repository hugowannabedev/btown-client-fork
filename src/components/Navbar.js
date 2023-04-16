// src/components/Navbar.js

import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const currentPage = useLocation();
  const isLoginPage = currentPage.pathname === "/login";
  const isSignupPage = currentPage.pathname === "/signup";

  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>{" "}
      </Link>

      <Link to="/spots"> 
            <button>Spots</button>{" "}
      </Link>

      <Link to="/collection">  
            <button>Collections</button>
      </Link>
      

      {isLoggedIn && (
        <>

          <button onClick={logOutUser}>Logout</button> 
          <br />
          <hr />
          <span>*Welcome {user && user.name}*</span>
          <Link to="/myspots"> 
            <button>My Spots</button>{" "}
          </Link>
        </>
      )}
      

      {!isLoggedIn && (
        <>
          { // using React's useLocation hook and a conditional statement,
            // so the SignUp and Login buttons are not displayed at the Login page
            !isLoginPage && !isSignupPage && (
              <> 
                <Link to="/signup">{" "}<button>Sign Up</button></Link>
                <Link to="/login">{" "}<button>Login</button></Link> 
              </>
          )} 
          
          
        </>
      )}
    </nav>
  );
}

export default Navbar;
