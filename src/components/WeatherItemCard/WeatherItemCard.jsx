import React from 'react';
import styles from './WeatherItemCard.module.scss';

const WeatherItemCard = ({day, temp, img, id, getId, activeClass}) => {
    return (
        <div
            onClick={() => getId(id)}
            className={`${styles.weather_item} ${activeClass ? styles[activeClass] : ''}`}>
            <div className={styles.weather_item_header}>
                <h2>{day}</h2>
            </div>
            <div className={styles.weather_item_body}>
                <img src={img} alt="weather icon"/>
                <span>{temp}&deg;</span>
            </div>
            <div className={styles.weather_item_footer}>

            </div>
        </div>
    );
};

export default WeatherItemCard;