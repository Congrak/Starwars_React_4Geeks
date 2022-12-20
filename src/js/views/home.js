import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { get_characters, get_planets } from "../services/swapi";
import { Nav } from "../componets/Nav";


export const Home = () => {

	let [favorite, setFavorite] = useState([])
	let [characters, setCharacters] = useState()
	let [planets, setPlanets] = useState()

	useEffect(() => {
		async function set() {
			let charactersInfo = await get_characters()
			let planetsInfo = await get_planets()
			setCharacters(charactersInfo)
			setPlanets(planetsInfo)
			//console.log(charactersInfo)
		}
		set()
	}, [])
	console.log(favorite)
	return (
		<div className="body">
			<Nav favorite={favorite} setFavorite={setFavorite}/>
			<div className="wrapper">
				{characters?.map((character) => {
					//console.log(character)
					return (
						<div className="card" key={character.uid}>
							<img src="https://via.placeholder.com/200" />
							<div className="information">
								<h6 className="title">{character.name}</h6>
								<div className="btn-div">
									<button className="btn">
										<Link to={'/character/' + character.uid}>Learn More</Link>
									</button>
									<button className="like" onClick={
										() => {
											let characterName = [...favorite]
											if (!characterName.includes(character.name)) {
												characterName.push(character.name)
												setFavorite(characterName)
											}
										}}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
											<path className='heart' d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<div className="wrapper">
				{planets?.map((planet) => {
					//console.log(planet)
					return (
						<div className="card" key={planet.uid}>
							<img src="https://via.placeholder.com/200" />
							<div className="information">
								<h6 className="title">{planet.name}</h6>
								<div className="btns-div">
									<button className="btn">
										<Link to={'/planet/' + planet.uid}>Learn More</Link>
									</button>
									<button className="like" onClick={
										() => {
											let planetName = [...favorite]
											if (!planetName.includes(planet.name)) {
												planetName.push(planet.name)
												setFavorite(planetName)
											}
										}}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
											<path className='heart' d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					)
				})}
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