import React from "react";
import { Row, Col, Button } from "antd";
import { Input } from "antd";
import { Select } from "antd";
import { DatePicker } from "antd";
import { Checkbox } from "antd";

const HabitForm = () => {
  const { Option } = Select;
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const handleChangeSelect = () => {};
  return (
    <div>
      <Row gutter={8}>
        <Col span={24}>
          <Input placeholder="Habit name" />
        </Col>
      </Row>
      <br />
      <Row gutter={8}>
        <Col span={12}>
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Start date"
            onChange={onChange}
          />
        </Col>
        <Col span={12}>
          <DatePicker
            style={{ width: "100%" }}
            placeholder="End date"
            onChange={onChange}
          />
        </Col>
      </Row>
      <br />

      <Row>
        <Col span={24}>
          <Checkbox value="A">Mon</Checkbox>
          <Checkbox value="B">Tue</Checkbox>
          <Checkbox value="C">Wed</Checkbox>
          <Checkbox value="D">Thu</Checkbox>
          <Checkbox value="E">Fri</Checkbox>
          <Checkbox value="Sat">Sat</Checkbox>
          <Checkbox value="Sun">Sun</Checkbox>
        </Col>
      </Row>

      <br />
      <Row gutter={8}>
        <Col span={12}>
          <Input placeholder="Metric" />
        </Col>
        <Col span={12}>
          <Select
            defaultValue="Sets"
            style={{ width: "100%" }}
            onChange={handleChangeSelect}
          >
            <Option value="Sets">Sets</Option>
            <Option value="Time">Time</Option>
            <Option value="Done">Done</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );
};

export default HabitForm;
