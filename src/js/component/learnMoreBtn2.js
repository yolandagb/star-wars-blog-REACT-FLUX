import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LearnMoreBtn2 = props => {
	const { store, actions } = useContext(Context);

	return (
		<Link to="/vehicles">
			<a href="#" className="btn btn-primary">
				Learn More!
			</a>
		</Link>
	);
};
export default LearnMoreBtn2;
