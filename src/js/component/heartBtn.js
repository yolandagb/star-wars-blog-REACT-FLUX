import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeartButton = props => {
	const { store, actions } = useContext(Context);

	const handleClick = event => {
		actions.addFavourites();
	};
	//añadir a favorite via props ( en cards que es dondse se renderiza <Favorites />)
	return (
		<button onClick={handleClick} type="button" className="btn heart">
			<i className="far fa-heart" />
		</button>
	);
};
export default HeartButton;
GeneralCard.propTypes = {
	name: PropTypes.string
};
