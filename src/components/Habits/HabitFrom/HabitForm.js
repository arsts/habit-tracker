import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  Input,
  Radio,
  Select,
  Checkbox,
  Button,
  DatePicker,
  Row,
  Col,
  Card,
} from "antd";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

const makeField = (Component) => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      {...formItemLayout}
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);
const ASelect = makeField(Select);
const ACheckbox = makeField(Checkbox);
const ATextarea = makeField(TextArea);
const ADatePicker = makeField(DatePicker);
const ARangePicker = makeField(RangePicker);

const HabitForm = ({
  handleSubmit,
  onCancel,
  loading,
  pristine,
  reset,
  submitting,
}) => {
  return (
    <Card title="New Habit" style={{ width: "500px" }}>
      <form onSubmit={handleSubmit}>
        <Field
          label="Name"
          name="name"
          placeholder="Give your habit a name"
          component={AInput}
          hasFeedback
        />

        <Field
          label="Duration"
          name="rangepicker"
          component={ARangePicker}
          placeholder={["From", "To"]}
          hasFeedback
          onFocus={(e) => e.preventDefault()}
          onBlur={(e) => e.preventDefault()}
        />

        <Field
          label="Metric"
          name="metric"
          placeholder="What you want to measure"
          component={AInput}
        />
        <Field label="Type of metric" name="typeOfMetric" component={ASelect}>
          <Option value="boolean">Boolean</Option>
          <Option value="number">Number</Option>
          <Option value="time">Time</Option>
        </Field>
        <Field label="Description" name="description" component={ATextarea} />
        <FormItem {...tailFormItemLayout}>
          <Button disabled={submitting} onClick={onCancel}>
            Return
          </Button>
          <Button
            type="primary"
            disabled={pristine || submitting}
            htmlType="submit"
            style={{ marginLeft: "10px" }}
          >
            Add Habit
          </Button>
        </FormItem>
      </form>
    </Card>
  );
};

// const validate = (values) => {
//   const errors = {};
//   if (!values.habitName) {
//     errors.habitName = "Required";
//   }

//   return errors;
// };

const HabitFormRedux = reduxForm({
  form: "habitForm",
})(HabitForm);

export default HabitFormRedux;
// ====================================
