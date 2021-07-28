const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favourites: new Set([])
		},
		actions: {
			getPeople: data => {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/people/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => err);
			},
			getPlanets: data => {
				const store = getStore();
				const endpoint = "https://www.swapi.tech/api/planets/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => err);
			},
			getVehicles: data => {
				const store = getStore();
				const endpoint = "https://www.swapi.tech/api/vehicles/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => err);
			},
			getFavourites() {
				const store = getStore();
				return [...store.favorites];
			},

			addFavourites(favourite_name) {
				const store = getStore();
				store.favourites.add(favourite_name);
				setStore({ favourites: store.favourites });
			},

			deleteFavourites(favourite_name) {
				const store = getStore();
				store.favorites.delete(favorite_name);
				setStore({ favorites: store.favorites });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
