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
			<img src={pathImg} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text">
					<h5 className="card-title">{props.title}</h5>
					<h5 className="card-title">{props.children}</h5>
				</p>
				{/* <Link to={path} className="btn btn-outline-primary" id="button-info">
					Learn More!
				</Link> */}
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
};
