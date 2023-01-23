import React from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import {dashboard, location, moon_black, moon_yellow, notification, sun_white, sun_yellow} from "../../assets/images/icons";
import MyInput from "../../UI/MyInput/MyInput";
import {user_photo} from "../../assets/images";
import styles from './Header.module.scss';

const Header = ({darkTheme,darkThemeToggle}) => {
    return (
        <header className={styles.header}>
            <div className={styles.header_widgets}>
                <MyButton img={dashboard} bgOn={true}/>
                <MyButton img={notification} bgOn={true}/>
                <div className={styles.user_location}>
                    <MyButton img={location}/>
                    <p>Moscow, <span>Russia</span></p>
                </div>
            </div>
            <div className={styles.header_search}>
                <MyInput/>
            </div>
            <div className={styles.user_settings}>
                <div className={styles.themes_btns}>
                    <MyButton
                        onClick={darkThemeToggle}
                        img={darkTheme ? sun_white : sun_yellow}
                        active={!darkTheme}/>
                    <MyButton
                        onClick={darkThemeToggle}
                        img={darkTheme ? moon_yellow : moon_black}
                        active={darkTheme}/>
                </div>
                <div className={styles.user_img}>
                    <img src={user_photo} alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;