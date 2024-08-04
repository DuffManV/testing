import './App.css';
import {useEffect, useState} from "react";
import getPosition from "./services/getPosition";
import getWeather from "./services/getWeather";
import Button from "./components/Button";
import CitySearch from "./components/CitySearch";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                   <CitySearch></CitySearch>
                </div>
            </header>
        </div>
    );
}

export default App;
