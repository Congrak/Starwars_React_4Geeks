import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { get_characters, get_planets } from "../services/swapi";


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
			<div className="nav">
				<div className="imgDiv">
					<img className="logo" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="logo" />
				</div>
				<div class="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{favorite.map((list , index) =>{
							list = [...favorite]
							console.log(list, 'list')
							return (
								<li key={index}>{list}</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div className="wrapper">
				{characters?.map((character) => {
					//console.log(character)
					return (
						<div className="card" key={character.uid}>
							<img src="https://via.placeholder.com/200" />
							<h6 className="title">{character.name}</h6>
							<div className="btn-div">
								<button className="btn">
									<Link to={'/character/' + character.uid}>Learn More</Link>
								</button>
								<button className="like" onClick={
									() => characters?.map(characterName => {
										characterName = [...favorite]
										if (!characterName.includes(character.name)) {
											characterName.push(character.name)
											setFavorite(characterName)
										}
									})}>like</button>
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
							<h6 className="title">{planet.name}</h6>
							<div className="btns-div">
								<button className="btn">
									<Link to={'/planet/' + planet.uid}>Learn More</Link>
								</button>
								<button className="like">like</button>
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