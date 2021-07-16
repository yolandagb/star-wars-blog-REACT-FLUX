import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import "../../styles/planets.scss";
import { Link } from "react-router-dom";
import HeartButton from "./heartBtn.js";
// import PropTypes from "proptypes";

const PlanetsCard = props => {
	return (
		<div className="card">
			<img
				className="card-img-fluid-top"
				src="https://i.pinimg.com/originals/4b/88/4e/4b884edea212ebc4fd2f9dd7b31aadb0.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					<h5 className="card-title">Population:</h5>
					<h5 className="card-title">Terrain:</h5>
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
export default PlanetsCard;

// PalnetsCard.propTypes = {
// 	title: PropTypes.string,
// 	population: PropTypes.string,
// 	terrain: PropTypes.string
// };
