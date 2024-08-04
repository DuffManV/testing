import {AddressSuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {useEffect, useState} from "react";
import getWeather from "../services/getWeather";
import Button from "./Button";
import getPosition from "../services/getPosition";
import YandexMap from "./YandexMap";
import Weather from "./Weather";


function CitySearch() {
    const [value, setValue] = useState();
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [savedCities, setSavedCities] = useState([]);
    const getLocationButtonName = 'Получить данные о погоде текущего местоположения';
    const getCityButtonName = 'Получить данные о погоде выбранного города';
    const saveCityButtonName = 'Сохранить данный город';
    const saveCity = () => {
        if (data.length !== null) {
            const coords = JSON.stringify({name: data?.name, lat: data?.coord?.lat, long: data?.coord?.lon});
            const cities = JSON.parse(localStorage.getItem('cities'));
            if (cities?.length > 0 && cities !== undefined) {
                localStorage.setItem('cities', JSON.parse({...cities, coords}))
            } else {
                localStorage.setItem('cities', coords)
            }
        }
    }
    useEffect(() => {
        getPosition(lat, setLat, long, setLong);
        setSavedCities([lat, long])
    }, []);
    const fetchData = async () => {
        await getWeather(lat, long, setData);
    }
    const handleClick = async () => {
        await getWeather(value.data.geo_lat, value.data.geo_lon, setData)
    };


    // const getSavedCities = () => {
    //     savedCities = localStorage.getItem('cities');
    //     console.log(savedCities)
    // }
    const getLocation = {name: getLocationButtonName, func: fetchData}
    const getCity = {name: getCityButtonName, func: handleClick}
    return (
        <div>
            <label htmlFor="city-search">Поиск города</label>
            <AddressSuggestions token={process.env.REACT_APP_CITIES_TOKEN} value={value} onChange={setValue}/>
            <Button button={getCity}></Button>
            {/*<button onClick={handleClick}>Изменить поле ввода</button>*/}
            <Button button={getLocation}></Button>
            <button onClick={saveCity}>{saveCityButtonName}</button>
            <Weather data={data}></Weather>
                <YandexMap props={data}></YandexMap>
            {savedCities.map = (item, key) => {
                return (
                    <select>
                        <option value={item} key={key} onChange={fetchData}>
                            {item.name}
                        </option>
                    </select>

                )
            }

            }


        </div>
    );
}

export default CitySearch;