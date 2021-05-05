import React from "react";
import ReactDOM from "react-dom";
//import "../../styles/container.scss";
//import PropTypes from "prop-types";

const VehiclesCard = () => {
	return (
		<div className="card">
			<img className="card-img-top" src="https://cdn.drivingline.com/media/12944/dl-sw_10-10.jpg" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text" />
				<a href="#" className="btn btn-primary">
					Learn More!
				</a>
			</div>
		</div>
	);
};
export default VehiclesCard;
