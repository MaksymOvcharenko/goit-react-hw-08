import { Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";

import { FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>REGISTRATION PAGE</h2>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(register(values));
        }}
      >
        <Form className={s.form}>
          <FormLabel for="name" className={s.label}>
            Email
            <Field
              name="name"
              type="text"
              placeholder="Please enter your name"
              className={s.input}
            ></Field>
          </FormLabel>
          <FormLabel for="email" className={s.label}>
            Email
            <Field
              name="email"
              type="email"
              placeholder="Please enter your email"
              className={s.input}
            ></Field>
          </FormLabel>

          <FormLabel for="password" className={s.label}>
            Password
            <Field
              name="password"
              type="password"
              placeholder="Please enter your password"
              className={s.input}
            ></Field>
          </FormLabel>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationPage;
