import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import GeneralCard from "../component/generalCard";
import LearnMoreBtn1 from "../component/learnMoreBtn1";
import LearnMoreBtn2 from "../component/learnMoreBtn2";

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
			<h1 className="header-characters text-danger">
				<strong>Characters</strong>
			</h1>
			<p />
			<div className="flex-container">
				{store.people.map((person, index) => {
					return (
						<GeneralCard key={index} title={person.name}>
							<p className="card-text">Gender: {person.gender}</p>
							<p className="card-text">Eye color: {person.eye_color}</p>
							<p className="card-text"> Hair color: {person.hair_color}</p>
							<LearnMoreBtn1 />
						</GeneralCard>
					);
				})}
			</div>

			<p />
			<h1 className="header-planets text-danger">
				<strong>Planets</strong>
			</h1>
			<div className="flex-container">
				{store.planets.map((planet, index) => {
					return (
						<GeneralCard key={index} title={planet.name}>
							<p className="card-text">Population: {planet.population}</p>
							<p className="card-text">Terrain: {planet.terrain}</p>
							<p className="card-text">Climate: {planet.climate}</p>
							<LearnMoreBtn2 />
						</GeneralCard>
					);
				})}
			</div>

			<p />
			<h1 className="header-vehicles text-danger">
				<strong>Species</strong>
			</h1>
			<div className="flex-container">
				{store.species.map((specie, index) => {
					return (
						<GeneralCard key={index} title={specie.name}>
							<p className="card-text">Population: {specie.classification}</p>
							<p className="card-text">Terrain: {specie.designation}</p>
							<p className="card-text">Language: {specie.language}</p>
						</GeneralCard>
					);
				})}
			</div>
			<p />
			<h1 className="header-vehicles text-danger">
				<strong>Vehicles</strong>
			</h1>
			<div className="flex-container">
				{store.vehicles.map((vehicle, index) => {
					return (
						<GeneralCard key={index} title={vehicle.name}>
							{/* <p className="card-text">Model: {vehicle.model}</p>
							<p className="card-text">Vehicle class: {vehicle.vehicle_class}</p>
							<p className="card-text">Pilot: {vehicle.pilot}</p> */}
						</GeneralCard>
					);
				})}
			</div>
		</div>
	);
};
export default Home;

Home.propTypes = {
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
	pilots: PropTypes.array
};
