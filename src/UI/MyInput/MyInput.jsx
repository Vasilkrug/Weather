import React from 'react';
import styles from './MyInput.module.scss';

const MyInput = () => {
    return (
        <>
            <input type="text" className={styles.search_input} placeholder={'Search city'}/>
        </>
    );
};

export default MyInput;