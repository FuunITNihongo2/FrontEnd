import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./page/Login";
import Home from "./page/Home";
import "swiper/css/bundle";
import Layout from "./layout";
import BoothDetail from "./page/BoothDetail";
import Admin from "./page/Admin";
import ProductList from "./page/Admin/Products/ProductList/ProductList";
import Product from "./page/Product";
import BoothManage from "./page/BoothManage";

function App() {
  return (
    <Box minH={"100vh"} w="100vw" bg="#ffffff">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="booth-details" element={<BoothDetail />} />
          <Route path="booth-manage" element={<BoothManage />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/product" exact="true" element={<ProductList />} />
      </Routes>
    </Box>
  );
}

export default App;
