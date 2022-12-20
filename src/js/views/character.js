import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/character.css";
import { get_character } from "../services/swapi";
import { Nav } from "../componets/Nav";
import { Home } from "./home";

export const Character = () => {

	let [info, setInfo] = useState()
	let { characterId } = useParams()
	let [favorite, setFavorite] = useState([])

	useEffect(() => {
		async function set() {
			let characterInfo = await get_character(characterId)
			setInfo(characterInfo)
			//console.log(characterInfo)
		}
		set()
	}, [])
	return (
		<div className="characterWrapper">
			<Nav favorite={favorite} setFavorite={setFavorite} />
			<div className="back" type='button'>
				<Link to={'/'}>Home</Link>
				</div>
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
					<h6>Birthday Year:</h6>
					<p>{info?.properties?.birth_year}</p>
				</div>
				<div className="character">
					<h6>Gender:</h6>
					<p>{info?.properties?.gender}</p>
				</div>
				<div className="character">
					<h6>Eye Color:</h6>
					<p>{info?.properties?.eye_color}</p>
				</div>
				<div className="character">
					<h6>Height:</h6>
					<p>{info?.properties?.height}</p>
				</div>
				<div className="character">
					<h6>Skin Color:</h6>
					<p>{info?.properties?.skin_color}</p>
				</div>
				<div className="character">
					<h6>Hair Color:</h6>
					<p>{info?.properties?.hair_color}</p>
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
};
