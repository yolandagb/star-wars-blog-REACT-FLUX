import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HeartButton from "./heartBtn.js";
import "../../styles/generalCard.scss";
import ReactDOM from "react-dom";

const GeneralCard = props => {
	const { store, actions } = useContext(Context);
	let imgRandom = Math.floor(Math.random() * 1000 + 1);
	let pathImg = "https://www.pcworld.es/cmsdata/features/3789766/star_wars_thumb900_1-1.jpg" + imgRandom;

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
