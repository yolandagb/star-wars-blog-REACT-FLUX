import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.scss";

const Species = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.geSpeciesDetails(params.theid);
	}, []);

	return (
		<div>
			<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
				<div className="left-side d-inline-block">
					<img
						className="image-fluid"
						src="https://img.huffingtonpost.com/asset/5dfa51db250000e10598e8b5.jpeg?cache=EwV93gtjT3&ops=1778_1000"
					/>
				</div>
				<div className="right-side d-inline-block">
					<h1 className="text-center text-warning" id="name">
						{store.speciesDetails.name}
					</h1>
					<h6 className="description mx-5 text-center text-monospace" id="fakeText">
						{" "}
						Lucas ipsum dolor sit amet maul grievous mustafar wampa organa yavin organa fett antilles
						tatooine. Biggs amidala kenobi antilles moff yavin solo darth greedo. Wookiee wicket darth jinn
						c-3p0. Bespin jinn k-3po coruscant darth baba calamari ahsoka. Vader yoda kamino moff lobot
						r2-d2 organa skywalker baba. Gonk c-3po yavin moff moff skywalker. Jinn darth binks hutt
						coruscant dantooine moff binks. Moff darth darth dantooine tatooine moff skywalker. Skywalker
						calrissian organa moff. Mothma mace chewbacca maul skywalker anakin thrawn ahsoka antilles.
					</h6>
				</div>
			</div>
			<div className="divider bg" />
			{store.speciesDetails ? (
				<div className="row d-flex ml-5">
					<div className="col-2 text" id="characters">
						<strong>Name:</strong>
						<br />
						<br />
						{store.speciesDetails.name}{" "}
					</div>
					<div className="col-2 text" id="characters">
						<strong>Designation:</strong>
						<br />
						<br />
						{store.speciesDetails.designation}{" "}
					</div>
					<div className="col-2 text" id="characters">
						<strong>Average Lifespan:</strong>
						<br />
						<br />
						{store.speciesDetails.average_lifespan}{" "}
					</div>
					<div className="col-2 text" id="characters">
						<strong>Classification:</strong>
						<br />
						<br />
						{store.speciesDetails.classification}
					</div>
					<div className="col-2 text" id="characters">
						<strong>Eye Colors:</strong>
						<br />
						<br />
						{store.speciesDetails.eye_colors}
					</div>
					<div className="col-2 text" id="characters">
						<strong>Language:</strong>
						<br />
						<br /> {store.speciesDetails.language}{" "}
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};
export default Species;
