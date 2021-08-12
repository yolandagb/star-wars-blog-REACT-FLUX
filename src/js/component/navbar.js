import React from "react";
import { Link } from "react-router-dom";
import FavDropdown from "../component/favDropdown.js";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar bg mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/1200px-Star_Wars_Yellow_Logo.svg.png"
						className="starwars-logo"
					/>
				</span>
			</Link>
			<div className="ml-auto" />
			<FavDropdown />
		</nav>
	);
};

//Cambiar el Link to demo cuando tenga los views y las API
