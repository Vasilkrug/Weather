import React, {useState} from "react";
import styles from './App.module.scss';
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

function App() {
    const [darkTheme, setdarkTheme] = useState(true);

    return (
        <div className={styles.App}>
            <div className={styles.weather_app_container}>
                <header className={styles.header}>
                    <div className={styles.header_widgets}>
                        <MyButton img={require('./assets/images/icons/dashboard.png')} bgOn={true}/>
                        <MyButton img={require('./assets/images/icons/notification.png')} bgOn={true}/>
                        <div className={styles.user_location}>
                            <MyButton img={require('./assets/images/icons/location.png')}/>
                            <p>Moscow, <span>Russia</span></p>
                        </div>
                    </div>
                    <div className={styles.header_search}>
                        <MyInput/>
                    </div>
                    <div className={styles.user_settings}>
                        <div className={styles.themes_btns}>
                            <MyButton img={require('./assets/images/icons/sun-white.png')}/>
                            <MyButton img={require('./assets/images/icons/moon-yellow.png')} active={darkTheme}/>
                        </div>
                        <div className={styles.user_img}>
                            Fdf
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default App;
