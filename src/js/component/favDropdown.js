import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavDropdown = props => {
	const { store, actions } = useContext(Context);
	const [favorite, setFavorite] = useState({});
	const [selectedFavorites, setselectedFavorites] = useState({
		favorites: {}
	});
	const allFavorites = store.favorites.map((item, index) => {
		return (
			<option key={index} value={index}>
				{item}
			</option>
		);
	});

	// useEffect(() => {
	// 	actions.getCollections();
	// }, []);

	return (
		<>
			<select
				size="sm"
				as="select"
				className_="select-favs"
				defaultValue={favorite}
				onChange={event => {
					setFavorite(event.target.value);
					setselectedFavorites({
						...selectedFavorites,
						favorites: store.favorites.find(item => item.id == event.target.value)
					});
				}}>
				<option selected value="0">
					Favorites
				</option>
				{allFavorites}
			</select>
		</>
	);
	// <div className="dropdown">
	// 	<button
	// 		className="btn btn-primary dropdown-toggle"
	// 		type="button"
	// 		id="dropdownMenuButton"
	// 		data-toggle="dropdown"
	// 		aria-haspopup="true"
	// 		aria-expanded="false">
	// 		<i className="fas fa-heart" />
	// 	</button>
	// 	<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
	// 		{/* {store.favourites.map((fav, index) => {
	// 			return (
	// 				<a className="dropdown-item" key={index} href="#">
	// 					{fav}
	// 					<button
	// 						onClick={() => actions.deleteFavourites(fav)}
	// 						type="button"
	// 						className="close"
	// 						aria-label="Close">
	// 						<span aria-hidden="true">&times;</span>
	// 					</button>
	// 				</a>
	// 			);
	// 		})} */}
	// 	</div>
	// </div>
};
export default FavDropdown;
