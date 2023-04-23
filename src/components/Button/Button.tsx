/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.scss';

interface IButton {
    text: string;
    buttonType?: 'submit' | 'reset' | 'button' | undefined;
    width?: string;
    isDisabled?: boolean;
    handleClick?: () => void;
}

const Button = ({
    text,
    buttonType,
    width,
    isDisabled,
    handleClick
}: IButton) => {
    const buttonStyle = {
        width: width ? `${width}%` : ''
    };

    return (
        <button
            onClick={handleClick}
            style={buttonStyle}
            className={styles.button}
            type={buttonType || 'button'}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};

export default Button;
