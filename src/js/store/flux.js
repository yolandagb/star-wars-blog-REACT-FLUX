const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
		},
		actions: {
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
			},
			getPeople() {
				const store = getStore();
				if (store.people.length === 0) {
					const endpoint = "https://swapi.dev/api/people/";
					const config = {
						method: "GET"
					};
					fetch(endpoint, config)
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ people: json.results });
						});
				}
			}
		}
	};
};

export default getState;
