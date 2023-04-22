import React from 'react';
import styles from './Details.module.scss';
import { ReactComponent as LogoFooter } from '../../../assets/icons/logoFooter.svg';

const Details = () => (
    <section className={styles.container}>
        <div className={styles.flex}>
            <LogoFooter className={styles.logo} />
            <h3>Afrianska</h3>
        </div>
        <h3>About US</h3>
        <h3>Follow US</h3>
        <div className={styles.flex}>
            <span className={styles.span}>A.</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <p>About</p>
        <p>Instagram</p>
        <div className={styles.flex}>
            <span className={styles.span}>T.</span>
            <p>+62-812-7313-4321</p>
        </div>
        <p>What We Do</p>
        <p>Facebook</p>
        <div className={styles.flex}>
            <span className={styles.span}>E.</span>
            <p>hello.afrian@gmail.com</p>
        </div>
        <p>Project</p>
        <p>LinkedIn</p>
        <p className={styles.copyright}>
            2019 © Afrianska. All rights reserved.
        </p>
    </section>
);

export default Details;
