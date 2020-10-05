import React, { useContext, useEffect } from "react";
import { UISref } from "@uirouter/react";
import { Table, Space, Button } from "antd";
import Swal from "sweetalert2";
import "./Home.css";

import ProductContext from "../../context/Product/productContext";



const Home = () => {
  //OBtener todas las funciones de productContext
  const productContext = useContext(ProductContext);

  const {
    products,
    res,
    getProduct,
    selectProduct,
    deleteProduct,
  } = productContext;

  const delProduct = (productId) => {
    Swal.fire({
      title: "Desea eliminar el producto?",
      text: "No podra revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(productId);
      }
    });
  };

  const selProduct = (productId) => {
    selectProduct(productId)
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
    },
    {
      title: "Descripcion",
      dataIndex: "descripcion",
      key: "descripcion",
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <UISref to="contenedor.editproduct" params={{id: record.id}}>
            <Button onClick={() => selProduct(record.id)} type="primary">
              Actualizar
            </Button>
          </UISref>
          <Button onClick={() => delProduct(record.id)} type="danger">
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];



  //Get Data
  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, [res]);

  return (
    <div className="container">
      <UISref to="contenedor.product">
        <Button type="primary nuevo-producto">Agregar Producto</Button>
      </UISref>
      <h1 className="tittle">Lista de Productos</h1>
      <Table columns={columns} dataSource={products} />
    </div>
  );
};

export default Home;
