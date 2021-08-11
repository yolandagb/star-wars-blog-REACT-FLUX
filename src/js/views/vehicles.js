import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Vehicles = props => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
				<div className="left-side d-inline-block">
					<img src="https://th.bing.com/th/id/OIP.J4Fv4OUAf0EDqp090m1KigHaEK?pid=ImgDet&rs=1" />
				</div>
				<div className="right-side d-inline-block">
					<h1 className="text-center text-monospace" />
					<h6 className="description mx-5 text-center text-monospace">
						{" "}
						Lucas ipsum dolor sit amet maul grievous mustafar wampa organa yavin organa fett antilles
						tatooine. Biggs amidala kenobi antilles moff yavin solo darth greedo. Wookiee wicket darth jinn
						c-3p0. Bespin jinn k-3po coruscant darth baba calamari ahsoka. Vader yoda kamino moff lobot
						r2-d2 organa skywalker baba. Gonk c-3po yavin moff moff skywalker. Jinn darth binks hutt
						coruscant dantooine moff binks. Moff darth darth dantooine tatooine moff skywalker. Skywalker
						calrissian organa moff. Mothma mace chewbacca maul skywalker anakin thrawn ahsoka antilles.
					</h6>
				</div>
			</div>
			<div className="divider bg-danger" />
			<div className="row d-flex ml-5">
				<div className="col-2 text-danger">Name: </div>
				<div className="col-2 text-danger">Cargo capacity: </div>
				<div className="col-2 text-danger">Consumables: </div>
				<div className="col-2 text-danger">Crew: </div>
				<div className="col-2 text-danger">Max atmosphering speed: </div>
				<div className="col-2 text-danger">Model: </div>
			</div>
		</div>
	);
};
export default Vehicles;
