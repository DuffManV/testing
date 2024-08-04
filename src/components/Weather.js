function Weather({data}) {

    return (
        <>
            <div>{data.name}</div>
            <div>{data.main?.temp} градусов по Цельсию</div>
            <div>{data.main?.temp_max} градусов по Цельсию</div>
            <div>Минимальная температура {data?.main?.temp_max} градусов по Цельсию</div>
            <div>Ощущение как {data?.main?.feels_like} градусов по Цельсию</div>
            <div>{data?.main?.humidity} % влажность</div>
            <div><img src={data?.weather?.icon}/></div>
        </>
    )
}

export  default  Weather;