import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { FormLabel } from "@mui/material";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>LOGIN PAGE</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(logIn(values));
        }}
      >
        <Form className={s.form}>
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
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPage;
