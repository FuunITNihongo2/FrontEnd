import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./page/Login";
import Home from "./page/Home";
import "swiper/css/bundle";
import Layout from "./layout";
import BoothDetail from "./page/BoothDetail";
import Product from "./page/Product";
import BoothManage from "./page/BoothManage";
import Booths from "./page/Admin/Booths/Booths";
import Products from "./page/Admin/Products/Products";
import ChangePassword from "./page/ChangePassword";
import ListBooth from "./page/ListBooth";
import ProductManage from "./page/ProductManage";
import ListProduct from "./page/ListProduct";
import ProductDetail from "./page/ProductDetail";
import Profile from "./page/Profile";
import VerifyEmail from "./page/VerifyEmail";
import InviteUser from "./page/InviteUser";

function App() {
  return (
    <Box minH={"100vh"} w="100vw" bg="#ffffff">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="booths" element={<ListBooth />} />
          <Route path="booth-detail/:id" element={<BoothDetail />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />

          <Route path="booth-manage" element={<BoothManage />} />
          <Route path="product" element={<Product />} />
          <Route path="product-manage" element={<ProductManage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<ListProduct />} />
          <Route path="invite" element={<InviteUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/booths" exact="true" element={<Booths />} />
        <Route
          path="/admin/booth/:id/products"
          exact="true"
          element={<Products />}
        />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
      </Routes>
    </Box>
  );
}

export default App;
