import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import "../../styles/planets.scss";
import { Link } from "react-router-dom";
//import PropTypes from "proptypes";

const PlanetsCard = () => {
	return (
		<div className="card">
			<img
				className="card-img-fluid-top"
				src="https://i.pinimg.com/originals/4b/88/4e/4b884edea212ebc4fd2f9dd7b31aadb0.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text" />
				<Link to="/demo">
					<a href="#" className="btn btn-primary">
						Learn More!
					</a>
				</Link>
			</div>
		</div>
	);
};
export default PlanetsCard;

//PlanetsCard.PropTypes{}
