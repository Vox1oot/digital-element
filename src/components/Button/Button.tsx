import React from 'react';
import styles from './Button.module.scss';

interface IButton {
    text: string;
    width?: string;
    handleClick?: (param: boolean) => void;
}

const Button = ({ text, width, handleClick }: IButton) => {
    const buttonStyle = {
        width: width ? `${width}%` : ''
    };

    if (handleClick) {
        return (
            <button
                onClick={() => handleClick(true)}
                style={buttonStyle}
                className={styles.button}
                type="button"
            >
                {text}
            </button>
        );
    }

    return (
        <button style={buttonStyle} className={styles.button} type="button">
            {text}
        </button>
    );
};

export default Button;
