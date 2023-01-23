import React, {useState} from "react";
import Header from "./components/Header/Header";
import styles from './App.module.scss';

function App() {
    const [darkTheme, setdarkTheme] = useState(true);

    const darkThemeToggle = () => {
        setdarkTheme(!darkTheme)
    }

    return (
        <div className={styles.App}>
            <div className={styles.weather_app_container}>
             <Header darkTheme={darkTheme} darkThemeToggle={darkThemeToggle}/>
            </div>
        </div>
    );
}

export default App;
