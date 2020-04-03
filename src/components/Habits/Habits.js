import React, { Fragment } from "react";
import { Card, Row, Col } from "antd";
import styles from "./Habits.module.css";

const Habits = () => {
  return (
    <Fragment>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card title="Card title" style={{ width: "240px", height: "225px" }}>
            Card content
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Habits;
