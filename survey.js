import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  age: '',
  gender: '',
  occupation: '',
  favoriteCrop: '',
  experienceYears: '',
  feedback: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  age: Yup.number().required('Required').positive('Age must be positive').integer('Age must be an integer'),
  gender: Yup.string().required('Required'),
  occupation: Yup.string().required('Required'),
  favoriteCrop: Yup.string().required('Required'),
  experienceYears: Yup.number().required('Required').positive('Years of experience must be positive').integer('Years of experience must be an integer'),
  feedback: Yup.string().required('Required'),
});

const onSubmit = (values) => {
  // Here, you can perform actions with the survey data, like sending it to a server.
  console.log('Survey Data:', values);
};

const App = () => {
  return (
    <div className="App">
      <h1>Agricultural NGO Online Survey</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="age">Age:</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="gender">Gender:</label>
              <Field as="select" name="gender">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="occupation">Occupation:</label>
              <Field type="text" name="occupation" />
              <ErrorMessage name="occupation" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="favoriteCrop">Favorite Crop:</label>
              <Field type="text" name="favoriteCrop" />
              <ErrorMessage name="favoriteCrop" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="experienceYears">Years of Experience:</label>
              <Field type="number" name="experienceYears" />
              <ErrorMessage name="experienceYears" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="feedback">Feedback:</label>
              <Field as="textarea" name="feedback" />
              <ErrorMessage name="feedback" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
