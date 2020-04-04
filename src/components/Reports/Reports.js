import React, { Fragment } from "react";
import { Layout } from "antd";
const { Header, Content } = Layout;

const Reports = () => {
  return (
    <Fragment>
      <Header
        className="site-layout-background"
        style={{ padding: 0 }}
      ></Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <div>Reports</div>
      </Content>
    </Fragment>
  );
};

export default Reports;
