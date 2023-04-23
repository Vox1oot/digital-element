import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must be no more than 20 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email must be valid'),
    message: Yup.string()
        .required('Message is required')
        .min(2, 'Message must be at least 2 characters')
});

export default validationSchema;
