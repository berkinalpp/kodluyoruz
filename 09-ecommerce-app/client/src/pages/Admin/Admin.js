import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css";
import Home from "./Home/Home";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";

const Admin = () => {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </Box>
    </div>
  );
};

export default Admin;
