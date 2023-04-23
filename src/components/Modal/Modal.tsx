/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import styles from './Modal.module.scss';
import Button from '../Button';

type ModalType = {
    isOpen: boolean;
    handleModal: (param: boolean) => void;
};

const Modal = ({ isOpen, handleModal }: ModalType) => {
    const inputName = React.useRef<HTMLInputElement>(null);

    const f = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    console.log(f.values);

    React.useEffect(() => {
        if (inputName.current) {
            inputName.current.focus();
        }
    }, []);

    React.useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    const toggleModal = (event: React.SyntheticEvent<EventTarget>) => {
        if (event.target === event.currentTarget) {
            handleModal(false);
        }
    };

    return (
        <div className={styles.modal} onClick={toggleModal}>
            <div className={styles.container}>
                <div className={styles.title}>Send us message</div>
                <div className="modal-body">
                    <form onSubmit={f.handleSubmit}>
                        <div className={styles.inputWrapper}>
                            <label className={styles.label} htmlFor="name">
                                Name
                            </label>
                            <input
                                ref={inputName}
                                className={styles.input}
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                autoComplete="off"
                                value={f.values.name}
                                onChange={f.handleChange}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label className={styles.label} htmlFor="email">
                                Name
                            </label>
                            <input
                                className={styles.input}
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                autoComplete="off"
                                value={f.values.email}
                                onChange={f.handleChange}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label className={styles.label} htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className={styles.textarea}
                                placeholder="Your Message"
                                rows={7}
                                autoComplete="off"
                                value={f.values.message}
                                onChange={f.handleChange}
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <Button width="100" text="SUBMIT" />
                </div>
            </div>
        </div>
    );
};

export default Modal;
