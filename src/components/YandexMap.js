import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

function YandexMap(data) {
    console.log(data.props.coord);
    return (
        <div hidden={data?.props?.coord && data.props.coord.length === 0}>
            <YMaps query={{
                apikey: 'c80f02e2-d4cd-4bae-9322-4e85e302ef0f',
            }}>
                <div>
                    {/*<Map state={{center: [data?.props?.coord?.lat, data?.props?.coord?.long], zoom: 12}}>*/}
                    {/*    /!*<Placemark geometry={[data?.props?.coord?.lat, data?.props?.coord?.long]}/>*!/*/}
                    {/*</Map>*/}
                    <Map state={{center: [data?.props?.coord?.lat, data?.props?.coord?.long], zoom: 12}}>
                        <Placemark geometry={[data?.props?.coord?.lat, data?.props?.coord?.long]}/>
                    </Map>
                </div>
            </YMaps>
        </div>
    )
}

export default YandexMap
