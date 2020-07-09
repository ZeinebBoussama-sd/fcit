import React from "react";
import { Formik, Field } from "formik";
import { useMutation } from "@apollo/react-hooks";
import deepEqual from "lodash.isequal";
import logofcit from "../foundation/logo/logofcit3.png";

function Login() {
  // const [login, res] = useMutation();

  return (
    <div className="mt-8 ">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        enableReinitialize
        //validationSchema={ThemeSchema}
        onSubmit={async (values) => {
          try {
            // await login({
            //   variables: {
            //     email: values.email,
            //     password: values.password,
            //   },
            // });
            console.log(values);
          } catch (e) {
            console.error(e.message);
          }
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            initialValues,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          const hasChanged = !deepEqual(values, initialValues);

          return (
            <div className="login text-center">
              <form className="form-signin" onSubmit={handleSubmit}>
                <img
                  class="mb-4"
                  src={logofcit}
                  alt=""
                  width="115"
                  height="88"
                />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.email
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  type="email"
                  autofocus
                />
                {touched.email ? (
                  <div className="invalid-feedback">{errors.email}</div>
                ) : null}
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <Field
                  className={
                    hasChanged
                      ? errors.password
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control text-input"
                  }
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                {touched.password ? (
                  <div className="invalid-feedback">{errors.password}</div>
                ) : null}
                {/* <div className="form-group">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dropdownCheck2"
                  />
                  <label className="form-check-label" htmlFor="dropdownCheck2">
                    Remember me
                  </label>
                </div>
              </div> */}
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
export default Login;
