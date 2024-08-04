async function getCity(input, setSearch) {
    await fetch(`${process.env.REACT_APP_API_CITIES}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + process.env.REACT_APP_CITIES_TOKEN
            },
            body: JSON.stringify({"query": input})
        }
    )
        .then(res => res.json())
        .then(res => setSearch(res))
        .then(result => console.log(result))
}

export default getCity;