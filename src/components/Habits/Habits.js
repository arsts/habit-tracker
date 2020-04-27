import React, { Fragment } from "react";
import { Card, Row, Col, Button } from "antd";
import { Modal } from "antd";
import { Input } from "antd";
import { Layout } from "antd";
import { PlusOutlined, OrderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./Habits.module.css";
import HabitForm from "./HabitFrom/HabitForm";
import {
  Switch,
  Route,
  withRouter,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const { Header, Content } = Layout;
const { Search } = Input;

const Habits = ({
  addHabit,
  setSeachTerm,
  habits,
  filterByName,
  searchTerm,
  history,
  filteredHabits,
}) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  let { path, url } = useRouteMatch();

  // FORM
  const onSubmit = (formData) => {
    addHabit(formData);
    history.push("/habits");
  };

  const onCancel = () => {
    history.push("/habits");
  };

  const onSearchHabit = (value) => {
    setSeachTerm(value);
  };

  return (
    <Fragment>
      <Header className="site-layout-background">
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Input
              placeholder="input search text"
              onChange={(e) => {
                onSearchHabit(e.target.value);
              }}
              style={{ width: 200 }}
            />
          </Col>
          <Col span={16}></Col>
          <Col
            span={4}
            style={{
              display: "flex",
              flexDireciton: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button type="primary" size="large">
              <Link to={`${url}/new-habit`}>
                <PlusOutlined />
                New Habit
              </Link>
            </Button>
          </Col>
        </Row>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <Switch>
          <Route exact path={path}>
            <Row gutter={[16, 16]}>
              {filteredHabits.map((habit) => {
                return (
                  <Col className="gutter-row">
                    <Card
                      hoverable
                      title={habit.name}
                      style={{
                        minWidth: "240px",
                      }}
                    >
                      <span>{habit.description}</span>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Route>
          <Route path={`${path}/new-habit`}>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDireciton: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card title="New Habit" style={{ width: "500px" }}>
                <HabitForm onSubmit={onSubmit} onCancel={onCancel} />
              </Card>
            </div>
          </Route>
        </Switch>
      </Content>
    </Fragment>
  );
};

export default withRouter(Habits);
