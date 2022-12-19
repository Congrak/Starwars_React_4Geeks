import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/character.css";
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
	return (
		<div className="characterWrapper">
			<div className="head">
				<img src='https://via.placeholder.com/600x400' />
				<div className="description">
					<h1>{info?.properties?.name}</h1>
					<p>{info?.description}</p>
				</div>
			</div>
			<div className="footer">
				<div className="character">
					<h6>Name:</h6>
					<p>{info?.properties?.name}</p>
				</div>
				<div className="character">
					<h6>Population:</h6>
					<p>{info?.properties?.population}</p>
				</div>
				<div className="character">
					<h6>Climate:</h6>
					<p>{info?.properties?.climate}</p>
				</div>
				<div className="character">
					<h6>Terrain:</h6>
					<p>{info?.properties?.terrain}</p>
				</div>
				<div className="character">
					<h6>Diameter:</h6>
					<p>{info?.properties?.diameter}</p>
				</div>
				<div className="character">
					<h6>Rotation Period:</h6>
					<p>{info?.properties?.rotation_period}</p>
				</div>
				<div className="character">
					<h6>Oribital Period:</h6>
					<p>{info?.properties?.orbital_period}</p>
				</div>
			</div>
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
	//export default -> import <any name> from
	//export { name } -> import { name} from
	//(same name for export, any name for default. Export has {}, default does not)
};