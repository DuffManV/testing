import {useEffect} from "react";

function GetPosition(lat, setLat, long, setLong) {

        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
}

export default GetPosition;