import React from "react";
import "../../styles/welcomePage.scss";
import { Link } from "react-router-dom";

const WelcomePage = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, Young Padawan</h1>
			<p className="lead" />

			<p />
			<p className="lead">
				<Link to="/home">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						The force may be with you...
					</a>
				</Link>
			</p>
		</div>
	);
};
export default WelcomePage;
