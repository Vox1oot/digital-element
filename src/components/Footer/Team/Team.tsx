import React from 'react';
import Button from '../../Button';
import styles from './Team.module.scss';

interface ITeam {
    handleModal: (param: boolean) => void;
}

const Team = ({ handleModal }: ITeam) => (
    <section className={styles.container}>
        <h2 className={styles.h2}>Intersted to woek with our team?</h2>
        <div className={styles.button}>
            <Button handleClick={handleModal} text="Let's Talk" />
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
        </p>
    </section>
);

export default Team;
