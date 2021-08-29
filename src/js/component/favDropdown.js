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

	return (
		<>
			<select
				size="sm"
				as="select"
				id="selectFavs"
				defaultValue={favorite}
				onChange={event => {
					setFavorite(event.target.value);
					setselectedFavorites({
						...selectedFavorites,
						favorites: store.favorites.find(item => item.id == event.target.value)
					});
				}}>
				<button onClick={() => actions.deleteFavorites(fav)} type="button" className="close" aria-label="Close">
					<span aria-hidden="true">x</span>
				</button>
				<option selected value="0">
					Favourites
				</option>
				{/* <img className="trash-icon" /> */}
				{allFavorites}
			</select>
		</>
	);
};
export default FavDropdown;
