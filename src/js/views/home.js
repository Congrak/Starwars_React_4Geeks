import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { get_characters, get_planets } from "../services/swapi";

export const Home = () => {

	let [characters, setCharacters] = useState()

	useEffect(() => {
		async function set() {
			let charactersInfo = await get_characters()
			setCharacters(charactersInfo)
			//console.log(charactersInfo)
		}
		set()
	}, [])
	return (
		<div>
			{characters?.map((character) => {
				console.log(character)
				return (
					<div>
						<h1>{character.name}</h1>
						<Link to={'/character/'+character.uid}>learn more</Link>
					</div>
				)
			})}
		</div>
	)

	//Optional chaining is using "?." instead of "." to try to access something 
	//like "properties" above that sometimes wont exist
	//if (!info) {
	//return <h1>waiting for api call</h1>
	//}
	//return (
	//<h1>{info.properties.name</h1>
	//);
};