import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { Character } from "./views/character";
import { Planet } from "./views/planet";
import { get_planet, get_planets , get_characters ,get_character} from "./services/swapi";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

	return (
		<div>
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:characterId" element={<Character />} />
						<Route path="/planet/:planetId" element={<Planet />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
