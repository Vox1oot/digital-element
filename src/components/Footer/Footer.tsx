import React from 'react';
import styles from './Footer.module.scss';
import Clients from './Clients';
import Team from './Team';
import Details from './Details';
import Modal from '../Modal';

const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    console.log(modalIsOpen);

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Clients />
                <Team handleModal={setModalIsOpen} />
                <Details />
                {modalIsOpen && (
                    <Modal isOpen={modalIsOpen} handleModal={setModalIsOpen} />
                )}
            </div>
        </section>
    );
};

export default Footer;
