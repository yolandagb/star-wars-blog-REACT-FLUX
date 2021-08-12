const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: {},
			planets: [],
			planetDetails: {},
			vehicles: [],
			vehiclesDetails: {},
			species: [],
			speciesDetails: {},
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
			getPeopleDetails: id => {
				const store = getStore();
				const endpoint = `https://swapi.dev/api/people/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ peopleDetails: data }))
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
			getPlanetDetails: id => {
				const store = getStore();
				const endpoint = `https://swapi.dev/api/planets/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ planetDetails: data }))
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
			geSpeciesDetails: id => {
				const store = getStore();
				const endpoint = `https://swapi.dev/api/species/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ speciesDetails: data }))
					.catch(err => err);
			},
			getVehicles: data => {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/vehicles/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => err);
			},
			getVehiclesDetails: id => {
				const store = getStore();
				const endpoint = `https://swapi.dev/api/vehicles/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ vehiclesDetails: data }))
					.catch(err => err);
			},
			setFavorites: fav => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, fav] });
			},
			deleteFavorites: fav => {
				const store = getStore();
				store.favorites.delete(fav);
				setStore({ favorites: [...store.favorites, fav] });
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
