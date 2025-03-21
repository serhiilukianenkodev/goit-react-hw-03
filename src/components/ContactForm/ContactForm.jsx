import { Form, Formik, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={css.addContactForm}>
          <div className={css.fieldWrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              className={css.formField}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorField}
            />
          </div>

          <div className={css.fieldWrapper}>
            <div htmlFor={numberFieldId}>Number</div>
            <Field
              type="text"
              name="number"
              id={numberFieldId}
              className={css.formField}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorField}
            />
          </div>

          <button
            type="submit"
            className={css.formSubmitBtn}
            disabled={!isValid || !dirty}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
