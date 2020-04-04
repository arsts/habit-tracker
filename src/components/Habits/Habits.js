import React, { Fragment } from "react";
import { Card, Row, Col, Button } from "antd";
import styles from "./Habits.module.css";
import { useState } from "react";
import { Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const Habits = ({ addHabit, habits }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Fragment>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              addHabit();
            }}
          >
            <PlusOutlined />
            New Habit
          </Button>
        </div>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <Row gutter={[16, 16]}>
          {habits.map(habit => {
            return (
              <Col className="gutter-row">
                <Card
                  title={habit.name}
                  style={{
                    width: "240px"
                  }}
                  loading={loading}
                >
                  <span>{habit.description}</span>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Content>
    </Fragment>
  );
};

export default Habits;
