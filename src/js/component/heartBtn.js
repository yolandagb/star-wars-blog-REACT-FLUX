import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeartButton = props => {
	const { store, actions } = useContext(Context);

	return (
		<button
			type="button"
			className="btn btn-outline-danger float-right"
			onClick={() => actions.setFavorites(item.fav)}>
			<i className="far fa-heart" />
		</button>
		// 	<Link>
		// 	<button
		// 		className="btn btn-outline-danger"
		// 		onClick={() => actions.setMyFavourites(person.name)}>
		// 		<i className="far fa-heart" />
		// 	</button>
		// </Link>
	);
};
export default HeartButton;

HeartButton.propTypes = {
	url: PropTypes.string,
	uid: PropTypes.string,
	name: PropTypes.string,
	next: PropTypes.string,
	obj: PropTypes.object
};
