import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import GeneralCard from "../component/generalCards";

export const Home = () => {
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
					return <GeneralCard key={index} title={person.name} />;
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
