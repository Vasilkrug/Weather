import React from 'react';
import styles from './MyInput.module.scss';

const MyInput = ({inputHandler,fetchToWeatherApi,inputValue}) => {
    return (
        <>
            <input
                onChange={(event) => inputHandler(event)}
                type="text"
                className={styles.search_input}
                placeholder={'Search city'}
                onKeyDown={(e) => fetchToWeatherApi(e)}
                value={inputValue}
            />
        </>
    );
};

export default MyInput;