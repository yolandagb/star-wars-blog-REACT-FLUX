import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import GeneralCard from "../component/generalCards";

const Home = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getVehicles();
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
					return <GeneralCard key={index} title={planet.name} />;
				})}
			</div>

			<p />
			<h1 className="header-vehicles text-danger">
				<strong>Vehicles</strong>
			</h1>
			<div className="flex-container">
				{store.vehicles.map((vehicle, index) => {
					return <GeneralCard key={index} title={vehicle.name} />;
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
	eye_color: PropTypes.string
};
