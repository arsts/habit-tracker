import React from "react";
import SigninForm from "./SigninForm/SigninForm";
import { Card, Layout } from "antd";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const { Header, Content } = Layout;

const Signin = ({ login }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password);
  };
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Card
        style={{
          maxWidth: "500px",
          margin: "150px auto ",
          padding: "0px 30px",
        }}
      >
        <h1 style={{ fontSize: "40px", textAlign: "center" }}>Welcome back!</h1>
        <SigninForm onSubmit={onSubmit} />
      </Card>
    </Content>
  );
};

const mapStateToProps = (state) => {
  return { email: state.authReducer.email };
};

export default connect(mapStateToProps, { login })(Signin);
