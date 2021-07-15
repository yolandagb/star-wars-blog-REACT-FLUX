import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import HeartButton from "./heartBtn.js";

//import "../../styles/container.scss";
//import PropTypes from "prop-types";

const VehiclesCard = () => {
	return (
		<div className="card">
			<img
				className="card-img-fluid-top"
				src="https://cdn.drivingline.com/media/12944/dl-sw_10-10.jpg"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
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
