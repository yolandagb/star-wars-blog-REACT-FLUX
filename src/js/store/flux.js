const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			species: [],
			favorites: []
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
				const endpoint = "https://swapi.dev/api/planets/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => err);
			},
			getSpecies: data => {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/species/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ species: data.results }))
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
			// getFavourites() {
			// 	const store = getStore();
			// 	return [...store.favourites];
			// },

			addFavs: favorite => {
				//get the store
				let store = getStore(); //traes store disponible
				store.favorites.push(favorite);
				setStore({ favorites: store.favorites });
			},
			deleteFavs: favorite => {
				let store = getStore();
				let newStore = store.favorites.filter(element => element != favorite);
				setStore({
					favorites: newStore
				});
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
