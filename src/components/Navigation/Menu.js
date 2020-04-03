import React from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
  FileOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

const Navigation = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1">
        <Link to="/">
          <HomeOutlined />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/habits">
          <UserOutlined />
          <span>Habits</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/analytics">
          <PieChartOutlined />
          <span>Analytics</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/reports">
          <FileOutlined />
          <span>Reports</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
