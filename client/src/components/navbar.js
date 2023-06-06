import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// export const Navbar = () => {
//   const [cookies, setCookies] = useCookies(["access_token"]);
//   const navigate = useNavigate();

//   const logout = () => {
//     setCookies("access_token", "");
//     window.localStorage.clear();
//     navigate("/auth");
//   };
//   return (
//     <div className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/create-recipe">Create Recipe</Link>
//       <Link to="/saved-recipes">Saved Recipes</Link>
//       {!cookies.access_token ? (
//         <Link to="/login">Login/Register</Link>
//       ) : (
//         <button className="button-logout" onClick={logout}> Logout </button>
//       )}
//     </div>
//   );
// };




import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export const Navbar=()=> {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/login");
  };

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a><Link to="/">Home</Link></a>
				<a><Link to="/create-recipe">Create Recipe</Link></a>
				<a><Link to="/saved-recipes">Saved Recipes</Link></a>
				<a>{!cookies.access_token ? (
        <Link to="/login">Login</Link>
       ) : (
         <button className="button-logout" onClick={logout}> Logout </button>
       )}</a>
	   <a>{!cookies.access_token ? (
        <Link to="/signup">Signup</Link>
       ) : (
         " "
       )}</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}