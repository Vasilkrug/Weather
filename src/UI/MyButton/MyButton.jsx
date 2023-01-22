import React from 'react';
import styles from './MyButton.module.scss';

const MyButton = ({img, onClick,bgOn,active}) => {
    return (
        <button className={`${styles.widget_button} ${bgOn ? 'bg-bgButtons' : null} ${active ? 'bg-white' : null}`}>
            <img src={img} alt=""/>
        </button>
    );
};

export default MyButton;