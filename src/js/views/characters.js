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
							src="https://th.bing.com/th/id/R.8d6ceed7c5cfcb4313bbc531b8cca18d?rik=U6N6EzsMRo3Gqg&pid=ImgRaw&r=0"
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
				<div className="divider bg-danger" />
				{store.peopleDetails ? (
					<div className="row d-flex m-3">
						<div className="col-2 text-danger">
							Name:
							{store.peopleDetails.name}
						</div>
						<div className="col-2 text-danger">
							Birth Year:
							{store.peopleDetails.birth_year}{" "}
						</div>
						<div className="col-2 text-danger">
							Gender:
							{store.peopleDetails.gender}{" "}
						</div>
						<div className="col-2 text-danger">
							Height:
							{store.peopleDetails.height}{" "}
						</div>
						<div className="col-2 text-danger">
							Skin Color:
							{store.peopleDetails.skin_color}{" "}
						</div>
						<div className="col-2 text-danger">
							Eye Color:
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
