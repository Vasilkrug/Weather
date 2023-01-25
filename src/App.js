import React, {useState} from "react";
import Header from "./components/Header/Header";
import styles from './App.module.scss';
import WeatherList from "./components/WeatherList/WeatherList";

function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    const [dailyWeatherData, setDailyWeatherData] = useState(null);
    const [hasError, setHasError] = useState(false);

    const getDataFor7days = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=493a1b27fde65db7b199c692d336ccf2`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setDailyWeatherData(data)
            setHasError(false)
        } catch (error) {
            setHasError(true)
            setDailyWeatherData(null)
        }
    };

    const getWeather = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=493a1b27fde65db7b199c692d336ccf2`;
            const res = await fetch(url);
            const data = await res.json();
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            getDataFor7days(lat, lon)
            setHasError(false)
        } catch (e) {
            setHasError(true);
            setDailyWeatherData(null)
        }
    }

    const darkThemeToggle = () => {
        setDarkTheme(!darkTheme)
    }
    console.log(hasError)
    return (
        <div className={styles.App}>
            <div className={styles.weather_app_container}>
                <Header getWeather={getWeather} darkTheme={darkTheme} darkThemeToggle={darkThemeToggle}/>
                <main>
                    <div className="weather_content">
                        {dailyWeatherData && !hasError ?
                            <WeatherList dailyWeatherData={dailyWeatherData}/>
                            :
                            <h1 className={'text-center'}>{hasError ? 'City not found' : 'Search city'}</h1>}
                        <div className="weather_global_map"></div>
                    </div>
                    <aside className={'weather_info_menu'}>
                        <div className="weather_rain_info"></div>
                        <div className="weather_search_history"></div>
                    </aside>
                </main>
            </div>
        </div>
    );
}

export default App;
