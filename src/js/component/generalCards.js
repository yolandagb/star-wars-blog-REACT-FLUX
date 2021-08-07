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
	let pathImg = "https://picsum.photos/400/200?random=" + imgRandom;

	return (
		<div className="card">
			{/* <img
				className="card-img-fluid-top"
				src="https://th.bing.com/th/id/R1529e45fc2e573e16ce2b308426cd6b8?rik=VSwPAubPlgIBcg&pid=ImgRaw"
				alt="..."
			/> */}
			<img src={pathImg} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text">
					<h5 className="card-title">{props.title}</h5>
					<h5 className="card-title">{props.children}</h5>
				</p>
				<Link to="/characters">
					<a href="#" className="btn btn-primary">
						Learn More!
					</a>
				</Link>
				<HeartButton />
			</div>
		</div>
	);
};
export default GeneralCard;

GeneralCard.propTypes = {
	title: PropTypes.string,
	children: PropTypes.string
	// name: PropTypes.string,
	// gender: PropTypes.string,
	// hair_color: PropTypes.string,
	// eye_color: PropTypes.string
};
