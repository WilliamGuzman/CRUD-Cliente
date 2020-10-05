import React, { useContext } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./Product.css";

//Importamos el context
import ProductContext from "../../context/Product/productContext";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const EditProduct = () => {
  //OBtener todas las funciones de productContext
  const productContext = useContext(ProductContext);

  const { updateProduct, product } = productContext;

  const onFinish = (values) => {
    values.id = id;
    updateProduct(values)
  };

  if (product === null) return null;

  const { id, nombre, cantidad, precio, descripcion } = product[0];

  const values = {
    nombre: nombre,
    cantidad: cantidad,
    precio: precio,
    descripcion: descripcion,
  };

  return (
    <div className="container">
      <h1 className="title">Actualizar Producto</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        initialValues={values}
      >
        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[{ required: true, message: "Este campo es requerido" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cantidad"
          label="Cantidad"
          rules={[
            {
              type: "number",
              min: 1,
              required: true,
              message: "Este campo es requerido",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="precio"
          label="Precio"
          rules={[
            {
              type: "number",
              min: 1,
              required: true,
              message: "Este campo es requerido",
            },
          ]}
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

export default EditProduct;
