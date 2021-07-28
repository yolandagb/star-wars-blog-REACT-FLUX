import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/container.scss";
import HeartButton from "./heartBtn.js";
import ReactDOM from "react-dom";

const GeneralCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img
				className="card-img-fluid-top"
				src="https://th.bing.com/th/id/R1529e45fc2e573e16ce2b308426cd6b8?rik=VSwPAubPlgIBcg&pid=ImgRaw"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text">
					<h5 className="card-title">{props.title}</h5>
					{/* <h5 className="card-title">
						Gender:
						{props.children}
					</h5> */}
				</p>
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
export default GeneralCard;

GeneralCard.propTypes = {
	title: PropTypes.string
	// name: PropTypes.string,
	// gender: PropTypes.string,
	// hair_color: PropTypes.string,
	// eye_color: PropTypes.string
};
