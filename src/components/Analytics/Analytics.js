import React, { Fragment } from "react";
import { Layout } from "antd";
const { Header, Content } = Layout;

const Analytics = () => {
  return (
    <Fragment>
      <Header
        className="site-layout-background"
        style={{ padding: 0 }}
      ></Header>
      <Content style={{ margin: "24px 16px 0" }}>Analytics</Content>
    </Fragment>
  );
};

export default Analytics;
