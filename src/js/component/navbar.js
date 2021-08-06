import React from "react";
import { Link } from "react-router-dom";
import { FavDropdown } from "../component/favDropdown.js";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img
						src="https://maxcdn.icons8.com/Share/icon/ios7/Logos/star_wars1600.png"
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
