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
import { makeField } from "../../../hoc/MakeField";

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

const AInput = makeField(Input, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ATextarea = makeField(TextArea, formItemLayout);
const ARangePicker = makeField(RangePicker, formItemLayout);

const HabitForm = ({ onCancel, handleSubmit, pristine, submitting }) => {
  return (
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
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.habitName) {
    errors.habitName = "Required";
  }

  return errors;
};

const HabitFormRedux = reduxForm({
  form: "habitForm",
  validate,
})(HabitForm);

export default HabitFormRedux;
