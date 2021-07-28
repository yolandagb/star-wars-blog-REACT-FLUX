import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/container.scss";
import ReactDOM from "react-dom";

export const FavDropdown = () => {
	const { store, actions } = useContext(Context);
	let favourite = [];
	// useEffect(() => {
	// 	actions.getCollections();
	// }, []);

	if (store.favourites != undefined) {
		favourites = store.favourites.map(index => {
			return {
				// label: category.name,
				// value: category.id
			};
		});
	}

	return (
		<div className="btn-group">
			<button
				type="button"
				className="btn btn-danger dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Action
			</button>
		</div>
	);
};

export default FavDropdown;
