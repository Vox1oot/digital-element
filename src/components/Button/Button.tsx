import React from 'react';
import styles from './Button.module.scss';

type ButtonType = {
    text: string;
};

const Button = ({ text }: ButtonType) => (
    <button className={styles.button} type="button">
        {text}
    </button>
);

export default Button;
