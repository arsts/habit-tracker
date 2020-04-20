import React from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

const Navigation = ({ location }) => {
  return (
    <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <NavLink to="/">
          <HomeOutlined />
          <span>Home</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/habits">
        <NavLink to="/habits">
          <UserOutlined />
          <span>Habits</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/analytics">
        <NavLink to="/analytics">
          <PieChartOutlined />
          <span>Analytics</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/reports">
        <NavLink to="/reports">
          <FileOutlined />
          <span>Reports</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
