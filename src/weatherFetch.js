import React, {useState, useEffect} from "react";

function WeatherFetch(props){
    const api_key = process.env.REACT_APP_API_KEY;
    const city = props.city;
    const [mainTemp, setMainTemp] = useState('');
    const [main, setMain] = useState('');
    const [iconId, setIconId] = useState('');
    useEffect (()=>{
        fetch(
            'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+api_key
        ).then ( (res) => res.json())
        .then((data) => {
            console.log(data);
            setMainTemp(data.main.temp);
            setMain(data.weather[0].main);
            setIconId(data.weather[0].icon);
        })
    }, [])

    return (
        <div>
        <p>{props.city}</p>
        <p>{Date()} </p>
        <p>{mainTemp} Degree</p>
        <p>{main}</p>
        <img src = {"http://openweathermap.org/img/wn/" + iconId+ "@2x.png"}/>
        </div>
    )
}

export default WeatherFetch;