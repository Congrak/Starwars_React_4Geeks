import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/demo.css";
import { get_character } from "../services/swapi";

export const Character = () => {

	let [info, setInfo] = useState()
	let { characterId } = useParams()

	useEffect(() => {
		async function set() {
			let characterInfo = await get_character(characterId)
			setInfo(characterInfo)
			console.log(characterInfo)
		}
		set()
	},[])
	return <h1>{info?.properties?.name}</h1>
};
