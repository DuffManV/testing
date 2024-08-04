async function getCityList (search, setSearchLine){
    fetch(`${process.env.REACT_APP_API_CITIES}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + process.env.REACT_APP_CITIES_TOKEN
            },
            body: JSON.stringify({"query": search})
        }
    )
        .then(res => res.json())
        .then(result => {
            console.log(result.suggestions)
            setSearchLine(result.suggestions);
        })
}

export default getCityList;