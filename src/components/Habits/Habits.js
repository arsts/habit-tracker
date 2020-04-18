import React, { Fragment } from "react";
import { Card, Row, Col, Button } from "antd";
import { Modal } from "antd";
import { Input } from "antd";
import styles from "./Habits.module.css";
import { useState } from "react";
import { Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import HabitForm from "./HabitFrom/HabitForm";

const { Header, Content } = Layout;

const Habits = ({ addHabit, habits }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  // MODAL
  const showModal = () => {
    setVisible(true);
  };

  const handleOkModal = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      addHabit();
    }, 1000);
  };

  const handleCancelModal = () => {
    setVisible(false);
  };
  return (
    <Fragment>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              showModal();
            }}
          >
            <PlusOutlined />
            New Habit
          </Button>
        </div>
        <Modal
          visible={visible}
          title="New Habit"
          onOk={handleOkModal}
          onCancel={handleCancelModal}
          footer={[
            <Button key="back" onClick={handleCancelModal}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOkModal}
            >
              Add Habit
            </Button>,
          ]}
        >
          <HabitForm />
        </Modal>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <Row gutter={[16, 16]}>
          {habits.map((habit) => {
            return (
              <Col className="gutter-row">
                <Card
                  title={habit.name}
                  style={{
                    width: "240px",
                  }}
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
