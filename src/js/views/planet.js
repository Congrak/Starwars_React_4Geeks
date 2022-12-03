import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/demo.css";
import { get_planet } from "../services/swapi";

export const Planet = () => {

	let [info, setInfo] = useState()
	let { planetId } = useParams()

	useEffect(() => {
		async function set() {
			let planetInfo = await get_planet(planetId)
			setInfo(planetInfo)
			console.log(planetInfo)
		}
		set()
	}, [])
	return <h1>{info?.properties?.name}</h1>

	//Optional chaining is using "?." instead of "." to try to access something 
	//like "properties" above that sometimes wont exist
	//if (!info) {
	//return <h1>waiting for api call</h1>
	//}
	//return (
	//<h1>{info.properties.name</h1>
	//);
};