import React from "react";
import "../../styles/welcomePage.scss";
import { Link } from "react-router-dom";

const WelcomePage = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, Young Padawan</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
				content or information.
			</p>

			<p>
				It uses utility className es for typography and spacing to space content out within the larger
				container.
			</p>
			<p className="lead">
				<Link to="/home">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</Link>
			</p>
		</div>
	);
};
export default WelcomePage;
