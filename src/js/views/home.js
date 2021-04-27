import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CharacterCard from "../component/container.js";
import PlanetCard from "../component/planets.js";

export const Home = () => (
	<div className="main-page">
		<h1 className="text mt-5-danger">
			{" "}
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
		<h1 className="planets">
			<strong>Planets</strong>
		</h1>
		<PlanetCard />
		<PlanetCard />
	</div>
);
