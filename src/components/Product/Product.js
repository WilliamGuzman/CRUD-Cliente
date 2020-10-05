import React, { useContext } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./Product.css";
import uuid from 'react-uuid';

//Importamos el context 
import ProductContext from '../../context/Product/productContext';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = (label,min,max) => ({
  required: `${label} es requerido!`,
  types: {
    number: `${label} no es un numero valido!`,
  },
  number: {
    range: `${label} la cantidad debe de estar ${min} y ${max}`,
  },
});

const Product = () => {

  //OBtener todas las funciones de productContext
  const productContext = useContext(ProductContext);

  const { createProduct } = productContext;

  const onFinish = (values) => {
      values.id = uuid();
      createProduct(values);
  };

  return (
    <div className="container">
      <h1 className="title">Agregar Nuevo Producto</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cantidad"
          label="Cantidad"
          rules={[{ type: "number", min: 1, required:true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="precio"
          label="Precio"
          rules={[{ type: "number", min: 1, required:true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="descripcion" label="Descripcion">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Product;
