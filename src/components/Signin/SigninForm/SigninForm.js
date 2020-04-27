import React, { Fragment } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Password from "antd/lib/input/Password";
import { makeField } from "../../../hoc/MakeField";

const FormItem = Form.Item;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AEmail = makeField(Input);
const APassword = makeField(Password);

const SigninForm = ({
  handleSubmit,
  onCancel,
  loading,
  pristine,
  reset,
  submitting,
}) => {
  return (
    <form size="large" layout="vertical" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <Field
        size="large"
        name="email"
        placeholder="Enter your email"
        component={AEmail}
        hasFeedback
      />
      <label htmlFor="password">Password</label>
      <Field
        size="large"
        name="password"
        placeholder="Enter password"
        component={APassword}
        validateStatus="error"
        help="Should be combination of numbers alphabets"
        hasFeedback
      />
      <FormItem>
        <Button
          size="large"
          type="primary"
          disabled={submitting}
          htmlType="submit"
          style={{ width: "100%" }}
        >
          Sign in
        </Button>
      </FormItem>
    </form>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const SigninFormRedux = reduxForm({
  form: "signinForm",
  validate,
})(SigninForm);

export default SigninFormRedux;
