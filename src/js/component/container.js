import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import "../../styles/container.scss";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

const CharacterCard = () => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://th.bing.com/th/id/R1529e45fc2e573e16ce2b308426cd6b8?rik=VSwPAubPlgIBcg&pid=ImgRaw"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">INFORMACION DE LA API</p>
				<Link to="/demo">
					<a href="#" className="btn btn-primary">
						Learn More!
					</a>
				</Link>
			</div>
		</div>
	);
};
export default CharacterCard;

// CharacterCard.PropTypes = {
// 	title: PropTypes.string,
// 	text: PropTypes.string,
// 	botton: PropTypes.string
// };
