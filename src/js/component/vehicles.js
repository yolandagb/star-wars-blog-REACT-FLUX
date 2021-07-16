import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import HeartButton from "./heartBtn.js";

//import "../../styles/container.scss";
//import PropTypes from "prop-types";

const VehiclesCard = props => {
	return (
		<div className="card">
			<img
				className="card-img-fluid-top"
				src="https://cdn.drivingline.com/media/12944/dl-sw_10-10.jpg"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					<h5 className="card-title">Model:</h5>
					<h5 className="card-title">Vehicle class:</h5>
					<h5 className="card-title">Pilots:</h5>
				</p>
				<Link to="/demo">
					<p className="card-text" />
					<a href="#" className="btn btn-primary">
						Learn More!
					</a>
				</Link>
				<HeartButton />
			</div>
		</div>
	);
};
export default VehiclesCard;

//En el boton de learn more tienes que hacer un Link, igual para el boton de corazón

// PalnetsCard.propTypes = {
// 	title: PropTypes.string,
// 	population: PropTypes.string,
// 	terrain: PropTypes.string
// };
