import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/detailPages.scss";

const Characters = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPeopleDetails(params.theid);
	}, []);

	return (
		<>
			<div>
				<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
					<div className="left-side d-inline-block">
						<img
							className="image-fluid"
							src="https://www.pcworld.es/cmsdata/features/3789766/star_wars_thumb900_1-1.jpg"
						/>{" "}
					</div>
					<div className="right-side d-inline-block">
						<h1 className="text-center warning" id="name">
							{store.peopleDetails.name}
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
				<div className="divider bg-red" />
				{store.peopleDetails ? (
					<div className="row d-flex m-3">
						<div className="col-2 text-warning" id="characters">
							<strong>Name:</strong>
							<br />
							<br />
							{store.peopleDetails.name}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong>Birth Year:</strong>
							<br />
							<br />
							{store.peopleDetails.birth_year}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong>Gender:</strong>
							<br />
							<br />
							{store.peopleDetails.gender}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong>Height:</strong>
							<br />
							<br />
							{store.peopleDetails.height}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong>Skin Color:</strong>
							<br />
							<br />
							{store.peopleDetails.skin_color}{" "}
						</div>
						<div className="col-2 text-warning" id="characters">
							<strong>Eye Color:</strong>
							<br />
							<br />
							{store.peopleDetails.eye_color}{" "}
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};
export default Characters;

// Characters.propTypes = {
// 	name: PropTypes.string,
// 	gender: PropTypes.string,
// 	hair_color: PropTypes.string,
// 	eye_color: PropTypes.string,
// 	birth_year: PropTypes.string,
// 	height: PropTypes.string,
// 	skin_color: PropTypes.string
// };
