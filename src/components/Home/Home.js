import React, { Fragment } from "react";
import { Layout } from "antd";
const { Header, Content } = Layout;

const Home = () => {
  return (
    <Fragment>
      <Header
        className="site-layout-background"
        style={{ padding: 0 }}
      ></Header>
      <Content style={{ margin: "24px 16px 0" }}>Home</Content>
    </Fragment>
  );
};

export default Home;
