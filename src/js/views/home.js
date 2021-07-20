import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import CharacterCard from "../component/character";
import PlanetCard from "../component/planets.js";
import VehiclesCard from "../component/vehicles.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople();
	}, []);

	return (
		<div className="main-page">
			<h1 className="header-characters text-danger">
				<strong>Characters</strong>
			</h1>
			<p />
			<div className="flex-container">
				{store.people.map((person, index) => {
					return <CharacterCard key={index} title={person.name} />;
				})}

				<CharacterCard />
				<CharacterCard />
				<CharacterCard />
				<CharacterCard />
				<CharacterCard />
				<CharacterCard />
			</div>

			<p />
			<h1 className="header-planets text-danger">
				<strong>Planets</strong>
			</h1>
			<div className="flex-container">
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
				<PlanetCard />
			</div>

			<p />
			<h1 className="header-vehicles text-danger">
				<strong>Vehicles</strong>
			</h1>
			<div className="flex-container">
				<VehiclesCard />
				<VehiclesCard />
				<VehiclesCard />
				<VehiclesCard />
				<VehiclesCard />
				<VehiclesCard />
				<VehiclesCard />
				<VehiclesCard />
			</div>
		</div>
	);
};
