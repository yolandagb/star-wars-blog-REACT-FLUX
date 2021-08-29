import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailPages.scss";

const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanetDetails(params.theid);
	}, []);

	return (
		<>
			<div>
				<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
					<div className="left-side d-inline-block">
						<img
							className="image-fluid"
							src="https://static.wikia.nocookie.net/lego-dimensions-customs/images/4/46/Mustafar.png/revision/latest?cb=20200528193716"
						/>
					</div>
					<div className="right-side d-inline-block">
						<h1 className="text-center text-warning" id="name">
							{store.planetDetails.name}
						</h1>
						<h6 className="description mx-5 text-center text-monospace" id="fakeText">
							{" "}
							Lucas ipsum dolor sit amet maul grievous mustafar wampa organa yavin organa fett antilles
							tatooine. Biggs amidala kenobi antilles moff yavin solo darth greedo. Wookiee wicket darth
							jinn c-3p0. Bespin jinn k-3po coruscant darth baba calamari ahsoka. Vader yoda kamino moff
							lobot r2-d2 organa skywalker baba. Gonk c-3po yavin moff moff skywalker. Jinn darth binks
							hutt coruscant dantooine moff binks. Moff darth darth dantooine tatooine moff skywalker.
							Skywalker calrissian organa moff. Mothma mace chewbacca maul skywalker anakin thrawn ahsoka
							antilles.
						</h6>
					</div>
				</div>
				<div className="divider bg-warning" />
				<br />
				{store.planetDetails ? (
					<div className="row d-flex ml-5">
						<div className="col-2 text" id="characters">
							<strong>Name:</strong>
							<br />
							<br />
							{store.planetDetails.name}{" "}
						</div>
						<div className="col-2 text" id="characters">
							<strong>Climate:</strong>
							<br />
							<br />
							{store.planetDetails.climate}{" "}
						</div>
						<div className="col-2 text" id="characters">
							<strong>Population:</strong>
							<br />
							<br />
							{store.planetDetails.population}{" "}
						</div>
						<div className="col-2 text" id="characters">
							<strong>Orbital Period:</strong>
							<br />
							<br />
							{store.planetDetails.orbital_period}
						</div>
						<div className="col-2 text" id="characters">
							<strong>Rotation Period:</strong>
							<br />
							<br />
							{store.planetDetails.rotation_period}
						</div>
						<div className="col-2 text" id="characters">
							<strong>Diameter:</strong>
							<br />
							<br />
							{store.planetDetails.diameter}
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};
export default Planets;
