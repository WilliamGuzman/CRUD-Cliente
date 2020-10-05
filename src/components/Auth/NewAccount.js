import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { UISref } from "@uirouter/react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

//Context
import AuthContext from '../../context/auth/authContext';


const NewAccount = () => {

  const authContext = useContext(AuthContext);

  const { userRegister } = authContext;

  const onFinish = (values) => {
    userRegister(values)
  };
  return (
    <div className="hero">
      <div className="contenedor">
        <div className="user-icon">
          <i className="fas fa-user-plus"></i>
        </div>
        <h1 className="login-title">registrarse </h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "El usuario es obligatorio!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuario"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Este campo es obligatorio!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: "Este campo es obligatorio!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Repetir Contraseña"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Crear Cuenta
            </Button>
            <br />
            O
            <br />
            <UISref to="login">
              <a href="#!">Regresar al Login!</a>
            </UISref>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NewAccount;
