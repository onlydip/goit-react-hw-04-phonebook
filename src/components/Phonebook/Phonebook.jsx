import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Main,
  PhonebookForm,
  PhonebookInput,
  Button,
  Error,
} from './Phonebook.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan'
    )
    .required('This field cannot be empty'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(6, 'Phone number is too short')
    .max(18, 'Phone number is too long')
    .required('This field cannot be empty'),
});

export default function Phonebook({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Main>
          <PhonebookForm>
            <label htmlFor="name">
              Name:
              <PhonebookInput
                id="name"
                type="text"
                name="name"
                placeholder="Enter name"
              />
              <ErrorMessage name="name" component={Error} />
            </label>
          </PhonebookForm>
          <PhonebookForm>
            <label htmlFor="number">
              Number:
              <PhonebookInput
                id="number"
                type="tel"
                name="number"
                placeholder="Enter number"
              />
              <ErrorMessage name="number" component={Error} />
            </label>
          </PhonebookForm>
          <Button type="submit">Add contact</Button>
        </Main>
      )}
    </Formik>
  );
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
