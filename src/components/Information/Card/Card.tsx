/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

interface iCard {
    id: number;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

const Card = ({ id, icon: Icon, title, description }: iCard) => {
    return (
        <div className={id === 1 ? styles['grid-2'] : ''}>
            <div className={styles.container}>
                <div
                    className={id === 3 ? styles.wrapperTop80 : styles.wrapper}
                >
                    <Icon className={styles.icon} />
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                    <footer>
                        <a href="#">Learn more</a>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Card;
