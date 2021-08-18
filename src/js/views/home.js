import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import GeneralCard from "../component/generalCard";
import HeartButton from "../component/heartBtn";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/home.scss";
const Home = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getVehicles();
		actions.getSpecies();
	}, []);

	return (
		<div className="main-page">
			<h1 className="header-characters text-warning">
				<strong>Characters</strong>
			</h1>
			<p />
			<div className="flex-container">
				{store.people.map((person, index) => {
					return (
						<GeneralCard key={index} title={person.name}>
							<p className="card-text">
								<strong>Gender:</strong> {person.gender}
							</p>
							<p className="card-text">
								<strong>Eye color:</strong> {person.eye_color}
							</p>
							<p className="card-text">
								<strong>Hair color:</strong> {person.hair_color}
							</p>
							<Link to={"/characters/" + (index + 1)} className="link_to">
								<button id="btnLearnmore">Learn more</button>
							</Link>{" "}
							<HeartButton name={person.name} />
						</GeneralCard>
					);
				})}
			</div>

			<p />
			<h1 className="header-planets text-warning">
				<strong>Planets</strong>
			</h1>
			<div className="flex-container">
				{store.planets.map((planet, index) => {
					return (
						<GeneralCard key={index} title={planet.name}>
							<p className="card-text">
								<strong>Population:</strong> {planet.population}
							</p>
							<p className="card-text">
								<strong>Terrain:</strong> {planet.terrain}
							</p>
							<p className="card-text">
								<strong>Climate: </strong>
								{planet.climate}
							</p>
							<Link to={"/planets/" + (index + 1)} className="link_to">
								<button id="btnLearnmore">Learn more</button>
							</Link>{" "}
							<HeartButton name={planet.name} />
						</GeneralCard>
					);
				})}
			</div>

			<p />
			<h1 className="header-vehicles text-warning">
				<strong>Species</strong>
			</h1>
			<div className="flex-container">
				{store.species.map((specie, index) => {
					return (
						<GeneralCard key={index} title={specie.name}>
							<p className="card-text">
								<strong>Population:</strong> {specie.classification}
							</p>
							<p className="card-text">
								<strong>Terrain:</strong> {specie.designation}
							</p>
							<p className="card-text">
								<strong>Language:</strong> {specie.language}
							</p>
							<Link to={"/species/" + (index + 1)} className="link_to">
								<button id="btnLearnmore">Learn more</button>
							</Link>{" "}
							<HeartButton name={specie.name} />
						</GeneralCard>
					);
				})}
			</div>
			<p />
			<h1 className="header-vehicles text-warning">
				<strong>Vehicles</strong>
			</h1>
			<div className="flex-container">
				{store.vehicles.map((vehicle, index) => {
					return (
						<GeneralCard key={index} title={vehicle.name}>
							<p className="card-text">
								<strong>Model:</strong>
								{vehicle.model}
							</p>
							<p className="card-text">
								<strong>Vehicle class:</strong> {vehicle.vehicle_class}
							</p>
							<p className="card-text">
								<strong>Crew:</strong>
								{vehicle.crew}
							</p>
							<Link to={"/vehicles/" + (index + 1)} className="link_to">
								<button id="btnLearnmore">Learn more</button>
							</Link>{" "}
							<HeartButton name={vehicle.name} />
						</GeneralCard>
					);
				})}
			</div>
		</div>
	);
};
export default Home;

Home.propTypes = {
	// resource: PropTypes.string,
	// uid: PropTypes.string,
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	uid: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	climate: PropTypes.string,
	classification: PropTypes.string,
	designation: PropTypes.string,
	language: PropTypes.string,
	model: PropTypes.string,
	vehicle_class: PropTypes.string,
	crew: PropTypes.string
};
