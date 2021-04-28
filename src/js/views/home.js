import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CharacterCard from "../component/container.js";
import PlanetCard from "../component/planets.js";
import VehiclesCard from "../component/vehicles.js";

export const Home = () => (
	<div className="main-page">
		<h1 className="header-characters">
			<strong>Characters</strong>
		</h1>
		<p />
		<div className="flex-container">
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
		</div>

		<p />
		<h1 className="header-planets">
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
		<h1 className="header-vehicles">
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
