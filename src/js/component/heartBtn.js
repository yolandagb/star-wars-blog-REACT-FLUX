import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeartButton = props => {
	// const {store, actions} = useContext(Context);
	// const handleClick = (event) => {
	//      actions.addFavorites(props.name)
	//  }
	return (
		<button type="button" className="btn btn-outline-warning">
			<i className="corazon far fa-heart" />
		</button>
	);
};
export default HeartButton;
