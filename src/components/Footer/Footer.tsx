import React from 'react';
import styles from './Footer.module.scss';
import Clients from './Clients';
import Team from './Team';
import Details from './Details';
import Modal from '../Modal';

const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [isSubmittedForm, setIsSubmittedForm] = React.useState(false);

    console.log(isSubmittedForm);

    const toggleOpenModal = () => {
        setModalIsOpen(true);
    };

    const toggleCloseMOdal = () => {
        setModalIsOpen(false);
    };

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Clients />
                <Team handleModal={toggleOpenModal} />
                <Details />
                {modalIsOpen && (
                    <Modal
                        isOpen={modalIsOpen}
                        handleModal={toggleCloseMOdal}
                        handleSubmittedForm={setIsSubmittedForm}
                    />
                )}
                {isSubmittedForm && <div>Отправлено</div>}
            </div>
        </section>
    );
};

export default Footer;
