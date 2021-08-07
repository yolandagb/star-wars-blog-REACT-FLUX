import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavDropdown = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dropdown">
			<button
				className="btn btn-primary dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				<i className="fas fa-heart" />
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{/* {store.favourites.map((fav, index) => {
					return (
						<a className="dropdown-item" key={index} href="#">
							{fav}
							<button
								onClick={() => actions.deleteFavourites(fav)}
								type="button"
								className="close"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</a>
					);
				})} */}
			</div>
		</div>
	);
};
export default FavDropdown;
