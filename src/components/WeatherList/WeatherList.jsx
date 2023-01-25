import React, {useState} from 'react';
import styles from './WeatherList.module.scss';
import WeatherItemCard from "../WeatherItemCard/WeatherItemCard";
import {getFormattedDate, getTempFromKelvinToCelsius, getForecastForWeek} from "../../helpers";

const WeatherList = ({dailyWeatherData}) => {
    const [activeCard, setActiveCard] = useState(0)
    const {daily} = dailyWeatherData;
    const forecastForWeek = getForecastForWeek(daily);
    console.log(daily)
    const getId = (id) => {
        setActiveCard(id)
    }

    return (
        <div className={styles.weather_list}>
            {forecastForWeek.map(dayWeather => {
                return <WeatherItemCard
                    getId={getId}
                    id={dayWeather.dt}
                    temp={getTempFromKelvinToCelsius(dayWeather.temp.day)}
                    day={getFormattedDate(dayWeather.dt)}
                    img={`https://openweathermap.org/img/wn/${dayWeather.weather[0].icon}.png`}
                    activeClass={activeCard === dayWeather.dt ? 'active_card' : ''}
                />
            })}
        </div>
    );
};

export default WeatherList;