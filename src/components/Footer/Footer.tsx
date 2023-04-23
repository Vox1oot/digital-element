import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast from '../Toast';
import styles from './Footer.module.scss';
import Clients from './Clients';
import Team from './Team';
import Details from './Details';
import Modal from '../Modal';

const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [isSubmittedForm, setIsSubmittedForm] = React.useState(false);

    const toggleOpenModal = React.useCallback(() => {
        setIsSubmittedForm(false);
        setModalIsOpen(true);
    }, []);

    const toggleCloseMOdal = () => {
        setModalIsOpen(false);
    };

    if (isSubmittedForm) {
        toast();
    }

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
            </div>
            <ToastContainer />
        </section>
    );
};

export default Footer;
