import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../pages/Homepage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import Delivery from "../pages/Delivery";
import History from "../pages/History";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path={"shopping-cart"} element={<ShoppingCartPage />} />
          <Route path={"delivery"} element={<Delivery />} />
          <Route path={"history"} element={<History />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
