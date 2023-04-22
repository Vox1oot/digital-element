import React from 'react';
import styles from './Footer.module.scss';
import Clients from './Clients';
import Team from './Team';
import Details from './Details';

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Clients />
                <Team />
                <Details />
            </div>
        </section>
    );
};

export default Footer;
