import NavBar from "components/nav-bar/NavBar";
import AddProductPage from "pages/AddProductPage";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const navBarItems = [
  {
    cta: "Add product",
    path: "/seller/add-product",
  },
];

const SellerLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar navBarItems={navBarItems} />
      <Routes>
        <Route path="/seller/add-product" element={<AddProductPage />} />
        <Route
          path="*"
          element={<Navigate to="/seller/add-product" replace />}
        />
      </Routes>
    </Suspense>
  );
};
export default SellerLayout;
