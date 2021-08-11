import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import WelcomePage from "./views/welcomepage";
import Characters from "./views/characters";
import Planets from "./views/planets";
import Species from "./views/species";
import Vehicles from "./views/vehicles";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={WelcomePage} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/characters/:theid" component={Characters} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/species" component={Species} />
						<Route exact path="/vehicles" component={Vehicles} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
