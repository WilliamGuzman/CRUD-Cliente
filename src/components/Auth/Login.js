import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Login.css";

import AuthContext from "../../context/auth/authContext";

import { UISref } from "@uirouter/react";

const Login = () => {

  const authContext = useContext(AuthContext);

  const { login } = authContext;

  const onFinish = (values) => {
    login(values);
  };
  return (
    <div className="hero">
      <div className="contenedor">
        <div className="user-icon">
          <i className="fas fa-user-lock"></i>
        </div>
        <h1 className="login-title">log in  </h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="UserName"
            rules={[{ required: true, message: "El usuario es obligatorio!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuario"
            />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[
              { required: true, message: "La contraseña es oblogatoria!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Iniciar Sesión
            </Button>
            <br />
            O
            <br/>
            <UISref to="newAccount">
              <a href="#!">Registrarse</a>
            </UISref>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
