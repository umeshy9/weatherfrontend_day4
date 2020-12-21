import React, {useState, useEffect} from "react";

function DelhiWeather(){
    const api_key = 'API_KEY';
    const [mainTemp, setMainTemp] = useState('');
    const [main, setMain] = useState('');
    const [iconId, setIconId] = useState('');

    useEffect (()=>{
        fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=ead7a379a75d78942109cee1b98f7c74'
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
        <p>Delhi</p>
        <p>{Date()} </p>
        <p>{mainTemp} Degree</p>
        <p>{main}</p>
        <img src = {"http://openweathermap.org/img/wn/" + iconId+ "@2x.png"}/>
        </div>
    )
}
export default DelhiWeather;