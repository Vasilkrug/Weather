import React from "react";
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.weather_app_container}>
                <header className={styles.header}>
                    <div className={styles.header_widgets}>
                        <button><img src={require('./assets/images/icons/dashboard.png')} alt=""/></button>
                        <button><img src={require('./assets/images/icons/notification.png')} alt=""/></button>
                        <div className={styles.user_location}>
                            <button><img src={require('./assets/images/icons/location.png')} alt=""/>
                            </button>
                            <p>Moscow, <span>Russia</span></p>
                        </div>
                    </div>
                    <div className={styles.header_search}>
                        <input type="text" className={styles.search_input} placeholder={'Search city'}/>
                    </div>
                    <div className={styles.user_settings}>
                        <div className={styles.themes_btns}>
                            <button>
                                <img src={require('./assets/images/icons/sun-white.png')} alt=""/>
                            </button>
                            <button>
                                <img src={require('./assets/images/icons/moon-yellow.png')} alt=""/>
                            </button>
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
