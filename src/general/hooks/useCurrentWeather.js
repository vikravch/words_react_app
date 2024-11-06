import {useEffect} from "react";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '202e6b9ce38004ad6e2dd5e7ffbab798'

export function useCurrentWeather(city, onSuccess) {
    useEffect(() => {
        fetch(
            baseUrl + "?q=" + city + "&appid=" + apiKey)
            .then((response)=>{
                if(response.ok){
                    return response.json();
                } else {
                    console.log(response.status)
                }
            // }).then(onSuccess);
            }).then((data) => {onSuccess(data)});
    },[]);
}