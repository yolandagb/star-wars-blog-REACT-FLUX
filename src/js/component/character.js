import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store";
import "../../styles/container.scss";
import HeartButton from "./heartBtn.js";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const CharacterCard = props => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.getPeople();
	// }, []);
	return (
		<div className="card">
			<img
				className="card-img-fluid-top"
				src="https://th.bing.com/th/id/R1529e45fc2e573e16ce2b308426cd6b8?rik=VSwPAubPlgIBcg&pid=ImgRaw"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text" />
				<Link to="/demo">
					<a href="#" className="btn btn-primary">
						Learn More!
					</a>
				</Link>
				<HeartButton />
			</div>
		</div>
	);
};
export default CharacterCard;

CharacterCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
