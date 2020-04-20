import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { Layout } from "antd";

import { useState } from "react";
import { compose } from "redux";
import { Result } from "antd";
import Analytics from "./components/Analytics/Analytics";
import Reports from "./components/Reports/Reports";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Menu";
import HabitsContainer from "./components/Habits/HabitsContainer";

const { Footer, Sider, Header } = Layout;

function App({ location }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" />
        <Navigation location={location} />
      </Sider>
      <Layout className="site-layout">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/analytics" render={() => <Analytics />} />
          <Route
            path="/habits"
            name="Another page"
            render={() => <HabitsContainer />}
          />
          <Route path="/reports" render={() => <Reports />} />
          <Route render={() => <Result />} />
        </Switch>

        <Footer style={{ textAlign: "center" }}>AT ©2018</Footer>
      </Layout>
    </Layout>
  );
}

export default compose(withRouter)(App);
