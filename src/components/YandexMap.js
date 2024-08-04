import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

function YandexMap({lat, long}) {
    return (
        <YMaps query={{
            apikey: 'c80f02e2-d4cd-4bae-9322-4e85e302ef0f',
        }}>
            <div>
                <Map state={{ center: [lat, long], zoom: 12 }}>
                    <Placemark geometry={[lat, long]} />
                </Map>
            </div>
        </YMaps>
    )
}

export default YandexMap
