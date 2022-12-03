async function get_planets() {
    //fetch("https://www.swapi.tech/api/planets/")
     //   .then((res) => res.json())
       // .then((data) => console.log(data))
      //  .catch((err) => console.error(err));
      const res = await fetch(`https://www.swapi.tech/api/planets`)
    let data = await res.json()
    return data.results
}


async function get_planet(id) {
    const res = await fetch(`https://www.swapi.tech/api/planets/${id}`)
    let data = await res.json()
    return data.result
}

async function get_characters() {
    const res = await fetch('https://www.swapi.tech/api/people')
    let data = await res.json()
    return data.results
}

async function get_character(id) {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}/`)
    let data = await res.json()
    return data.result
}

export { get_planet, get_planets, get_characters , get_character}