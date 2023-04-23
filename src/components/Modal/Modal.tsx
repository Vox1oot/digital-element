/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import cn from 'classnames';
import styles from './Modal.module.scss';
import Button from '../Button';
import validationSchema from './schema';

type ModalType = {
    isOpen: boolean;
    handleModal: () => void;
    handleSubmittedForm: (val: boolean) => void;
};

const Modal = ({ isOpen, handleModal, handleSubmittedForm }: ModalType) => {
    const inputName = React.useRef<HTMLInputElement>(null);

    const f = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema,
        onSubmit: (values) => {
            fetch('https://dummyjson.com/carts/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            }).then((res) => res.json());
            handleModal();
            handleSubmittedForm(true);
        }
    });

    React.useEffect(() => {
        if (inputName.current) {
            inputName.current.focus();
        }
    }, []);

    React.useEffect(() => {
        if (isOpen) {
            handleSubmittedForm(false);
            document.body.classList.add('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen, handleSubmittedForm]);

    const toggleModal = (event: React.SyntheticEvent<EventTarget>) => {
        if (event.target === event.currentTarget) {
            handleModal();
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
                                className={cn(styles.input, {
                                    error: f.errors.name
                                })}
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
                                className={cn(styles.input, {
                                    error: f.errors.email
                                })}
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
                                className={cn(styles.textarea, {
                                    error: f.errors.message
                                })}
                                placeholder="Your Message"
                                rows={7}
                                autoComplete="off"
                                value={f.values.message}
                                onChange={f.handleChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <Button
                                buttonType="submit"
                                width="100"
                                text="SUBMIT"
                                isDisabled={!f.isValid}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
