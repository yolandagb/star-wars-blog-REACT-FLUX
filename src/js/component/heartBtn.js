import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeartButton = props => {
	const { store, actions } = useContext(Context);

	const handleClick = event => {
		actions.addFavs();
	};
	return (
		<button onClick={handleClick} type="button" className="btn btn-warning">
			<i className="far fa-heart" />
		</button>
	);
};
export default HeartButton;

HeartButton.propTypes = {
	url: PropTypes.string,
	uid: PropTypes.string,
	name: PropTypes.string,
	next: PropTypes.string
};
