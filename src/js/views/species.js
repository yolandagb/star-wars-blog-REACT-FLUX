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
					<img src="https://picsum.photos/600/300?random=2" />
				</div>
				<div className="right-side d-inline-block">
					<h1 className="text-center text-warning" id="name">
						{store.speciesDetails.name}
					</h1>
					<h6 className="description mx-5 text-center text-monospace">
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
			<div className="divider bg-danger" />
			{store.speciesDetails ? (
				<div className="row d-flex ml-5">
					<div className="col-2 text-danger">
						Name:
						{store.speciesDetails.name}{" "}
					</div>
					<div className="col-2 text-danger">Average Height: </div>
					<div className="col-2 text-danger">Average Lifespan: </div>
					<div className="col-2 text-danger">Classification: </div>
					<div className="col-2 text-danger">Eye Colors: </div>
					<div className="col-2 text-danger">Language: </div>
				</div>
			) : (
				""
			)}
		</div>
	);
};
export default Species;
