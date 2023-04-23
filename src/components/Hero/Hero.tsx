import React from 'react';
import styles from './Hero.module.scss';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import { ReactComponent as HeroIllustration } from '../../assets/illustration.svg';
import Button from '../Button';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <LogoIcon />
                    <BurgerIcon className={styles.burger} />
                </nav>
                <div className={styles.content}>
                    <h1 className={styles.h1}>
                        New Automation Tool for Your Home
                    </h1>
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Faucibus tristique vulputate ultrices ut mauris tellus
                        at. Posuere sollicitudin odio tellus elit.
                    </p>
                    <Button text="See Our Project" />
                    <HeroIllustration className={styles.illustration} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
