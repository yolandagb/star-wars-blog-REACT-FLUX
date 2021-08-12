import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/container.scss";
import HeartButton from "./heartBtn.js";
import ReactDOM from "react-dom";

const GeneralCard = props => {
	const { store, actions } = useContext(Context);
	// let path = "/" + props.resource + "/" + props.id;
	let imgRandom = Math.floor(Math.random() * 1000 + 1);
	let pathImg =
		"https://i0.wp.com/www.cinemundo.net.br/wp-content/uploads/2020/01/LUKE.jpg?fit=1280%2C960&ssl=1" + imgRandom;

	return (
		<div className="card">
			<img src={pathImg} className="card-img-fluid" alt="..." />
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text">
					<h3 className="card-name">{props.title}</h3>
					<h5 className="card-title">{props.children}</h5>
				</p>
			</div>
		</div>
	);
};
export default GeneralCard;

GeneralCard.propTypes = {
	title: PropTypes.string,
	children: PropTypes.string
};
