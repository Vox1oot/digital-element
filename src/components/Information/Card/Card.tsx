/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Card.module.scss';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

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
                    <div className={styles.footerCard}>
                        <a href="#">Learn more</a>
                        <Arrow />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
