import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { Layout } from "antd";

import { useState } from "react";
import { compose } from "redux";
import Analytics from "./components/Analytics/Analytics";
import Reports from "./components/Reports/Reports";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Menu";
import HabitsContainer from "./components/Habits/HabitsContainer";

const { Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" />
        <Navigation />
      </Sider>
      <Layout className="site-layout">
        {/* <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          > */}
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/analytics" render={() => <Analytics />} />
          <Route path="/habits" render={() => <HabitsContainer />} />
          <Route path="/reports" render={() => <Reports />} />
        </Switch>
        {/* </div> */}

        <Footer style={{ textAlign: "center" }}>AT ©2018</Footer>
      </Layout>
    </Layout>
  );
}

export default compose(withRouter)(App);
